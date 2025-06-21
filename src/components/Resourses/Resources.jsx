import React from "react";
import { Row, Col, Card, Spinner } from "react-bootstrap";
import { FaBookmark } from "react-icons/fa";

export default function Resources({ resources = [], loading }) {
  return (
    <div className="container mt-5">
      <h5 className="mb-3">Resources</h5>
      <Row className="g-3">
        <Col xs={12} md={6} lg={4}>
          <Card className="bg-white p-4" style={{ height: "180px" }}></Card>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Card className="bg-white p-4" style={{ height: "180px" }}></Card>
        </Col>

        {loading ? (
          <Col>
            <Spinner animation="border" />
          </Col>
        ) : (
          resources?.map((item) => (
            <Col xs={12} md={6} lg={4} key={item.id}>
              <Card style={{ height: "180px" }}>
                <Card.Img
                  src={item.image || "https://via.placeholder.com/300x110"}
                  style={{ height: "110px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between align-items-center">
                    {item.title}
                    <FaBookmark className="text-muted" />
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
}

