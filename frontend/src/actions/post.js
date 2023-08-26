import axios from "axios";
import { GET_POST } from "./types";
import { DELETE_POST } from "./types";
import { POST_POST } from "./types";

export const getPost = (page = 1) => (dispatch) => {
  axios
    .get(`/post/api/posts/?page=${page}`)
    .then((res) => {
      dispatch({
        type: GET_POST,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const deletePost = (id) => (dispatch) => {
  axios
    .delete(`/post/api/posts/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE_POST,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

export const postPost = (post) => (dispatch) => {
  console.log(post);
  axios
    .post("/post/api/posts/", post)
    .then((res) => {
      dispatch({
        type: POST_POST,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
