import React from "react";
import { Container } from "@material-ui/core";
import Page from "../../components/Page";
import { v4 as uuidv4 } from "uuid";
import Carousel from "react-spring-3d-carousel";
import Card from "../../components/Card";

const slides = [
  {
    key: uuidv4(),
    content: <Card />,
  },
  {
    key: uuidv4(),
    content: <Card />,
  },
  {
    key: uuidv4(),
    content: <Card />,
  },
  {
    key: uuidv4(),
    content: <Card />,
  },
  {
    key: uuidv4(),
    content: <Card />,
  },
  {
    key: uuidv4(),
    content: <Card />,
  },
  {
    key: uuidv4(),
    content: <Card />,
  },
  {
    key: uuidv4(),
    content: <Card />,
  },
];

function Carousel3d() {
  return (
    <Page title="Carousel 3d">
      <Container>
        <div style={{ width: "100%", height: "60vh" }}>
          <Carousel showNavigation slides={slides} />
        </div>
      </Container>
    </Page>
  );
}

export default Carousel3d;
