import { Book } from "./book";

export interface AddBookAction {
  type: "GET_DETAILS";
  payload: Book;
}

export interface AddSavedAction {
  type: "GET_SAVED";
  payload: Book;
}

export interface AddReadsAction {
  type: "GET_READS";
  payload: Book;
}

export interface RemoveSavedAction {
  type: "REMOVE_SAVED";
  payload: Book;
}
