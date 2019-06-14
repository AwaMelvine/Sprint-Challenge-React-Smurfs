import React, { Component } from "react";
import axios from "axios";
import { Route, NavLink } from "react-router-dom";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

const smurfsApi = "http://localhost:3333";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  async componentDidMount() {
    const { data } = await axios.get(`${smurfsApi}/smurfs`);
    this.setState({ smurfs: data });
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  createSmurf = async smurf => {
    const { data } = await axios.post(`${smurfsApi}/smurfs`, smurf);
    this.setState({ smurfs: data });
  };
  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
        <Route
          path="/smurf-form"
          render={props => (
            <SmurfForm {...props} createSmurf={this.createSmurf} />
          )}
        />
      </div>
    );
  }
}

export default App;
