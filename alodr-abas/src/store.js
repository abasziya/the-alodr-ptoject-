import {createStore , applyMiddleware , compose} from  'redux';
import thunk from 'redux-thunk';

import reducer from './reducers/reducer';
// import panels from './reducers/panels';
import { reducers } from './reducers/index';


const store = createStore(reducer  ,applyMiddleware(thunk));



export default store;