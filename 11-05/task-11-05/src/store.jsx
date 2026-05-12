import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './reduxslice/counterslice'

export const store = configureStore({
  reducer:{
    counter:counterReducer
  }
})