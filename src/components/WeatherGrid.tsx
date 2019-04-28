import React from 'react';
import {IWeatherDataResponse} from '../dto';

interface IPropsWeatherData {
    weatherData: IWeatherDataResponse;
}

export default function WeatherGrid(props: IPropsWeatherData) {

    return (
        <div className="weather-grid">
            <div className="weather-city-title">
                <p>{props.weatherData.city.name}, {props.weatherData.city.country}</p>
            </div>
            <div className="weather-temperature">
                <p>Kaunas</p>
            </div>
            <div className="weather-info">
                <p>Kaunas</p>
            </div>
            <div className="weather-day-grid">
                <div className="weather-day">
                    <p>1</p>
                </div>
                <div className="weather-day">
                    <p>2</p>
                </div>
                <div className="weather-day">
                    <p>3</p>
                </div>
                <div className="weather-day">
                    <p>4</p>
                </div>
            </div>
        </div>
    );
}
