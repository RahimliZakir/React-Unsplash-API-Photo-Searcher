import React from "react";

import { Col, Card } from "react-bootstrap";

const Image = ({ item }) => {
  return (
    <Col md={3} className="mt-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item?.cover_photo.urls.regular} />
      </Card>
    </Col>
  );
};

export default Image;
