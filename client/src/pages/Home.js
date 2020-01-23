import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Search from "../components/Search";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Search />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;