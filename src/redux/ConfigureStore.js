import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Weather } from './weather';
import thunk from 'redux-thunk';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            weather : Weather
        }),
        applyMiddleware(thunk)
    );
    return store;
}