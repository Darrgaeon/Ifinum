import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadInvoices, changeIsRedirect, deleteInvoice, startEditInvoice } from "../actions/InvoicesActions";
import Invoices from "../components/Invoices";
import * as PropTypes from "prop-types";

class InvoicesContainer extends React.Component {
  render() {
    const {invoices} = this.props;
    return (
      <Invoices
        changeIsRedirect={this.props.changeIsRedirect}
        isRedirect={invoices.isRedirect}
        loadInvoices={this.props.loadInvoices}
        data={invoices.data}
        status={invoices.status}
        checkLoadingData={invoices.checkLoadingData}
        deleteInvoice={this.props.deleteInvoice}
        startEditInvoice={this.props.startEditInvoice}
      />
    );
  }
}

InvoicesContainer.propsTypes = {
  data: PropTypes.array.isRequired,
  isRedirect: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  checkLoadingData: PropTypes.bool.isRequired,
  editDataIndex: PropTypes.number.isRequired,
  changeIsRedirect: PropTypes.func.isRequired,
  loadInvoices: PropTypes.func.isRequired,
  deleteInvoice: PropTypes.func.isRequired,
  startEditInvoice: PropTypes.func.isRequired
};
const mapStateToProps = store => ({
  invoices: store.invoices
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    loadInvoices,
    changeIsRedirect,
    deleteInvoice,
    startEditInvoice
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(InvoicesContainer);