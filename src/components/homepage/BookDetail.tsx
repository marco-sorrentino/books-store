import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

export const BookDetail = () => {
  const seeDetail = useSelector((state: any) => state.books);
  console.log(seeDetail);

  return (
    <div>
      <Row>
        <Col>CIAOOOOOO</Col>
      </Row>
    </div>
  );
};
