import './App.css';
import Form from './components/Form';
import React from 'react';

const App = () => {
  return (
    <div className="App">
      <div className="App-content">
        <p>
          Aquí haremos nuestro TO-DO list
        </p>
        <Form />
      </div>
    </div>
  );
}

export default App;
