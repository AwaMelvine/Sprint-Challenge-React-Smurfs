import React, { Component } from "react";
import styled from "styled-components";

const SmurfFormWrapper = styled.div`
  width: 50%;
  margin: 0px auto;
  background: white;
  border-radius: 0.35rem;
  padding: 3rem;
`;

const StyledSmurfForm = styled.form`
  width: 50%;
  margin: 0rem auto;
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
  button {
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
    color: #fff;
  }
`;

const AddButton = styled.button`
  background: #3e8989;

  &:hover {
    background: #306b6b;
  }
`;

const UpdateButton = styled.button`
  background: #3b5998;
`;

class SmurfForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id || "",
      name: props.name || "",
      age: props.age || "",
      height: props.height || ""
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      name: nextProps.name,
      age: nextProps.age,
      height: nextProps.height
    });
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

  submit = event => {
    event.preventDefault();
    if (this.props.editing) {
      this.props.updateSmurf(this.state);
      this.props.history.push("/");
    } else {
      this.props.createSmurf(this.state);
      this.props.history.push("/");
    }
  };

  render() {
    const { editing } = this.props;
    const { name, height, age } = this.state;

    const formTitle = editing ? "Update Smurf" : "Add Smurf";
    const submitBtn = editing ? (
      <UpdateButton type="submit">Update Smurf</UpdateButton>
    ) : (
      <AddButton type="submit">Add to the village</AddButton>
    );

    return (
      <SmurfFormWrapper>
        <StyledSmurfForm onSubmit={event => this.submit(event)}>
          <h3>{formTitle}</h3>
          <input
            placeholder="Name"
            value={name}
            onChange={event => this.handleInputChange(event)}
            name="name"
          />
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={event => this.handleInputChange(event)}
            name="age"
          />
          <input
            placeholder="Height"
            value={height}
            onChange={event => this.handleInputChange(event)}
            name="height"
          />
          {submitBtn}
        </StyledSmurfForm>
      </SmurfFormWrapper>
    );
  }
}

export default SmurfForm;
