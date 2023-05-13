import React from 'react';
import Login from './Login';
import Slider from './Slider';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 ">
          <Login />
        </div>
        <div className="col-md-6">
          <Slider />
        </div>
      </div>
    </div>
  );
}

export default App;
