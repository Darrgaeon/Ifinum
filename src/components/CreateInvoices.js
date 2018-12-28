import React from "react";
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faCalendar, faDirections } from "@fortawesome/free-solid-svg-icons";
import { testInputs } from "../utils/TestInputs";
import * as PropTypes from "prop-types";

class Invoices extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      direction: "",
      number: "",
      date_created: "",
      date_due: "",
      date_supply: "",
      comment: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeId = this.handleChangeId.bind(this);
    this.handleChangeDirection = this.handleChangeDirection.bind(this);
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
    this.handleChangeDateCreated = this.handleChangeDateCreated.bind(this);
    this.handleChangeDateDue = this.handleChangeDateDue.bind(this);
    this.handleChangeDateSupply = this.handleChangeDateSupply.bind(this);
    this.handleChangeComment = this.handleChangeComment.bind(this);
    this.validate = this.validate.bind(this);
  }

  handleChangeId(e) {
    e.preventDefault();

    this.setState({
      id: this.i.value
    });
  }

  handleChangeDirection(e) {
    e.preventDefault();

    this.setState({
      direction: this.d.value
    });
  }

  handleChangeNumber(e) {
    e.preventDefault();

    this.setState({
      number: this.n.value
    });
  }

  handleChangeDateCreated(e) {
    e.preventDefault();

    this.setState({
      date_created: this.a.value
    });
  }

  handleChangeDateDue(e) {
    e.preventDefault();

    this.setState({
      date_due: this.b.value
    });
  }

  handleChangeDateSupply(e) {
    e.preventDefault();

    this.setState({
      date_supply: this.s.value
    });
  }

  handleChangeComment(e) {
    e.preventDefault();

    this.setState({
      comment: this.c.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let newInvoice = {
      id: this.state.id,
      direction: this.state.direction,
      number: this.state.number,
      date_created: this.state.date_created,
      date_due: this.state.date_due,
      date_supply: this.state.date_supply,
      comment: this.state.comment
    };

    this.props.data.push(newInvoice);
    this.props.addNewInvoice(this.props.data, "/");
  }

  validate() {
    const { id, number, direction, date_created, date_sue, date_supply, comment } = this.state;
    return testInputs(id, number, direction, date_created, date_sue, date_supply, comment);
  }


  render() {

    const isRedirect = this.props.isRedirect;

    if (isRedirect === "/") {
      return <Redirect to={{pathname: "/"}} />;
    }

    return (
      <div className="create-invoice-to-show">
        <div className="create-invoices-title">
          <div className="title">Create Invoice</div>
        </div>
        
        <div className="create-invoice">
          <form onSubmit={this.handleSubmit}>
            <div className="invoice">
              <div className="invoice-input-parameter">
                <div>Id:</div>
                <input 
                  ref={(id) => {this.i = id;}}
                  type="text" 
                  name="id" 
                  id="id" 
                  placeholder="Select id" 
                  onChange={this.handleChangeId}
                />
                <button>
                  <FontAwesomeIcon className="icon-awesome" icon={faCog} />
                </button>
              </div>
              
              <div className="invoice-input-parameter">
                <div>Direction:</div>
                <input
                  ref={(direction) => {this.d = direction;}}
                  type="text" 
                  name="direction" 
                  id="direction" 
                  placeholder="Select direction" 
                  onChange={this.handleChangeDirection}
                />
                <button>
                  <FontAwesomeIcon className="icon-awesome" icon={faDirections} />
                </button>
              </div>
              
              <div className="invoice-input-parameter">
                <div>Number:</div>
                <input
                  ref={(number) => {this.n = number;}}
                  type="number"
                  name="number" 
                  id="number" 
                  placeholder="Select number" 
                  onChange={this.handleChangeNumber}
                />
                <button>
                  <FontAwesomeIcon className="icon-awesome" icon={faCog} />
                </button>
              </div>
              
              <div className="invoice-input-parameter">
                <div>Date created:</div>
                <input
                  ref={(data_created) => {this.a = data_created;}}
                  type="date" 
                  name="data_created" 
                  id="data_created" 
                  placeholder="Select data created" 
                  onChange={this.handleChangeDateCreated}
                />
                <button>
                  <FontAwesomeIcon className="icon-awesome" icon={faCalendar} />
                </button>
              </div>
              
              <div className="invoice-input-parameter">
                <div>Date due:</div>
                <input
                  ref={(data_due) => {this.b = data_due;}}
                  type="date" 
                  name="data_due" 
                  id="data_due" 
                  placeholder="Select data due" 
                  onChange={this.handleChangeDateDue}
                />
                <button>
                  <FontAwesomeIcon className="icon-awesome" icon={faCalendar} />
                </button>
              </div>

              <div className="invoice-input-parameter">
                <div>Date supply:</div>
                <input
                  ref={(data_supply) => {this.s = data_supply;}}
                  type="date"
                  name="data_supply"
                  id="data_supply"
                  placeholder="Select data supply"
                  onChange={this.handleChangeDateSupply}
                />
                <button>
                  <FontAwesomeIcon className="icon-awesome" icon={faCalendar} />
                </button>
              </div>

              <div className="invoice-textarea-parameter">
                <div>Comment:</div>
                <textarea
                  ref={(comment) => {this.c = comment;}}
                  name="comment"
                  id="comment"
                  onChange={this.handleChangeComment}
                />
              </div>
            </div>
            <div className="button-save">
              <button className="save" type="submit" disabled={!this.validate()}>Save</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Invoices.propsTypes = {
  data: PropTypes.array.isRequired,
  isRedirect: PropTypes.string.isRequired,
  addNewInvoice: PropTypes.func.isRequired
};


export default Invoices;