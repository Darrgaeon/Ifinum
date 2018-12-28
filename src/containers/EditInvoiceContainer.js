import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addNewInvoice, changeIsRedirect, saveEditInvoice } from "../actions/InvoicesActions";
import EditInvoice from "../components/EditInvoice";
import * as PropTypes from "prop-types";
import Invoices from "../components/Invoices";

class EditInvoiceContainer extends React.Component {
  render() {
    const {invoices} = this.props;
    return (
      <EditInvoice
        data={invoices.data}
        isRedirect={invoices.isRedirect}
        editDataIndex={invoices.index}
        saveEditInvoice={this.props.saveEditInvoice}
      />
    );
  }
}

EditInvoiceContainer.propsTypes = {
  data: PropTypes.array.isRequired,
  isRedirect: PropTypes.string.isRequired,
  saveEditInvoice: PropTypes.func.isRequired,
  editDataIndex: PropTypes.number.isRequired
};

const mapStateToProps = store => ({
  invoices: store.invoices
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    changeIsRedirect,
    addNewInvoice,
    saveEditInvoice
  }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(EditInvoiceContainer);