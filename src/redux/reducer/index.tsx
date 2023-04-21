import { Book } from "../../types/book";
import { GET_DETAILS } from "../action";

interface State {
  books: Book[];
}

interface AddBookAction {
  type: "GET_DETAILS";
  payload: Book;
}

const initialState: State = {
  books: [],
};

const mainReducer = (state = initialState, action: AddBookAction) => {
  switch (action.type) {
    case GET_DETAILS:
      return {
        ...state,
        books: [action.payload],
      };
    default:
      return state;
  }
};

export default mainReducer;
