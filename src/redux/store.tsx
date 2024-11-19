
// import counterReducer from './counter/reducers';
import { combineReducers, createStore } from 'redux';
import expenseReducer from './tracker/reducer';

const rootReducer = combineReducers({
    // counter: counterReducer,
    tracker : expenseReducer
})

const store = createStore(rootReducer);

export default store;
