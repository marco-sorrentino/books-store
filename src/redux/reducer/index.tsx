import {
  AddBookAction,
  AddReadsAction,
  AddSavedAction,
} from "../../types/action";
import { Book } from "../../types/book";
import { GET_DETAILS, GET_READS, GET_SAVED } from "../action";

interface State {
  books: Book[];
  saved: Book[];
  reads: Book[];
}

const initialState: State = {
  books: [],
  saved: [],
  reads: [],
};

const mainReducer = (
  state = initialState,
  action: AddBookAction | AddSavedAction | AddReadsAction
) => {
  switch (action.type) {
    case GET_DETAILS:
      return {
        ...state,
        books: [action.payload],
      };
    case GET_SAVED:
      return {
        ...state,
        saved: [...state.saved, action.payload],
      };
    case GET_READS:
      return {
        ...state,
        reads: [...state.reads, action.payload],
      };
    default:
      return state;
  }
};

export default mainReducer;
