import React, { Component } from 'react';
import Front from './front'


import './App.css';
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      flipped:false
    }

  }

  flip =()=>{
    this.setState({ flipped: !this.state.flipped });
  }
  
  render() {
    return (
      <div className="App">
      
        <div className="item">
          <a href="#" aria-label="Close Account Info Modal Box" className="close-modal">&times;</a>
          <div className="item-details">
              <img src="bag5.png" style={{height:"120px", width:"150px", marginLeft:"50px"}} />
              <p className="price" >2500</p>
              <p className="description">MINISCO COIN PURSE(PINK)</p>
          </div>
        </div>
          <Front></Front>
      </div>
    );
  }
}

export default App;
