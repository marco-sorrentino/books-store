import { AddBookAction, AddSavedAction } from "../../types/action";
import { Book } from "../../types/book";
import { GET_DETAILS, GET_SAVED } from "../action";

interface State {
  books: Book[];
  saved: Book[];
}

const initialState: State = {
  books: [],
  saved: [],
};

const mainReducer = (
  state = initialState,
  action: AddBookAction | AddSavedAction
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
    default:
      return state;
  }
};

export default mainReducer;
