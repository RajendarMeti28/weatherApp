import * as ActionTypes from './ActionTypes';

export const fetchWeather = (location) => (dispatch) => {

    var url = 'https://api.openweathermap.org/data/2.5/weather?q='+location+'&units=metric&appid=8892ca5dd6e323b1c6f18c1e736b89fa';
    return fetch(url)
    .then(response => {
        if (response.ok) {
          return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    })
    .then(response => response.json())
    .then(data => dispatch(printWeather(data)))
    .catch(error => dispatch(failed(error.message)));
};

export const printWeather = (data) => ({
    type: ActionTypes.SEARCH,
    payload: data
});

export const failed = (err) => ({
    type: ActionTypes.ERR
});