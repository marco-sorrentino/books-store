import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { SingleBookProps } from "../../types/book";
import { SingleBook } from "../homepage/SingleBook";

export const FilteredSavedBooks = () => {
  const seeSaved = useSelector(
    (state: { saved: SingleBookProps[] }) => state.saved
  );
  const params = useParams();
  const category = seeSaved.map((el) => el.obj?.volumeInfo?.categories);
  console.log("categoria", category);
  console.log("SONO P", params);
  return (
    <div>
      <Row></Row>
    </div>
  );
};
