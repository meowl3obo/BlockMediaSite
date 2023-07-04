import { combineReducers } from 'redux';
import componentRedux from './component'

const rootReducer = combineReducers({
  component: componentRedux,
});

export default rootReducer;