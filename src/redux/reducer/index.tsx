interface Book {
  id: number;
  title: string;
  author: string;
}

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
    case "GET_DETAILS":
      return {
        ...state,
        books: [action.payload],
      };
    default:
      return state;
  }
};

export default mainReducer;
