import {ICurentWeather} from '../dto';
import React from 'react';

export default function WeatherTemperature(props: { currentWeather: ICurentWeather }) {
    return (
        <div className="weather-temperature">
            <p>{props.currentWeather.temperature}°</p>
            <i className={`wi ${props.currentWeather.icon}`}/>
            <div className="weather-description">
                {props.currentWeather.description}
            </div>
        </div>
    );
}
