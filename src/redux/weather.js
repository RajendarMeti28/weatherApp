import * as ActionTypes from './ActionTypes';

export const Weather = ( state = {location: null, country: null, temp: null, icon:null, climate:null}, action) => {
    switch(action.type) {

        case ActionTypes.SEARCH:
            return {...state, location: action.payload['name'], country: action.payload['sys']['country'], temp: action.payload['main']['temp'], icon:action.payload['weather'][0]['icon'], climate: action.payload['weather'][0]['description']};

        case ActionTypes.ERR:
            return state;

        default:
            return state;
    }
};