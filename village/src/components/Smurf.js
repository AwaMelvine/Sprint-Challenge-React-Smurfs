import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledSmurf = styled.div`
  h3 {
    margin-top: 0px;
  }
`;

const Delete = styled.span`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  cursor: pointer;
  color: #ef6e6e;
  z-index: 5;
`;

const Edit = styled(Link)`
  position: absolute;
  right: 1.5rem;
  bottom: 1.5rem;
  cursor: pointer;
  color: #3e8989;
`;

const Smurf = props => {
  return (
    <React.Fragment>
      <StyledSmurf>
        <h3>{props.name}</h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>
        <Delete
          onClick={event => {
            event.preventDefault();
            event.stopPropagation();
            props.deleteSmurf(props.id);
          }}
        >
          delete
        </Delete>
        <Edit
          to={`/update-smurf/${props.id}`}
          onClick={() => props.findSmurf(props.id)}
        >
          edit
        </Edit>
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
