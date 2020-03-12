import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import image from "../assets/image.JPG";
import Container from "react-bootstrap/Container";
import TypeIt from "typeit-react";
import "./slideshow.css";
import grey from "../assets/grey.jpeg";

const events = [
  {
    heading: "Hackindore",
    imgPath: image,
    description: "Eu magna culpa velit laborum."
  },
  {
    heading: "Python Session 2",
    imgPath: image,
    description: "Eu magna culpa velit laborum."
  },
  {
    heading: "Python Session 3",
    imgPath: image,
    description: "Eu magna culpa velit laborum."
  },
  {
    heading: "Python Session 3",
    imgPath: image,
    description: "Eu magna culpa velit laborum."
  },
  {
    heading: "Python Session 3",
    imgPath: image,
    description: "Eu magna culpa velit laborum."
  },
  {
    heading: "Python Session 3",
    imgPath: image,
    description: "Eu magna culpa velit laborum."
  },
  {
    heading: "Python Session 3",
    imgPath: image,
    description: "Eu magna culpa velit laborum."
  }
];

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <div>
      <TypeIt element={"h1"} font-weight={"bold"}>
        Our Events
      </TypeIt>
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={handleSelect}
        interval={3000}
      >
        {events.map((event, index) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={event.imgPath}
                alt="First slide"
              />
              <Carousel.Caption>
                <Container id="con">
                  <h1>{event.heading}</h1>
                  <p>{event.description}</p>
                </Container>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Slideshow;
