import React, {Component} from 'react';
import Weather from './WeatherComponent';
import { connect } from 'react-redux';
import '../App.css';
import { fetchWeather } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';

const mapStateToProps = state => {
    return {
        weather: state.weather
    }
}

const mapDispatchToProps = dispatch => ({
    resetSearch: () => { dispatch(actions.reset('search'))},
    fetchWeather: (location) => dispatch(fetchWeather(location))
});

class Main extends Component {

    render() {
        return(
            <div className="container">
                <Weather resetSearch={this.props.resetSearch} fetchWeather={this.props.fetchWeather} weather={this.props.weather}/>
            </div>     
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);