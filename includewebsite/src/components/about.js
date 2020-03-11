import React from "react";
import "./about.css";
import Container from "react-bootstrap/Container";
export default function About() {
  return (
    <div className="about">
      <Container id="con">
        <h1 style={{ textAlign: "center", fontSize: 55, paddingTop: "1em" }}>
          About Us
        </h1>
        <p
          style={{
            width: "75%",
            margin: "auto",
            paddingTop: "1em",
            overflow: "auto"
          }}
        >
          #include-A techno learning club associated with talent,knowledge and
          learning is the official club of Information Technology Department. We
          are collaboration of ardent technophiles and zealous learners who
          believe that the central purpose of education,learning and
          collaboartion is to mediate voluntary evolution.
        </p>
      </Container>
    </div>
  );
}
