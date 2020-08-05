import React from 'react';
import './App.css';
import Box from './Box';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>      

      <Box width={10} height={15} color="red" />
      <Box width={5} height={8} color="green" />
    </div>
  );
}

export default App;
