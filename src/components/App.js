import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Row, Col } from "reactstrap/src";
import InvoicesContainer from "../containers/InvoicesContainer";
import CreateInvoiceContainer from "../containers/CreateInvoiceContainer";
import EditInvoiceContainer from "../containers/EditInvoiceContainer";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Container>
          <Row>
            <Col>
              <Route exact path="/" component={InvoicesContainer}/>
              <Route path="/add" component={CreateInvoiceContainer}/>
              <Route path="/edit" component={EditInvoiceContainer}/>
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}

export default App;