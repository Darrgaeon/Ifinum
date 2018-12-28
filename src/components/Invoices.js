import React from "react";
import { API } from "../constants/Default";
import { Table } from "reactstrap";
import moment from "moment";
import { Redirect } from "react-router-dom";
import * as PropTypes from "prop-types";


class Invoices extends React.Component {
  constructor(props) {
    super(props);

    this.addNewInvoice = this.addNewInvoice.bind(this);
    this.deleteInvoice = this.deleteInvoice.bind(this);
    this.editInvoice = this.editInvoice.bind(this);
  }


  componentDidMount() {
    if (this.props.checkLoadingData !== true) {
      this.props.loadInvoices(API);
    }
  }

  addNewInvoice(changeIsRedirect) {
    changeIsRedirect("add");
  }

  deleteInvoice(index) {
    delete this.props.data[index];
    this.props.deleteInvoice(this.props.data);
  }

  editInvoice(index) {
    this.props.startEditInvoice("edit", index);
  }

  render() {

    const {data, status} = this.props;

    if (this.props.isRedirect === "add") {
      return <Redirect to={{pathname: "/add"}} />;
    }

    if (this.props.isRedirect === "edit") {
      return <Redirect to={{pathname: "/edit"}} />;
    }

    if (status !== "ok") return <div>Идет загрузка...</div>;

    return (
      <div className="invoices-to-show">
        <div className="invoices-title">
          <div className="title">Invoices</div>
        </div>

        <div className="invoices-actions">
          <div className="title">Actions</div>
          <button className="button-add-new" onClick={() => this.addNewInvoice(this.props.changeIsRedirect)}>Add new</button>
        </div>

        <div className="invoices-data">
          <div className="title">Invoices</div>
          <Table>
            <thead>
              <tr>
                <th>Create</th>
                <th>No</th>
                <th>Supply</th>
                <th>Comment</th>
                <th>Additionally</th>
              </tr>
            </thead>
            {data.map((item, index) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td>{moment(item.date_created, "LL").locale("ru").format("D-MM-YYYY")}</td>
                    <td>{item.number}</td>
                    <td>{moment(item.date_supply, "LL").locale("ru").format("D-MM-YYYY")}</td>
                    <td>{item.comment}</td>
                    <td>
                      <button onClick={() => this.deleteInvoice(index)}>Delete</button>
                      <button onClick={() => this.editInvoice(index)}>Edit</button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
        </div>
      </div>
    );
  }
}

Invoices.propsTypes = {
  data: PropTypes.array.isRequired,
  isRedirect: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  checkLoadingData: PropTypes.bool.isRequired,
  editDataIndex: PropTypes.number.isRequired,
  changeIsRedirect: PropTypes.func.isRequired,
  loadInvoices: PropTypes.func.isRequired,
  deleteInvoice: PropTypes.func.isRequired,
  startEditInvoice: PropTypes.func.isRequired,
};

export default Invoices;