import moment from "moment";
import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Container, Row, Col } from "react-bootstrap";

function AppHeader({ updateData }) {
  const [location, setLocation] = useState("");

  const search = async (event) => {
    if (event.key === "Enter") {
      try {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=Metric&APPID=9d3a7ce85df91bef4560ef09db68d090`;
        const response = await fetch(url);
        const data = await response.json();
        updateData(data);
      } catch (err) {
        console.log(err.message);
      }
    }
  };

  return (
    <>
      <Navbar className="bg-custom navbar navbar-expand-xl">
        <Container className="d-flex align-items-center justify-content-center ms-3">
          <Row className="gx-3">
            <Col xs={6} >
              <Navbar.Brand className="display-6 d-flex align-items-center justify-content-center  ">
                WEATHER FORECAST
              </Navbar.Brand>
            </Col>
            <Col xs={6}>
              <Form.Control
                type="text"
                className="input rounded-pill"
                placeholder="Cerca la tua città"
                style={{ width: 150 }}
                onChange={(event) => setLocation(event.target.value)}
                onKeyDown={search}
              />
            </Col>

            {/* <Col xs={12} xl={4}>
              <NavDropdown
              
                title="Località salvate"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Col> */}
          </Row>
        </Container>
      </Navbar>

      <p className="small  mt-2">
        
        {moment().format("LL")}
      </p>
    </>
  );
}
export default AppHeader;
