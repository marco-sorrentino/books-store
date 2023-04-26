import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { BookDetai } from "../../types/book";
import "./homepage.scss";

export const BookDetail = () => {
  const seeDetail = useSelector((state: { books: BookDetai[] }) => state.books);
  console.log(seeDetail);
  const key = "AIzaSyBPPH3NK6VX2qM400hCqOvQOt0deBt1HX4";

  return (
    <div className="h-100 boh">
      <Row className="m-0">
        {seeDetail &&
          seeDetail.map((el) => {
            return (
              <Col className="p-0">
                <div className="boxBook px-4 py-4 d-flex align-items-start justify-content-between flex-column">
                  <div className="w-100">
                    <p className="bookTitle mb-3">{el.title}</p>
                    <p>{el.obj.volumeInfo.subtitle}</p>
                    <div className="hrLineBookPage mt-3"></div>
                  </div>

                  <div className="d-flex align-items-center">
                    <img
                      className="pt-4"
                      src={
                        "https://books.google.com/books/content?id=" +
                        el.obj.id +
                        "&printsec=frontcover&img=1&zoom=2&key=" +
                        key
                      }
                      alt="cover"
                    />
                    <div className="px-4">
                      <p>{el.authors}</p>
                      <p>{el.obj.volumeInfo.description}</p>
                    </div>
                  </div>
                  <p>{el.obj.id}</p>
                </div>
              </Col>
            );
          })}
      </Row>
    </div>
  );
};
