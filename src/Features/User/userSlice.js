import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  editUser: null,
  editIndex: null,
};

const userSlice = createSlice({
  name: "lalit",
  initialState,
  reducers: {
    addUser: (state, action) => {
      // state.users.push(action.payload) //  setAlldata([...alldata,action.payload.data])
      console.log("ADD USER payload 👉", action.payload);
      console.log("BEFORE users 👉", state.users);
      state.users = [...state.users, action.payload];
    },

    updateUser: (state, action) => {
      console.log("UPDATE payload 👉", action.payload);
      console.log("BEFORE users 👉", state.users);
      state.users = state.users.map((i, index) =>
        index === action.payload.id ? action.payload.users : i
      );
      console.log("AFTER users 👉", state.users);
    },
    deleteData: (state, action) => {
      console.log("DELETE index 👉", action.payload);
      console.log("BEFORE users 👉", state.users);
      state.users = state.users.filter((i, index) => index !== action.payload);
    },

    editData: (state, action) => {
      console.log("EDIT index 👉", action.payload);
      state.editUser = state.users[action.payload];
      state.editIndex = action.payload;
      console.log("EDIT USER 👉", state.editUser);
    },
    clearEdit: (state) => {
      state.editUser = null;
      state.editIndex = null;
    },
  },
});
export const { addUser, updateUser, deleteData, editData, clearEdit } = userSlice.actions
export default userSlice.reducer
