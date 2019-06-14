import React, { Component } from "react";
import { Link } from "react-router-dom";
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

const SmurfWrapper = styled(Link)`
  text-decoration: none;
  color: unset;
  border: 1px solid #8cd1d1;
  margin: 0.5rem;
  width: 47%;
  flex-grow: 1;
  border-radius: 0.35rem;
  text-align: left;
  padding: 1.5rem;
  position: relative;
`;

class Smurfs extends Component {
  render() {
    const { deleteSmurf, findSmurf } = this.props;
    return (
      <StyledSmurfsWrapper>
        {!this.props.single && <h1>Smurf Village</h1>}
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <SmurfWrapper
                to={`/smurf/${smurf.id}`}
                onClick={() => findSmurf(smurf.id)}
              >
                <Smurf
                  deleteSmurf={deleteSmurf}
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                  findSmurf={findSmurf}
                />
              </SmurfWrapper>
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
