import React, {Component} from 'react';
import '../App.css';
import { Row, Card, CardBody } from 'reactstrap';
import { Form, Control } from 'react-redux-form';


function RenderCard(props) {
    if(props.weather.location != null) {
        var temp= props.weather.temp.toFixed()+'°c';
        var iconUrl = 'http://openweathermap.org/img/wn/'+props.weather.icon+'@2x.png';
        var climate = props.weather.climate.toUpperCase();
    }
    if(props.weather.location != null){
        return(
            <div>
                <Card className="card"> 
                    <CardBody>
                        <center>
                        <h3><b>{props.weather.location}</b></h3>
                        <h6><span className="country">{props.weather.country}</span></h6>
                        <h1>{temp}</h1>
                        <img src={iconUrl} alt="climateIcon" />
                        <p className="climate">{climate}</p>
                        </center>
                    </CardBody>
                </Card>
            </div>
        )
    }
    else{
        return(
            <div></div>
        )
    }
}


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
        this.props.resetSearch();
    }


    render() {
        
        return(
            <div>
                <div className="row row-content align-items-center">
                    <div className="col-8 col-sm-6 col-md-4 offset-md-4 offset-sm-3 offset-2">
                        <Form model="search" onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                    <Control.text model=".location" id="location" name="location" className="form-control2" placeholder="Enter your location" />
                            </Row>
                        </Form>
                    </div>
                </div>
                <div className="row row-content align-items-center">
                    <div className="col-10 col-sm-8 col-md-4 offset-md-4 offset-sm-2 offset-1">
                       <RenderCard weather={this.props.weather}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Weather;
