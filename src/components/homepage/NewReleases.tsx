import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import "./homepage.scss";
import { SingleBook } from "./SingleBook";

interface Book {
  id: string;
  volumeInfo: {
    authors: string;
    imageLinks: {
      thumbnail: string;
    };
    title: string;
  };
}

export const NewReleases = () => {
  const [newBook, setNewBook] = useState<Book[]>([]);
  console.log(newBook);
  const key = "AIzaSyBPPH3NK6VX2qM400hCqOvQOt0deBt1HX4";

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let res = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=subject:&orderBy=newest&maxResults=5&key=" +
          key
      );

      if (res.ok) {
        let data = await res.json();
        setNewBook(data.items);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="px-4 pt-4 d-flex align-items-center justify-content-between">
        <p className="homepageTitle">New Releases</p>
        <div
          style={{ width: "68%", height: "2px", backgroundColor: "red" }}
        ></div>
      </div>
      <div className="px-4 pt-2 ">
        <Row className="rowBooks">
          {newBook &&
            newBook.map((el, i) => (
              <SingleBook
                title={el.volumeInfo.title}
                cover={el?.volumeInfo?.imageLinks.thumbnail}
                authors={el.volumeInfo.authors}
              />
            ))}
        </Row>
      </div>
    </>
  );
};
