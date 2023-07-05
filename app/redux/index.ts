// import { configureStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import componentRedux from './component'
import userRedux from './user'

const rootReducer = configureStore({
  reducer: {
    component: componentRedux,
    user: userRedux
  }
});

export type RootState = ReturnType<typeof rootReducer.getState>
export type AppDispatch = typeof rootReducer.dispatch

export default rootReducer;