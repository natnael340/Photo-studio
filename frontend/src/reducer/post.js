import { GET_POST } from "../actions/types";
import { DELETE_POST } from "../actions/types";
import { POST_POST } from "../actions/types";
const intialState = {
  posts: [],
  info: {},
};

export default function (state = intialState, action) {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        posts: action.payload.results,
        info: { count: action.payload.count },
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((stat) => stat.id != action.payload),
      };
    case POST_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    default:
      return state;
  }
}
