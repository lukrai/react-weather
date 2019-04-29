import axios from 'axios';
import {parseResponseWeatherData} from '../helpers/weather.helpers';

const apiKey = '77e577e4c9e13e85b8e39f71194aea31';

export async function getWeatherData(value: {latitude: number, longitude: number}, cityName?: string) {
    let url = `https://api.openweathermap.org/data/2.5/forecast?` +
        `&lang=en` +
        `&units=metric` +
        `&appid=${apiKey}`;

    cityName ? url += `&q=${cityName}` : url += `&lat=${value.latitude}&lon=${value.longitude}`;

    try {
        const response = await axios.get(url);
        console.log(response);
        return parseResponseWeatherData(response.data);
    } catch (error) {
        console.log(error);
    }
}
