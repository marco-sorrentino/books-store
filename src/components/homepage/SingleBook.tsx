import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";

interface SingleBookProps {
  cover: string;
  title: string;
  authors: string;
}

export const SingleBook = ({ cover, title, authors }: SingleBookProps) => {
  const dispatch = useDispatch();
  return (
    <>
      <Col
        onClick={() =>
          dispatch({
            type: "GET_DETAILS",
            payload: { cover, title, authors },
          })
        }
        className="mt-3 mt-md-0"
      >
        <div className="everySingleCard">
          <img className="coverBooks" src={cover} alt="cover" />
          <p className="booksTitles mt-2">{title.substring(0, 21) + " ..."}</p>
          <p className="authorTitles">{authors}</p>
          <p className="ctaOnHover">View More</p>
        </div>
      </Col>
    </>
  );
};
