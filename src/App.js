import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CardCountry from "./components/CardCountry";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const App = () => {
  const [paises, setPaises] = useState([]);
  const [country, setCountry] = useState("");

  console.log(paises);

  const newCountry = (e) => {
    setCountry(e.target.value);
  };

  const quieroPais = async () => {
    try {
      const respuesta = await axios.get(`https://restcountries.com/v2/all`);
      setPaises(respuesta.data);
    } catch (error) {
      console.log("Error en la comunicación");
      console.log(error.toJSON());
    }
  };

  const oneCountry = async () => {
    try {
      const respuesta = await axios.get(
        `https://restcountries.com/v2/name/${country}`
      );
      setPaises(respuesta.data);
    } catch (error) {
      console.log("Error en la comunicación");
      console.log(error.toJSON());
    }
  };

  const pressEnter = (e) => {
    if (e.key === "Enter") {
      oneCountry();
    }
  };
  // useEffect(() => {
  // 	if (country) {
  // 		quieroPais();

  // 	}
  // 	console.log('render desde useEffect');
  // }, []);

  useEffect(() => {
    quieroPais();
  }, []);

  return (
    <div style={{ backgroundColor: "#333D31" }}>
      <Form class="d-flex justify-content-center">
        <Form.Control
          type="text"
          name=""
          id="country"
          placeholder="Country"
          value={country}
          onChange={newCountry}
          onKeyDown={pressEnter}
          style={{ width: "20rem" }}
        />
      </Form>
      <div class="d-flex justify-content-center">
        <Button
          variant="primary"
          onClick={quieroPais}
          style={{ alignItems: "center", margin: "1rem" }}
        >
          Get ALL
        </Button>
        <Button
          variant="success"
          onClick={oneCountry}
          style={{ alignItems: "center", margin: "1rem" }}
        >
          Buscar
        </Button>
      </div>

      <div className="d-flex flex-wrap justify-content-around mt-3">
        {paises.map((item) => {
          return (
            <div>
              <CardCountry pais={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
