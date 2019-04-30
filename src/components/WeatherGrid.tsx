import React from 'react';
import {IWeatherData} from '../dto';
import WeatherForecast from './WeatherForecast';
import WeatherInfo from './WeatherInfo';
import WeatherTitle from './WeatherTitle';
import WeatherTemperature from './WeatherTemperature';

interface IPropsWeatherData {
    weatherData: IWeatherData;
}

export default function WeatherGrid(props: IPropsWeatherData) {
    return (
        <div className="weather-grid">
            <WeatherTitle city={props.weatherData.city} cityName={props.weatherData.city.name}/>
            <WeatherTemperature currentWeather={props.weatherData.currentWeather}/>
            <WeatherInfo currentWeather={props.weatherData.currentWeather}/>
            <WeatherForecast forecast={props.weatherData.forecast}/>
        </div>
    );
}
