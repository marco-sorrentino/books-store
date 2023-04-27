import { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Book } from "../../types/book";
import { SingleBook } from "../homepage/SingleBook";
import "./search.scss";

export const SearchHomePage = () => {
  const [search, setSearch] = useState("harry potter");
  const [data, setData] = useState<Book[]>([]);
  const key = "AIzaSyBPPH3NK6VX2qM400hCqOvQOt0deBt1HX4";

  console.log(search);
  console.log("API", data);

  useEffect(() => {
    getData();
  }, [search]);

  const getData = async () => {
    try {
      let res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${key}`
      );
      if (res.ok) {
        let data = await res.json();
        setData(data.items);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSearch("");
  };

  return (
    <>
      <div className="searchHome">
        <div className="px-4 pt-4 d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <p className="homepageTitle">Find Your Books</p>
          </div>
          <div className="hrLine"></div>
        </div>
        <div className="px-4">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              placeholder="Search"
              type="text"
              className="input"
              name="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Form>
        </div>
        <div className="px-4 mt-4">
          <Row>
            {data &&
              data.map((el, i) => {
                return (
                  <Col md={2} className="mt-4 mb-3 mt-md-0">
                    <SingleBook
                      key={i}
                      title={el?.volumeInfo?.title}
                      cover={el?.volumeInfo?.imageLinks?.thumbnail}
                      authors={el?.volumeInfo?.authors}
                      obj={el}
                    />
                  </Col>
                );
              })}
          </Row>
        </div>
      </div>
    </>
  );
};
