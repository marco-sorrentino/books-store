import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Book } from "../../types/book";
import { SingleBook } from "./SingleBook";

export const MostPopular = () => {
  const [popular, setPopular] = useState<Book[]>([]);
  console.log(popular);
  const key = "AIzaSyBPPH3NK6VX2qM400hCqOvQOt0deBt1HX4";

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    try {
      let res = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=*&orderBy=relevance&maxResults=5&key=" +
          key
      );

      if (res.ok) {
        let data = await res.json();
        setPopular(data.items);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="px-4 pt-4 d-flex align-items-center justify-content-between">
        <p className="homepageTitle">Most Popular</p>
        <div className="hrLine"></div>
      </div>
      <div className="px-4 pt-2 ">
        <Row className="rowBooks">
          {popular &&
            popular.map((el, i) => (
              <SingleBook
                key={i}
                title={el.volumeInfo.title}
                cover={el?.volumeInfo?.imageLinks.thumbnail}
                authors={el.volumeInfo.authors}
                obj={el}
              />
            ))}
        </Row>
      </div>
    </>
  );
};