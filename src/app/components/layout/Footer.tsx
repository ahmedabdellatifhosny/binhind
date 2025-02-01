import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <section className="footer">
      <Container>
        <Row>
          <Col md={12}>
            <p className="text-center">Copyright &copy; Bin Hind</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
