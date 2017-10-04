import { combineReducers } from 'redux';
import userIdReducer from './userIdReducer';
const reducer = combineReducers({
    userId: userIdReducer,
})

export default reducer;