import React from 'react';

const front = (props) => {
    return (
    <div className={"item-payment Card-Front" + props.flipped} >
        <p className="payment-details">PAYMENT DETAIL</p>
        <form action="">
          <div className="card-credentials" style={{marginBottom:"10px"}}>
            <div>
              <label>Card Number</label>
              <input type="number" className="card-number"/>
            </div>
            <div className="item-2">
                <div style={{height:"19px"}}></div>
                <img src="visa.png" style={{height:"20px", width:"50px"}} />
            </div>
            
          </div>
          <div style={{marginBottom:"10px"}}>
            <label>Cardholder Name</label>
            <input type="text"/>
          </div>
          <div style={{marginBottom:"10px"}}>
          <div className="card-expiration-header">
            <label >Expiration</label>
            <label>CVV</label>
            
          </div>
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
              <div>
                <input type="number" style={{width:"40px"}} />
              </div>
              <img src="arrow2.jpg" style={{width:"40",height:"20px"}} />
            </div>
           
          </div>
          
        </form>
        
      </div>
    );
};

export default front;