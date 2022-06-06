import React, { useState } from "react";
import { Container, Row, Col, FormControl, Form } from "react-bootstrap";

import Image from "./components/Image";
import API from "./api";

const App = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    //* Query String tek olsa bele de yazmaq olar
    // `search/photos?query=${term}`;

    const { data } = await API.get("search/collections", {
      params: {
        query: term,
        count: 60,
        page: 1,
        per_page: 12,
      },
    });
    setResults(data);
  };

  const paginate = async (page) => {
    const { data } = await API.get("search/collections", {
      params: {
        query: term,
        count: 60,
        page: page,
        per_page: 12,
      },
    });

    setResults(data);
  };

  return (
    <div className="App my-5">
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
            <Image key={item.id} item={item} />
          ))}
          <div className="d-flex justify-content-center mt-3">
            <button onClick={() => paginate(1)} className="btn btn-info">
              1
            </button>
            <button onClick={() => paginate(2)} className="btn btn-info mx-1">
              2
            </button>
            <button onClick={() => paginate(3)} className="btn btn-info">
              3
            </button>
            <button onClick={() => paginate(4)} className="btn btn-info mx-1">
              4
            </button>
            <button onClick={() => paginate(5)} className="btn btn-info">
              5
            </button>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default App;
