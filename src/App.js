import React, { Component } from 'react';

import './App.css';
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="item">
          <a href="#" aria-label="Close Account Info Modal Box" className="close-modal">&times;</a>
          <div className="item-details">
              <img src="bag5.png" style={{height:"75px", width:"75px"}} />
              <p className="price" >2500</p>
              <p className="description">MINISCO COIN PURSE(PINK)</p>
          </div>
        </div>
        <div className="item-payment" style={{justifyContent:"center"}}>
          <h5 className="payment-details">PAYMENT DETAIL</h5>
          <form action="">
            <div>
              <label>Card Number</label>
              <input type="number"/>
            </div>
            <div>
              <label>Cardholder Name</label>
              <input type="text"/>
            </div>
            <div >
              <label >Expiration</label>
              <div className="dropdown">
                <div className="select-wrapper-month">
                  <select>
                    <option >January</option>
                    <option >June</option>
                    <option >July</option>
                    <option >Jecember</option>
                  </select>
                </div>
                <div className="select-wrapper-year">
                  <select>
                    <option >1992</option>
                    <option >1890</option>
                    <option >1960</option>
                    <option >2000</option>
                  </select>
                </div>
              </div>
             
            </div>
            
          </form>
          
        </div>
      </div>
    );
  }
}

export default App;
