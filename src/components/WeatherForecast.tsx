import React from 'react';
import {IForecast} from '../dto';

export default function WeatherForecast(props: { forecast: IForecast[] }) {
    return (
        <div className="weather-forecast-grid">
            <div id="border-top"/>
            {props.forecast.map((o, i) => {
                return (
                    <div key={i} className="weather-forecast-item">
                        <p id="date">{o.month + 1}.{o.date}</p>
                        <i className={`wi ${o.icon}`}/>
                        <p id="temperature">{o.tempMin}..{o.tempMax}°C</p>
                    </div>
                );
            })}
            <div id="border-bottom"/>
        </div>
    );
}
