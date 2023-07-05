// import { configureStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import componentRedux from './component'

const rootReducer = configureStore({
  reducer: {
    component: componentRedux
  }
});

export type RootState = ReturnType<typeof rootReducer.getState>
export type AppDispatch = typeof rootReducer.dispatch

export default rootReducer;