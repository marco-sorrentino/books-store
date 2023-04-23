import { Book } from "./book";

export interface AddBookAction {
  type: "GET_DETAILS";
  payload: Book;
}

export interface AddSavedAction {
  type: "GET_SAVED";
  payload: Book;
}
