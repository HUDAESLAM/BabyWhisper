import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import Sidebar from "../../SideBar/Sidebar";
import Rating from "../../Rating/Rating";
import NavUser from "../../UserNavbar/NavUser";

const Dashboard = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [recentArticles, setRecentArticles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/resource/getAllResources")
      .then((res) => {
        setResources(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching resources:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const storedArticles =
      JSON.parse(localStorage.getItem("recentArticles")) || [];
    setRecentArticles(storedArticles);
  }, []);

  return (
    <div className="chat-bg">
      <Sidebar />
      <NavUser />

      <Container className="text-light-blue" style={{ padding: "100px" }}>
        <h3 className="text-light-blue mb-4">Last Visited Articles</h3>
        <Row className="mb-5">
          {recentArticles.length === 0 ? (
            <p className="text-muted">No recent articles viewed yet.</p>
          ) : (
            recentArticles.map((article) => (
              <Col
                key={article.resource_id}
                xs={12}
                md={6}
                lg={4}
                className="mb-4"
              >
                <Card className="h-100 shadow-sm ">
                  <Card.Body>
                    <Card.Title className="fw-bold text-center mb-3 text-light-blue">
                      {article.title}
                    </Card.Title>
                    <Card.Text
                      className="text-muted "
                      style={{
                        whiteSpace: "pre-line",
                        maxHeight: "150px",
                        overflow: "hidden",
                      }}
                    >
                      {article.content}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
        </Row>

        <Rating />
      </Container>
    </div>
  );
};

export default Dashboard;
