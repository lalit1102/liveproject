import React from 'react'
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users:[]
}

const userSlice = createSlice({
  name:"user",
  initialState,
  reducers: {
    addUser: (state,action)=>{
      // state.users.push(action.payload) //  setAlldata([...alldata,action.payload.data])
      state.users = [...state.users,action.payload] 
    }
  }
})

export default userSlice
