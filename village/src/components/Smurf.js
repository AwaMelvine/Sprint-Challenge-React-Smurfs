import React from "react";
import styled from "styled-components";

const StyledSmurf = styled.div`
  border: 1px solid #8cd1d1;
  margin: 0.5rem;
  width: 47%;
  flex-grow: 1;
  border-radius: 0.35rem;
  text-align: left;
  padding: 1.5rem;
  position: relative;

  h3 {
    margin-top: 0px;
  }
`;

const Delete = styled.span`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  cursor: pointer;
  color: #ef6e6e  ;
`;

const Smurf = props => {
  return (
    <React.Fragment>
      <StyledSmurf>
        <h3>{props.name}</h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>
        <Delete>x</Delete>
      </StyledSmurf>
    </React.Fragment>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
