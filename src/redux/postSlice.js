import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    isLoggedIn: false,
    creds: { fullName: "", email: "", profilePic: "" },
    userPosts: [],
  },
  reducers: {
    loggedIn: (state, action) => {
      return {
        ...state,
        isLoggedIn: true,
      };
    },
    createAccount: (state, action) => {
      const { fname, mail, pic } = action.payload;
      return {
        ...state,
        isLoggedIn: true,
        creds: {
          ...state.creds,
          fullName: fname,
          email: mail,
          profilePic: pic,
        },
      };
    },
    signOut: (state, action) => {
      return {
        ...state,
        isLoggedIn: false,
        creds: { fullName: "", email: "", profilePic: "" },
        userPosts: [],
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
