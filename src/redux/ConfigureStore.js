import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Weather } from './weather';
import thunk from 'redux-thunk';
import { createForms } from 'react-redux-form';
import { initial } from './form';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            weather : Weather,
            ...createForms({
                search: initial
            })
        }),
        applyMiddleware(thunk)
    );
    return store;
}