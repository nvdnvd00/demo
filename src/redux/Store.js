import { createStore } from 'redux';
import reducer from './reducer/reducerIndex';

const store =createStore(reducer);

export default store;