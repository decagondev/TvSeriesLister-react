import React, { Component } from "react";
import styled from "styled-components";
import Main from "../../components/Main";

const StyledApp = styled.div`
  text-align: center;
`;

const StyledHeader = styled.header`
  background-color: #222;
  height: 200px;
  padding: 20px;
  color: white;
`;

const StyledHeaderTitle = styled.h1`
  font-size: 5rem;
`;

const StyledAppIntro = styled.div`
  font-size: 1.6rem;
input {
    height: 40px;
    width: 300px;
    border-radius: 15px;
    border: 1px solid #bbb;
    margin: 15px 0;
    font-size: 1.6rem;
    color: #777;
    padding: 10px 20px;
    text-align: center;

    &:focus {
      outline: none;
    }

    &:active {
      outline: none;
    }
  }
`;

class App extends Component {
  render() {
    return (
      <StyledApp>
        <StyledHeader>
          <StyledHeaderTitle>Series Lister</StyledHeaderTitle>
        </StyledHeader>
        <StyledAppIntro>
          <Main />
        </StyledAppIntro>
      </StyledApp>
    );
  }
}

export default App;
