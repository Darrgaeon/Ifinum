import { combineReducers } from "redux";
import { getInvoices } from "./invoices";

export const rootReducer  = combineReducers({
  invoices: getInvoices
});