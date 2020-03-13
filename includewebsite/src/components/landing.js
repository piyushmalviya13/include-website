import React, { Image, Transformation } from "react";
import "./landing.css";
import logo from "../assets/background.jpg";
import Particles from "react-particles-js";
import styled, { keyframes } from "styled-components";
import Container from "react-bootstrap/Container";
import FadeIn from "react-animations/lib/fade-in";
import Typing from "react-typing-animation";
const FadeInAnimation = keyframes`${FadeIn}`;
const FadeInDiv = styled.div`
  animation: 5s ${FadeInAnimation};
`;

export default function Landing() {
  return (
    <div>
      <Particles
        params={{
          particles: {
            line_linked: {
              shadow: {
                enable: true,
                color: "#3CA9D1",
                blur: 5
              }
            }
          }
        }}
        style={{
          width: "100vw",
          height: "100vh",
          backgroundImage: `url(${logo})`,
          backgroundSize: "cover"
        }}
      />

      <FadeInDiv>
        <h1 className="heading">#include</h1>
      </FadeInDiv>
      <Typing>
        <h3 className="line">
          Techno-learning club ,Information Technology Department,SGSITS
        </h3>
      </Typing>
    </div>
  );
}
