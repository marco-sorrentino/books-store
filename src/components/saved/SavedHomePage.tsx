import { Col, Row } from "react-bootstrap";
import { SavedBooks } from "./SavedBooks";

export const SavedHomePage = () => {
  return (
    <div>
      <Row>
        <SavedBooks />
      </Row>
    </div>
  );
};
