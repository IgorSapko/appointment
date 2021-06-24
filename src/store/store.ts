import {
    configureStore,
    getDefaultMiddleware
  } from '@reduxjs/toolkit';
  import dateAndTimeReducer from './date/dateAndTimeReducers'
  import errorReducer from './error/errorReducer'

  const middleware = getDefaultMiddleware({
    thunk: true,
    immutableCheck: true,
    serializableCheck: false
  });
  
  /**
   * Store
   */
  export const store = configureStore({
       reducer: {
      dateAndTime: dateAndTimeReducer,
      error: errorReducer
    },   
    middleware,
    devTools: true
  });
  
  /**
   * Types
   */
  export type State = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  