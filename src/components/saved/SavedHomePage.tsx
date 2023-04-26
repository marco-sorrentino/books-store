import { Col, Row } from "react-bootstrap";
import { FilteredSavedBooks } from "./FilteredSavedBooks";
import { SavedBooks } from "./SavedBooks";

export const SavedHomePage = () => {
  return (
    <div>
      <Row className="m-0">
        <SavedBooks />
      </Row>
    </div>
  );
};
