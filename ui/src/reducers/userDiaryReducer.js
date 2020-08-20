import { FETCH_DIARIES } from "../actions/types";

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_DIARIES:
      return action.payload;
    default:
      return state;
  }
}
