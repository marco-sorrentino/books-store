import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { GET_DETAILS } from "../../redux/action";
import { SingleBookProps } from "../../types/book";

export const SingleBook = (props: SingleBookProps) => {
  const dispatch = useDispatch();
  return (
    <>
      <Col
        onClick={() =>
          dispatch({
            type: GET_DETAILS,
            payload: props,
          })
        }
        className="mt-3 mt-md-0"
      >
        <div className="everySingleCard">
          <img className="coverBooks" src={props.cover} alt="cover" />
          <p className="booksTitles mt-2">
            {props.title.substring(0, 21) + " ..."}
          </p>
          <p className="authorTitles">{props.authors}</p>
          <p className="ctaOnHover">View More</p>
        </div>
      </Col>
    </>
  );
};
