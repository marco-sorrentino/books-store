import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Book } from "../../types/book";
import { SingleBook } from "./SingleBook";
import Spinner from "react-bootstrap/Spinner";

export const BestReview = () => {
  const [review, setReview] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const key = "AIzaSyBPPH3NK6VX2qM400hCqOvQOt0deBt1HX4";

  useEffect(() => {
    getReview();
  }, []);

  const getReview = async () => {
    try {
      let res = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=fantasy&orderBy=relevance&maxResults=5&key=" +
          key
      );

      if (res.ok) {
        let data = await res.json();
        setReview(data.items);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="px-4 pt-4 d-flex align-items-center justify-content-between">
        <p className="homepageTitle">Best Reviews</p>
        <div className="hrLine"></div>
      </div>
      <div className="px-4 pt-2 ">
        {loading ? (
          <div className="d-flex justify-content-center mt-5">
            <Spinner animation="border" />
          </div>
        ) : (
          <Row className="rowBooks">
            {review &&
              review.map((el, i) => (
                <Col className="mt-3 mt-md-0">
                  <SingleBook
                    key={i}
                    title={el.volumeInfo.title}
                    cover={el?.volumeInfo?.imageLinks.thumbnail}
                    authors={el.volumeInfo.authors}
                    obj={el}
                  />
                </Col>
              ))}
          </Row>
        )}
      </div>
    </>
  );
};
