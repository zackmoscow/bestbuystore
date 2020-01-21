import React from "react";
import { Col, Row, Container } from "../components/Grid";
import TopProducts from "../components/TopProducts";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <TopProducts />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;