import {
  INVOICES_LOAD_REQUEST,
  INVOICES_LOAD_SUCCESS,
  INVOICES_LOAD_FAIL,
  INVOICES_IS_REDIRECT,
  ADD_NEW_INVOICE,
  DELETE_INVOICE,
  START_EDIT_INVOICE,
  SAVE_EDIT_INVOICE
} from "../actions/InvoicesActions";


const initialState = {
  status: "",
  data: [],
  isRedirect: "/",
  checkLoadingData: false,
  index: 0
};

export function getInvoices(state = initialState, action) {
  switch (action.type) {
  case INVOICES_LOAD_REQUEST:
    return {...state,
      status: "",
      data: [],
      isRedirect: "/",
    };
  case INVOICES_LOAD_SUCCESS:
    return {...state,
      data: action.payload,
      status: "ok",
      checkLoadingData: true
    };
  case INVOICES_LOAD_FAIL:
    return {...state,
      message: action.payload,
    };
  case INVOICES_IS_REDIRECT:
    return {...state,
      isRedirect: action.payload,
    };
  case ADD_NEW_INVOICE:
    return {...state,
      data: action.payload,
      isRedirect: action.isRedirect,
    };
  case DELETE_INVOICE:
    return {...state,
      data: action.payload
    };
  case START_EDIT_INVOICE:
    return {...state,
      isRedirect: action.payload,
      index: action.index
    };
  case SAVE_EDIT_INVOICE:
    return {...state,
      data: action.payload,
      isRedirect: action.isRedirect,
    };
  default:
    return state;
  }
}