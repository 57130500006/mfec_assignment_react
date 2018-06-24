import React, { Component } from 'react';
import './App.css';
import promotion from './promotion1.json';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: undefined
    }
  }

  render() {
    return (
      <div class="container">
        <h1 class="subtitle is-1">PhoneList</h1>
        <div class="card">
          <div class="card-content">
            <table class="table is-fullwidth is-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>PromotionID</th>
                  <th>Phone Number</th>
                  <th>Date</th>
                  <th>Start Time</th>
                  <th>End Time</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {
                  promotion.map(function (promotion, index) {
                    return (
                      <tr>
                        <th>{index + 1}</th>
                        <td>{promotion.promotionId}</td>
                        <td>{promotion.phoneNumber}</td>
                        <td>{promotion.date}</td>
                        <td>{promotion.startTime}</td>
                        <td>{promotion.endTime}</td>
                        <td>{promotion.amount}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
