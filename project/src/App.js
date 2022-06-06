import React, { useState } from "react";
import { Container, Row, Col, FormControl, Form, Card } from "react-bootstrap";

import API from "./api";

const App = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    //* Query String tek olsa bele de yazmaq olar
    // `search/photos?query=${term}`;

    const { data } = await API.get("search/photos", {
      params: {
        query: term,
      },
    });
    setResults(data);
    console.log(results);
  };

  return (
    <div className="App mt-5">
      <Container>
        <Row>
          <Col md={12}>
            <Form onSubmit={handleFormSubmit}>
              <FormControl
                type="text"
                placeholder="Search..."
                onChange={(e) => setTerm(e.target.value)}
                value={term}
              />
            </Form>
          </Col>
          {results.results?.map((item, index) => (
            <Col key={index + 1} md={3} className="mt-3">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={item.urls.regular} />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default App;
