import React from 'react';
import {ICurentWeather} from '../dto';

export default function WeatherInfo(props: { currentWeather: ICurentWeather }) {
    return (
        <div className="weather-info">
            <div>
                <i title="Humidity" className="wi wi-humidity"><span> {props.currentWeather.humidity}%</span></i>
            </div>
            <div>
                <i title="Pressure" className="wi wi-barometer"><span> {props.currentWeather.pressure} Mbar</span></i>
            </div>
            <div>
                <i title="Cloudiness" className="wi wi-cloud"><span> {props.currentWeather.clouds} %</span></i>
            </div>
            <div>
                <i title="Wind direction" className={`wi wi-direction-${props.currentWeather.wind.direction}`}><span> {props.currentWeather.wind.speed} m/s</span></i>
            </div>
        </div>
    );
}
