import React, { Component } from "react";
import axios from "axios";
import { Route, NavLink } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

const smurfsApi = "http://localhost:3333";

const NavBar = styled.nav`
  width: 50%;
  margin: 0px auto;
  display: flex;
  justify-content: flex-end;
  padding: 2rem 0rem 1rem 0rem;

  a {
    margin-left: 1rem;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
    &.active {
      color: #3e8989;
    }
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      smurf: {
        id: "",
        name: "",
        age: "",
        height: ""
      },
      editing: false
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
  updateSmurf = async smurf => {
    const { data } = await axios.put(`${smurfsApi}/smurfs/${smurf.id}`, smurf);
    this.setState({ smurfs: data });
  };
  deleteSmurf = async id => {
    const { data } = await axios.delete(`${smurfsApi}/smurfs/${id}`);
    this.setState({ smurfs: data });
  };
  findSmurf = id => {
    const smurf = this.state.smurfs.find(smurf => smurf.id === id);
    this.setState({ ...this.state, smurf, editing: true });
  };
  render() {
    const { name, age, height, id } = this.state.smurf;
    return (
      <div className="App">
        <NavBar>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/smurf-form">Create Smurf</NavLink>
        </NavBar>
        <Route
          exact
          path="/"
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf}
              findSmurf={this.findSmurf}
            />
          )}
        />
        <Route
          path="/smurf-form"
          render={props => (
            <SmurfForm
              {...props}
              editing={this.state.editing}
              createSmurf={this.createSmurf}
            />
          )}
        />
        <Route
          path="/update-smurf/:id"
          render={props => (
            <SmurfForm
              {...props}
              editing={true}
              id={id}
              name={name}
              age={age}
              height={height}
              createSmurf={this.createSmurf}
              updateSmurf={this.updateSmurf}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
