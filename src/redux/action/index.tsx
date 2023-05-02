import { SingleBookProps } from "../../types/book";

export const GET_DETAILS = "GET_DETAILS";
export const GET_READS = "GET_READS";
export const GET_SAVED = "GET_SAVED";
export const REMOVE_SAVED = "REMOVE_SAVED";

export const getDetailsAction = (props: SingleBookProps) => ({
  type: GET_DETAILS,
  payload: props,
});

export const getSavedAction = (props: SingleBookProps) => ({
  type: GET_SAVED,
  payload: props,
});

export const getReadsAction = (props: SingleBookProps) => ({
  type: GET_READS,
  payload: props,
});

export const removeSavedAction = (props: SingleBookProps) => ({
  type: REMOVE_SAVED,
  payload: props,
});
