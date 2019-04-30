import React from 'react';
import {IWeatherData} from '../dto';
import WeatherForecast from './WeatherForecast';
import WeatherInfo from './WeatherInfo';
import WeatherTemperature from './WeatherTemperature';

interface IPropsWeatherData {
    weatherData: IWeatherData;
}

export default function WeatherGrid(props: IPropsWeatherData) {

    return (
        <div className="weather-grid">
            <div className="weather-city-title">
                <p>{props.weatherData.city.name}, {props.weatherData.city.country}</p>
            </div>
            <WeatherTemperature currentWeather={props.weatherData.currentWeather}/>
            <WeatherInfo currentWeather={props.weatherData.currentWeather}/>
            <WeatherForecast forecast={props.weatherData.forecast}/>
        </div>
    );
}
