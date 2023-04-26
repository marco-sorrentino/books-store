import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { SingleBookProps } from "../../types/book";
import { BsEyeglasses } from "react-icons/bs";
import { MdTurnedInNot } from "react-icons/md";
import "./homepage.scss";
import { GET_READS, GET_SAVED } from "../../redux/action";

export const BookDetail = () => {
  const seeDetail = useSelector(
    (state: { books: SingleBookProps[] }) => state.books
  );
  console.log(seeDetail);
  const key = "AIzaSyBPPH3NK6VX2qM400hCqOvQOt0deBt1HX4";
  const dispatch = useDispatch();

  return (
    <div className="h-100 boh">
      <Row className="m-0">
        {seeDetail &&
          seeDetail.map((el) => {
            return (
              <Col className="p-0">
                <div className="boxBook px-4 py-4 d-flex align-items-start justify-content-between flex-column">
                  <div className="w-100">
                    <p className="bookTitle mb-3">{el.title}</p>
                    <p>{el.obj?.volumeInfo?.subtitle}</p>
                    <div className="hrLineBookPage mt-3"></div>
                  </div>

                  <div className="d-flex align-items-center">
                    <img
                      className="pt-4"
                      src={
                        "https://books.google.com/books/content?id=" +
                        el.obj?.id +
                        "&printsec=frontcover&img=1&zoom=2&key=" +
                        key
                      }
                      alt="cover"
                    />
                    <div className="px-4">
                      <p className="author">{el.authors}</p>
                      <p className="descr">
                        {el.obj?.volumeInfo?.description === undefined
                          ? "Description not avaiable"
                          : el.obj?.volumeInfo?.description?.slice(0, 1400) +
                            " ..."}
                      </p>
                      <div className="d-flex">
                        <div className="circleBg">
                          <p>
                            {el.obj?.volumeInfo?.publishedDate?.slice(0, 4)}
                          </p>
                        </div>
                        <div className="circleBg">
                          <p>{el.obj?.volumeInfo?.pageCount}</p>
                        </div>
                        <div className="circleBg">
                          <p>{el.obj?.saleInfo?.listPrice?.amount}</p>
                          <p>
                            {el.obj?.saleInfo?.listPrice?.currencyCode === "EUR"
                              ? "€"
                              : "N/D"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex align-items-center">
                    <MdTurnedInNot
                      onClick={() => {
                        dispatch({
                          type: GET_SAVED,
                          payload: el,
                        });
                      }}
                      className="iconBookDetail"
                    />
                    <BsEyeglasses
                      onClick={() => {
                        dispatch({
                          type: GET_READS,
                          payload: el,
                        });
                      }}
                      className="iconBookDetail me-2"
                    />
                  </div>
                </div>
              </Col>
            );
          })}
      </Row>
    </div>
  );
};
