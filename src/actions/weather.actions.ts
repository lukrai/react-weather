import axios from 'axios';
import {parseResponseWeatherData} from '../helpers/weather.helpers';
import {weatherApiKey} from '../helpers/apiKeys';

export async function getWeatherData(value: {latitude: number, longitude: number}, cityName?: string) {
    let url = `https://api.openweathermap.org/data/2.5/forecast?` +
        `&lang=en` +
        `&units=metric` +
        `&appid=${weatherApiKey}`;

    cityName ? url += `&q=${cityName}` : url += `&lat=${value.latitude}&lon=${value.longitude}`;

    try {
        const response = await axios.get(url);
        console.log(response);
        return parseResponseWeatherData(response.data);
    } catch (error) {
        console.log(error);
    }
}
