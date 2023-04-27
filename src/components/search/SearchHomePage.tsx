import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

export const SearchHomePage = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
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
    <div>
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Control
            placeholder="Search"
            className=""
            name=""
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Form>
      </div>
    </div>
  );
};
