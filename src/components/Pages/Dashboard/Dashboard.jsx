import React, { useEffect, useState } from "react";
import axios from "axios";
import Resources from "../../Resourses/Resources"
import { Container } from "react-bootstrap";
import Sidebar from "../../SideBar/Sidebar"
import Rating from "../../Rating/Rating"

const Dashboard = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <>
      <Sidebar />
    <Container>
      <Resources resources={resources} loading={loading} class="mt-5" />
      <Rating />
    </Container>
    </>
  );
};

export default Dashboard;
