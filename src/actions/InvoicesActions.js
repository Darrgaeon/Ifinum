import { defaultErrorMsg } from "../constants/Default";
import axios from "axios";

export const INVOICES_LOAD_REQUEST = "INVOICES_LOAD_REQUEST";
export const INVOICES_LOAD_SUCCESS = "INVOICES_LOAD_SUCCESS";
export const INVOICES_LOAD_FAIL = "INVOICES_LOAD_FAIL";
export const INVOICES_IS_REDIRECT = "INVOICES_IS_REDIRECT";
export const ADD_NEW_INVOICE = "ADD_NEW_INVOICE";
export const DELETE_INVOICE = "DELETE_INVOICE";
export const START_EDIT_INVOICE = "START_EDIT_INVOICE";
export const SAVE_EDIT_INVOICE = "SAVE_EDIT_INVOICE";

export const invoicesRequest = () => ({
  type: INVOICES_LOAD_REQUEST
});

export const invoicesSuccess = (data) => ({
  type: INVOICES_LOAD_SUCCESS,
  payload: data
});

export const invoicesFail = (errorMsg) => ({
  type: INVOICES_LOAD_FAIL,
  payload: errorMsg
});

export const loadInvoices = (url) => dispatch => {
  dispatch({
    type: invoicesRequest
  });

  axios.get(url)
    .then(res => {
      if (res.data) {
        dispatch(invoicesSuccess(res.data.invoices));
      } else {
        dispatch(invoicesFail("Ошибка при загрузке страницы..."));
      }
    })
    .catch(() => dispatch(invoicesFail(defaultErrorMsg)));
};

export const changeIsRedirect = (isRedirect) => ({
  type: INVOICES_IS_REDIRECT,
  payload: isRedirect
});

export const addNewInvoice = (data, isRedirect) => ({
  type: ADD_NEW_INVOICE,
  payload: data,
  isRedirect: isRedirect
});

export const deleteInvoice = (data) => ({
  type: DELETE_INVOICE,
  payload: data,
});


export const startEditInvoice = (isRedirect, index) => ({
  type: START_EDIT_INVOICE,
  payload: isRedirect,
  index: index
});

export const saveEditInvoice = (data, isRedirect) => ({
  type: SAVE_EDIT_INVOICE,
  payload: data,
  isRedirect: isRedirect
});