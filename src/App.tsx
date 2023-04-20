import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/homepage/HomePage";
import { SideBar } from "./components/sideBarFolder/SideBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container fluid>
          <Row>
            <Col className="p-0" md={1} xs={2}>
              <SideBar />
            </Col>
            <Col>
              <Routes>
                <Route path="/" element={<HomePage />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
