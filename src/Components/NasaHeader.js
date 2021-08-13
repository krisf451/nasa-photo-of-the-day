import React from "react";
import { Jumbotron, Container } from "reactstrap";

export default function NasaHeader() {
  return (
    <Jumbotron fluid>
      <Container fluid>
        <h1 className="display-3">EARTH</h1>
        <p className="lead">The final frontier???</p>
        <img
          className="App-logo"
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/2/22/Earth_Western_Hemisphere_transparent_background.png"
        />
      </Container>
    </Jumbotron>
  );
}
