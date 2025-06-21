import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const ratings = [
  {
    name: "Emma men U",
    review: "I love how BabyWhisper quickly analyzes my baby’s cries and gives me instant insights!",
    verified: true,
    month: 2,
    stars: 5,
    img: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    name: "James Kwan",
    review: "BabyWhisper is a lifesaver—it helps me understand what my baby needs without the guesswork.",
    verified: true,
    month: 1,
    stars: 5,
    img: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    name: "Sophia Rodriguez",
    review: "The accuracy of BabyWhisper is impressive.",
    verified: true,
    month: 1,
    stars: 5,
    img: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    name: "Daniel Brown",
    review: "I never knew a tool like BabyWhisper could exist—brilliant work!",
    verified: true,
    month: 1,
    stars: 5,
    img: "https://randomuser.me/api/portraits/men/4.jpg"
  },
];

const Ratings = () => {
  return (
    <>
      <h4 className="mt-5 mb-3">Our Ratings</h4>
      <Row className="g-3">
        {ratings.map((item, index) => (
          <Col md={6} key={index}>
            <Card className="p-3 shadow-sm">
              <div className="d-flex">
                <img
                  src={item.img}
                  alt={item.name}
                  className="rounded-circle me-3"
                  width="60"
                  height="60"
                />
                <div>
                  <h6>{item.name}</h6>
                  <p className="small text-muted mb-1">{item.review}</p>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="text-warning">
                      {"★".repeat(item.stars)}
                    </div>
                    <small className="text-muted">
                      Account Verified • Month: {item.month}
                    </small>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Ratings;
