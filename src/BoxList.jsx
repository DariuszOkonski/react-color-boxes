import React, { Component } from 'react'
import Box from './Box';
import NewBoxForm from './NewBoxForm';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: [
                { width: 10, height: 5, color: "orange" },
                { width: 12, height: 7, color: "blue" }
            ]
        }

        this.create = this.create.bind(this);
    }
    
    create(newBox) {
        this.setState(prevState => ({
            boxes: [...prevState.boxes, newBox]
        }));
    }

    render() { 
        const boxes = this.state.boxes.map(box =>
                <Box width={box.width} height={box.height} color={box.color} />
            )

        return ( 
            <div>
                <h1>Color Box Maker Thingy</h1>
                <NewBoxForm create={this.create}/>
                {
                    boxes
                }
            </div>
         );
    }
}
 
export default BoxList;