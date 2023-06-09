import { useDispatch } from "react-redux";
import {
  getDetailsAction,
  getReadsAction,
  getSavedAction,
  removeSavedAction,
} from "../../redux/action";
import { SingleBookProps } from "../../types/book";
import { BsEyeglasses } from "react-icons/bs";
import { MdTurnedInNot } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { BsFillBookmarkFill } from "react-icons/bs";

export const SingleBook = (props: SingleBookProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(true);

  //Funzione per salvare su redux con DISPATCH i dettagli dei libri

  const handleDetails = () => {
    dispatch(getDetailsAction(props));
  };

  //Funzione per salvare su redux con DISPATCH i libri salvati

  const handleSaved = () => {
    dispatch(getSavedAction(props));
  };

  //Funzione per rimuovere libri salvati

  const handleRemove = () => {
    dispatch(removeSavedAction(props));
  };

  //Funzione per salvare su redux con DISPATCH i libri letti dall'utente

  const handleReads = () => {
    dispatch(getReadsAction(props));
  };

  //Funzione per navigare sulla pagina dettagli libro

  const goDetails = () => {
    navigate("/detail");
  };

  return (
    <>
      <div className="everySingleCard">
        <img
          onClick={() => {
            handleDetails();
            goDetails();
          }}
          className="coverBooks"
          src={props.cover}
          alt="cover"
        />
        <p className="booksTitles mt-2">
          {props?.title?.substring(0, 21) + " ..."}
        </p>
        <p className="authorTitles">{props.authors}</p>
        <div className="d-flex justify-content-between align-items-center">
          <p
            onClick={() => {
              handleDetails();
              goDetails();
            }}
            className="ctaOnHover"
          >
            View More
          </p>
          <div>
            {toggle === true ? (
              <MdTurnedInNot
                onClick={() => {
                  handleSaved();
                  setToggle(!toggle);
                }}
                className="me-1 savingIcon"
              />
            ) : (
              <BsFillBookmarkFill
                onClick={() => {
                  handleRemove();
                  setToggle(!toggle);
                }}
                className="me-1 savingIcon"
              />
            )}
            <BsEyeglasses
              onClick={handleReads}
              style={{ fontSize: "1.2em" }}
              className="savingIcon"
            />
          </div>
        </div>
      </div>
    </>
  );
};
