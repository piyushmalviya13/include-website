import React from "react";
import "./App.css";
import Slideshow from "./components/Slideshow";
import Landing from "./components/landing";
import Navbar from "./components/Navbar";
import About from "./components/about";
import Container from "@material-ui/core/Container";
import styled, { keyframes } from "styled-components";
import FadeIn from "react-animations/lib/fade-in";
import Box from "@material-ui/core/Box";

const FadeInAnimation = keyframes`${FadeIn}`;
const FadeInDiv = styled.div`
  animation: 5s ${FadeInAnimation};
`;

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />

      <FadeInDiv>
        <Box mx="auto" bgcolor="" p={10}>
          <Container maxWidth="lg">
            <Slideshow />
          </Container>
        </Box>
      </FadeInDiv>
    </div>
  );
}

export default App;
