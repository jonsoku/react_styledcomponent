import React, { Component, Fragment } from 'react';
import styled, { createGlobalStyle, css , keyframes, ThemeProvider} from "styled-components";
import theme from "./theme"
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

const Card = styled.div`
  background-color: red;
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: pink;
  ${Card} {
    background-color: blue;
  }
`;

const Button = styled.button`
  border-radius: 30px;
  padding: 25px 15px;
  background-color: ${props => props.theme.successColor};
`;

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Container>
                    <Form />
                </Container>
            </ThemeProvider>
        );
    }
}

const Form = () => (
    <Card>
        <Button>Hello</Button>
    </Card>
);

export default App;