import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { BookDetail } from "./components/homepage/BookDetail";
import { HomePage } from "./components/homepage/HomePage";
import { FilteredSavedBooks } from "./components/saved/FilteredSavedBooks";
import { SavedHomePage } from "./components/saved/SavedHomePage";
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
            <Col className="p-0">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/saved" element={<SavedHomePage />} />
                <Route path="/detail" element={<BookDetail />} />
                <Route path="/:filter/" element={<FilteredSavedBooks />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
