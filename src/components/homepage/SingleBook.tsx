import { Col } from "react-bootstrap";

interface SingleBookProps {
  cover: string;
  title: string;
  authors: string;
}

export const SingleBook = ({ cover, title, authors }: SingleBookProps) => {
  return (
    <>
      <Col>
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
