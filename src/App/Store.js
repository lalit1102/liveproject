import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import userSlice from '../Features/User/userSlice'

const Store = configureStore({
  reducer:{
    "lalit":userSlice
  }
})

export default Store
