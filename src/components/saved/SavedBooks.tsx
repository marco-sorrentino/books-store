import { Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDetailsAction } from "../../redux/action";
import { SingleBookProps } from "../../types/book";
import "./saved.scss";

export const SavedBooks = (props: SingleBookProps) => {
  const seeSaved = useSelector(
    (state: { saved: SingleBookProps[] }) => state.saved
  );
  console.log("LIBRI SALVATI", seeSaved);

  return (
    <>
      <div className="px-4 pt-4 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <p className="homepageTitle">Your Saved Books</p>
          <p className="ms-3">{seeSaved.length}</p>
        </div>
        <div className="hrLine"></div>
      </div>
      <div className="mt-2">
        {seeSaved &&
          seeSaved.map((el) => {
            return el.obj?.volumeInfo?.categories === undefined ? (
              <Button className="ctaFilter ms-2">Other</Button>
            ) : (
              <Button className="ctaFilter ms-2">
                {el.obj?.volumeInfo?.categories}
              </Button>
            );
          })}
      </div>
    </>
  );
};
