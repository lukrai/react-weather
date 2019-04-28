import {IWeatherData, IWeatherDataResponse} from '../dto';

export function parseResponseWeatherData(weatherDataResponse: IWeatherDataResponse): IWeatherData | undefined {
    if (weatherDataResponse.list.length <= 0) {
        return undefined;
    }

    // let weatherData;
    const currentWeather = {
        temperature: Math.round(weatherDataResponse.list[0].main.temp),
        humidity: weatherDataResponse.list[0].main.humidity,
        pressure: weatherDataResponse.list[0].main.pressure,
        description: weatherDataResponse.list[0].weather[0].description,
        icon: weatherDataResponse.list[0].weather[0].icon,
        id: weatherDataResponse.list[0].weather[0].id,
        clouds:  weatherDataResponse.list[0].clouds.all,
        wind: {
            direction: convertWindDirection(weatherDataResponse.list[0].wind.speed),
            speed: Math.round(weatherDataResponse.list[0].wind.speed),
        },

    };

    return {
        currentWeather,
        city: weatherDataResponse.city,
    };
}

function convertWindDirection(deg: number) {
    // tslint:disable:ter-indent
    switch (true) {
        case (deg >= 0 && deg <= 15):
        case (deg <= 360 && deg > 345):
            return 'down';
        case (deg > 15 && deg <= 75):
            return 'down-left';
        case (deg > 75 && deg <= 100):
            return 'left';
        case (deg > 100 && deg <= 165):
            return 'up-left';
        case (deg > 165 && deg <= 195):
            return 'up';
        case (deg > 195 && deg <= 255):
            return 'up-right';
        case (deg > 255 && deg <= 285):
            return 'right';
        case (deg > 285 && deg <= 345):
            return 'down-right';
        default:
            return 'none';
        // tslint:enable:ter-indent
    }
}
