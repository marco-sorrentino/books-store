import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { BookDetai } from "../../types/book";

export const BookDetail = () => {
  const seeDetail = useSelector((state: { books: BookDetai[] }) => state.books);
  console.log(seeDetail);

  return (
    <div>
      <Row>
        <Col>
          {seeDetail.map((el) => {
            return (
              <div>
                <p>{el.title}</p>
                <p className="description px-4">
                  {el.obj.volumeInfo.description}
                </p>
              </div>
            );
          })}
        </Col>
      </Row>
    </div>
  );
};
