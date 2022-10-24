import React from "react";

import Card from "react-bootstrap/Card";

const CardCountry = ({ pais }) => {
  return (
    <Card style={{ width: "25rem", margin: "1rem" }}>
      <Card.Title key={pais.id} style={{ textAlign: "center" }}>
        <h1>{pais.name}</h1>
      </Card.Title>
      <Card.Img
        variant="top"
        src={pais.flags.svg}
        style={{ width: "25rem", height: "200px", textAlign: "center" }}
      />
      <Card.Body style={{ textAlign: "center" }}>
        <Card.Text>
          <h4>Poblacion: {pais.population}</h4>
          <h4>Capital: {pais.capital}</h4>
          <h4>Region: {pais.region}</h4>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardCountry;
