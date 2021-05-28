import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    isLoggedIn: false,
    creds: { fullName: "", email: "", password: "" },
    userPosts: [],
  },
  reducers: {
    loggedIn: (state, action) => {
      const {
        userCreds: { mail, pass },
      } = action.payload;
      return {
        ...state,
        isLoggedIn: true,
        creds: { ...state.creds, email: mail, password: pass },
      };
    },
    createAccount: (state, action) => {
      const { fname, mail, pass } = action.payload;
      return {
        ...state,
        isLoggedIn: true,
        creds: { ...state.creds, fullName: fname, email: mail, password: pass },
      };
    },
    signOut: (state, action) => {
      return {
        ...state,
        isLoggedIn: false,
        creds: { fullName: "", email: "", password: "" },
      };
    },
    addPost: (state, action) => {
      const newPost = { id: action.payload.id, text: action.payload.text };
      state.userPosts.push(newPost);
    },
    getFirebasePost: (state, action) => {
      return {
        ...state,
        userPosts: action.payload,
      };
    },
  },
});

export const { loggedIn, createAccount, addPost, signOut, getFirebasePost } =
  postSlice.actions;

export default postSlice.reducer;
