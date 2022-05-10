import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateDeliveryLog extends Component {
  constructor(props) {
    super(props);

    this.onChangeRobotname = this.onChangeRobotname.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      robotname: '',
      date: new Date(),
      robots: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/robots/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            robots: response.data.map(robot => robot.robotname),
            robotname: response.data[0].robotname
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeRobotname(e) {
    this.setState({
      robotname: e.target.value
    })
  }

  

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const delivery = {
      robotname: this.state.robotname,
      date: this.state.date
    }

    console.log(delivery);

    axios.post('http://localhost:4000/deliveries/add', delivery)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  // deliveryLog() {
  //   return this.state.deliveries.map(currentdelivery => {
  //     return <Delivery delivery={currentdelivery} deleteDelivery={this.deleteDelivery} key={currentdelivery._id}/>;
  //   })
  // }

  render() {
    return (
    <div>
      <h3>Create New Delivery Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Robotname: </label>
          <select ref="robotInput"
              required
              className="form-control"
              value={this.state.robotname}
              onChange={this.onChangeRobotname}>
              {
                this.state.robots.map(function(robot) {
                  return <option 
                    key={robot}
                    value={robot}>{robot}
                    </option>;
                })
              }
          </select>
        </div>
        

        {/* <div>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Robotname</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            { this.deliveryLog() }
          </tbody>
        </table>
        </div> */}

        <div className="form-group">
          <input type="submit" value="Create Delivery Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}