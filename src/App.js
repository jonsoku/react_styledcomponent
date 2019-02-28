import React, { Component, Fragment } from 'react';
import styled from "styled-components";

class App extends Component {
  render() {
    return (
        <Container>
            <Button danger>HELLO</Button>
            <Button success>HELLO</Button>
        </Container>
    );
  }
}
/* 기존


const Button = ({danger}) => (
    <button className={danger ? "button button--danger" : "button button--success"}>Hello</button>
)

 */

const Container = styled.div`
  height: 100vh;
  width:100%;
  background-color: grey;
`;

/* styled-components적용 */
const Button = styled.button`
  border-radius: 50px;
  padding:5px;
  min-width:120px;
  color:white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus{
    outline:none;
  }
  background-color: ${props => props.danger ? "#e74c3c" : "skyblue"};
`;




export default App;
