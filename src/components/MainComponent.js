import React, {Component} from 'react';
import Weather from './WeatherComponent';
import { connect } from 'react-redux';
import '../App.css';
import { fetchWeather } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        weather: state.weather
    }
}

const mapDispatchToProps = dispatch => ({
    fetchWeather: (location) => dispatch(fetchWeather(location))
});

class Main extends Component {

    render() {
        return(
            <div>
                <Weather fetchWeather={this.props.fetchWeather} weather={this.props.weather}/>
            </div>     
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);