import { render } from "solid-js/web";

import "./index.css";
import Footer from "./components/Footer";
import { Col, Container, Row } from "solid-bootstrap";

const { CONFIG_FILE_NAME, CONFIG_FILE_PATH } = process.env

const App = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Footer title={'This is footer title'} links={""}/>
        </Col>
      </Row>
    </Container>
  )
};
render(App, document.getElementById("app"));
