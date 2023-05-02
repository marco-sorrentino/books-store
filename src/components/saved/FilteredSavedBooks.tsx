import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Book, SingleBookProps } from "../../types/book";
import { SingleBook } from "../homepage/SingleBook";

export const FilteredSavedBooks = () => {
  const seeSaved = useSelector(
    (state: { saved: SingleBookProps[] }) => state.saved
  );

  return (
    <div className="mt-4 mx-2">
      <Row>
        {seeSaved &&
          seeSaved.map((el, i) => {
            return (
              <Col key={i} md={2} className="mt-4 mb-3 mt-md-0">
                <SingleBook
                  title={el.title}
                  cover={el.cover}
                  authors={el.authors}
                  obj={el.obj}
                />
              </Col>
            );
          })}
      </Row>
    </div>
  );
};
