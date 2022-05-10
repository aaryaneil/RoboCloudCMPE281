import React, { Component } from 'react';
import axios from 'axios';

export default class CreateRobot extends Component {
  constructor(props) {
    super(props);

    this.onChangeRobotname = this.onChangeRobotname.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      robotname: ''
    }
  }

  onChangeRobotname(e) {
    this.setState({
      robotname: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const robot = {
      robotname: this.state.robotname
    }

    console.log(robot);

    axios.post('http://localhost:4000/robots/add', robot)
      .then(res => console.log(res.data + 'in 4000 robots add'));

    this.setState({
      robotname: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Create New robot</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Robotname: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.robotname}
                onChange={this.onChangeRobotname}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create robot" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}