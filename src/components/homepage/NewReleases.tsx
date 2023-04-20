import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import "./homepage.scss";

export const NewReleases = () => {
  const [newBook, setNewBook] = useState([]);

  const key = "AIzaSyBPPH3NK6VX2qM400hCqOvQOt0deBt1HX4";

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let res = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=inauthor:&maxResults=10&orderBy=newest&printType=books&filter=paid-ebooks&langRestrict=it&langRestrict=en&key=" +
          key
      );

      if (res.ok) {
        let data = await res.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="ps-4 pt-4">
        <p className="homepageTitle">New Releases</p>
      </div>
      <div>
        <Row></Row>
      </div>
    </>
  );
};
