import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addNewInvoice } from "../actions/InvoicesActions";
import CreateInvoices from "../components/CreateInvoices";
import * as PropTypes from "prop-types";

class CreateInvoiceContainer extends React.Component {
  render() {
    const { invoices } = this.props;
    return (
      <CreateInvoices
        addNewInvoice={this.props.addNewInvoice}
        data={invoices.data}
        isRedirect={invoices.isRedirect}
      />
    );
  }
}

CreateInvoiceContainer.propsTypes = {
  data: PropTypes.array.isRequired,
  isRedirect: PropTypes.string.isRequired,
  addNewInvoice: PropTypes.func.isRequired
};

const mapStateToProps = store => ({
  invoices: store.invoices
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    addNewInvoice
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateInvoiceContainer);