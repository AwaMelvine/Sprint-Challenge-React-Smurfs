import React, { Component } from "react";
import styled from "styled-components";

const SmurfFormWrapper = styled.div`
  width: 50%;
  margin: 2rem auto 0px;
  background: white;
  border-radius: 0.5rem 0.5rem 0 0;
`;

const StyledSmurfForm = styled.form`
  width: 50%;
  margin: 0px auto;
  padding: 1rem;
  border-radius: 0.5rem;

  input {
    display: block;
    width: 100%;
    margin-bottom: 0.35rem;
    height: 50px;
    outline: none;
    border: 1px solid #dfdfdf;
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 0.3rem;
    font-weight: lighter;
  }
`;

const SubmitButton = styled.button`
  border: none;
  cursor: pointer;
  font-weight: normal;
  outline: none;
  border-radius: 5px;
  width: 100%;
  text-align: center;
  line-height: 1em;
  padding: 1.125rem 2rem;
  font-size: 1.2em;
  background: #3e8989;
  color: #fff;

  &:hover {
    background: #306b6b;
  }
`;

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    this.props.createSmurf(this.state);
    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  handleInputChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  render() {
    return (
      <SmurfFormWrapper>
        <StyledSmurfForm onSubmit={event => this.addSmurf(event)}>
          <input
            onChange={this.handleInputChange}
            placeholder="Name"
            value={this.state.name}
            onChange={event => this.handleInputChange(event)}
            name="name"
          />
          <input
            type="number"
            onChange={this.handleInputChange}
            placeholder="Age"
            value={this.state.age}
            onChange={event => this.handleInputChange(event)}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Height"
            value={this.state.height}
            onChange={event => this.handleInputChange(event)}
            name="height"
          />
          <SubmitButton type="submit">Add to the village</SubmitButton>
        </StyledSmurfForm>
      </SmurfFormWrapper>
    );
  }
}

export default SmurfForm;
