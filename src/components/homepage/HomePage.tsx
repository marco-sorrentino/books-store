import { Col, Row } from "react-bootstrap";
import { BestReview } from "./BestReview";
import "./homepage.scss";
import { MostPopular } from "./MostPopular";
import { NewReleases } from "./NewReleases";

export const HomePage = () => {
  return (
    <div className="homepage leftSide">
      <Row className="m-0">
        <Col className="p-0" md={7}>
          <NewReleases />
          <MostPopular />
          <BestReview />
        </Col>
        <Col style={{ backgroundColor: "white" }}></Col>
      </Row>
    </div>
  );
};
