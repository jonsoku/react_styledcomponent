import React, { Component, Fragment } from 'react';
import styled, { createGlobalStyle, css , keyframes } from "styled-components";

/* 기존


const Button = ({danger}) => (
    <button className={danger ? "button button--danger" : "button button--success"}>Hello</button>
)

 */

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    padding:0;
  }
`

//그룹화
const Card = css`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0,0,0,0.08);
  background-color: white;
  border-radius: 10px;
  padding:20px;
`


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
  
  ${props => {
    if (props.danger) {
        return css`animation: ${Rotation} ${props.rotationTime}s linear infinite;`;
      }
  }}
  
  
  
`;

//똑같은 스타일(css)를 다른 태그사용할때 재활용하기.
//const Anchor = Button.withComponent("a")
//const Anchor = Button.withComponent("a").extend`
// text-decoration:none;
// `;

const Anchor = styled(Button.withComponent("a"))`
  text-decoration:none;
`;


const Rotation = keyframes`
from{
transform: rotate(0deg);
}
to{
transform: rotate(360deg);
}
`;


const Input = styled.input.attrs({
    required: true
})`
  border:none;
  ${Card}
`;

class App extends Component {
  render() {
    return (
        <>
        <GlobalStyle/>
        <Container>
            <Input placeholder="hello"/>
        </Container>
        </>
    );
  }
}



export default App;
