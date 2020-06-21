import React, {Component} from 'react';
import '../App.css';
import { Button, Row, } from 'reactstrap';
import { LocalForm, Control } from 'react-redux-form';


class Weather extends Component {
    constructor(props){
        super(props);
        this.state= {
            location: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    handleSubmit(values){
        this.setState({
            location: values.location
        });
        this.props.fetchWeather(values.location);
    }


    render() {
        
        if(this.props.weather.location != null) {
            var temp= this.props.weather.temp.toFixed()+'°c';
            var iconUrl = 'http://openweathermap.org/img/wn/'+this.props.weather.icon+'@2x.png';
        }
        return(
            <div className="container">
                <div className="row row-content align-items-center">
                    <div className="col-sm-8 col-md-4 offset-4">
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                    <Control.text model=".location" id="location" name="location" className="form-control" placeholder="Search" />
                            </Row>
                            <Row className="form-group">
                                <Button type="submit"><span className="fa fa-search fa-lg"></span></Button>
                            </Row>
                        </LocalForm>
                    </div>
                </div>
                <div className="row row-content align-items-center">
                    <div className="col-12 col-md-4 offset-4">
                        <h2>{this.props.weather.location}</h2>
                        <h5>{this.props.weather.country}</h5>
                        <img src={iconUrl} />
                        <h1>{temp}</h1>
                        <h4>{this.props.weather.climate}</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default Weather;
