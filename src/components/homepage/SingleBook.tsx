import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  getDetailsAction,
  getReadsAction,
  getSavedAction,
  GET_DETAILS,
  GET_SAVED,
} from "../../redux/action";
import { SingleBookProps } from "../../types/book";
import { BsEyeglasses } from "react-icons/bs";
import { MdTurnedInNot } from "react-icons/md";

export const SingleBook = (props: SingleBookProps) => {
  const dispatch = useDispatch();

  //Funzione per salvare su redux con DISPATCH i dettagli dei libri

  const handleDetails = () => {
    dispatch(getDetailsAction(props));
  };

  //Funzione per salvare su redux con DISPATCH i libri salvati

  const handleSaved = () => {
    dispatch(getSavedAction(props));
  };

  //Funzione per salvare su redux con DISPATCH i libri letti dall'utente

  const handleReads = () => {
    dispatch(getReadsAction(props));
  };

  return (
    <>
      <Col className="mt-3 mt-md-0">
        <div className="everySingleCard">
          <img
            onClick={handleDetails}
            className="coverBooks"
            src={props.cover}
            alt="cover"
          />
          <p className="booksTitles mt-2">
            {props.title.substring(0, 21) + " ..."}
          </p>
          <p className="authorTitles">{props.authors}</p>
          <div className="d-flex justify-content-between align-items-center">
            <p onClick={handleDetails} className="ctaOnHover">
              View More
            </p>
            <div>
              <MdTurnedInNot
                onClick={handleSaved}
                className="me-1 savingIcon"
              />
              <BsEyeglasses
                onClick={handleReads}
                style={{ fontSize: "1.2em" }}
                className="savingIcon"
              />
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};
