import React, { Component } from "react";
import styled from "styled-components";
import Smurf from "./Smurf";

const StyledSmurfsWrapper = styled.div`
  width: 50%;
  margin: 0px auto 0px;
  background: white;
  padding: 20px;
  border-radius: 0.35rem;
  ul {
    display: flex;
    flex-wrap: wrap;
  }
`;

class Smurfs extends Component {
  render() {
    return (
      <StyledSmurfsWrapper>
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </ul>
      </StyledSmurfsWrapper>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
