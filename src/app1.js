import React, { Component } from 'react'

class componentName extends Component {
    render () {
        return (
            <h5 className="payment-details">Payment Details</h5>
          <div>
            <p className="card">Card Number</p>
              <p className="card_number" style={{}}>1234 5678 9077 8888</p>
              <img src="visa.png" style={{width:"30px", height:"10px", float:"right"}}/>
          </div>
          <div>
            <p className="card">Cardholder Name</p>
            <p className="card_name">Nero Adaw</p>
          </div>
          <div>
            <p className="card card-expiration">Expiration</p>
            <span>
              <p className="card-month">January <i className="fas fa-angle-down"></i></p><p className="card-year">1993 <i className="fas fa-angle-down"></i></p>
            </span>
          </div>
        )
    }
}

export default componentName