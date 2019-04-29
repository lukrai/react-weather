import {IWeatherData, IWeatherDataResponse, IWeatherDataResponseListItem} from '../dto';

export function parseResponseWeatherData(weatherDataResponse: IWeatherDataResponse): IWeatherData | undefined {
    if (weatherDataResponse.list.length <= 0) {
        return undefined;
    }

    const convertedWeatherData = weatherDataResponse.list.map((o: IWeatherDataResponseListItem) => {
        const convertedDate = convertDate(o.dt * 1000);
        return {
            hour: convertedDate.hour,
            day: convertedDate.day,
            date: convertedDate.date,
            month: convertedDate.month,
            year: convertedDate.year,
            dt_txt: o.dt_txt,
            dateString: o.dt_txt.substring(0, 10),
            statusID: o.weather[0].id,
            icon: o.weather[0].icon,
            description: o.weather[0].description,
            temperature: Math.round(o.main.temp),
            tempMin: Math.round(o.main.temp_min),
            tempMax: Math.round(o.main.temp_max),
            humidity: Math.round(o.main.humidity),
            pressure: Math.round(o.main.pressure),
        };
    });
    const currentDate = convertedWeatherData[0].dateString;

    // calculate min and max for today
    const weatherDataToday = convertedWeatherData.filter(item => item.dateString === currentDate);
    let todayTempMin = weatherDataToday[0].temperature;
    let todayTempMax = weatherDataToday[0].temperature;

    weatherDataToday.forEach(item => {
        if (item.temperature < todayTempMin) {
            todayTempMin = item.temperature;
        }
        if (item.temperature > todayTempMax) {
            todayTempMax = item.temperature;
        }
    });

    const currentWeather = {
        temperature: Math.round(weatherDataResponse.list[0].main.temp),
        tempMin: todayTempMin,
        tempMax: todayTempMax,
        humidity: weatherDataResponse.list[0].main.humidity,
        pressure: weatherDataResponse.list[0].main.pressure,
        description: weatherDataResponse.list[0].weather[0].description,
        icon: convertWeatherIcon(weatherDataResponse.list[0].weather[0].icon),
        id: weatherDataResponse.list[0].weather[0].id,
        clouds: weatherDataResponse.list[0].clouds.all,
        wind: {
            direction: convertWindDirection(weatherDataResponse.list[0].wind.speed),
            speed: Math.round(weatherDataResponse.list[0].wind.speed),
        },
    };

    const forecast = getForecast(convertedWeatherData);

    return {
        currentWeather,
        forecast,
        city: weatherDataResponse.city,
    };
}

interface IWeatherDataConverted {
    day: number;
    date: number;
    month: number;
    year: number;
    dateString: string;
    statusID: number;
    description: string;
    temperature: number;
    tempMin: number;
    tempMax: number;
    humidity: number;
    pressure: number;
    icon: string;
}

function getForecast(convertedWeatherData: IWeatherDataConverted[]) {
    const currentDate = convertedWeatherData[0].dateString;

    const weatherDataNextDays = convertedWeatherData.filter(item => item.dateString !== currentDate);

    // get list of next dates
    const dates: string[] = [];
    weatherDataNextDays.forEach(item => {
        if (dates.indexOf(item.dateString) === -1) {
            dates.push(item.dateString);
        }
    });

    // group 3hour forecasts by date
    const groupByDate: IWeatherDataConverted[][] = [];
    for (let i = 0; i < dates.length; i += 1) {
        groupByDate.push(weatherDataNextDays.filter(item => item.dateString === dates[i]));
    }

    const forecast = groupByDate.map(items => {
        const {tempMin, tempMax} = getMinMaxTemp(items.map(o => o.temperature));
        const mostFrequentIcon = findMostFrequent(items.map(o => o.icon));
        console.log("before", mostFrequentIcon);
        mostFrequentIcon.replace('n', 'd'); // convert night icons to day icons for forecast
        console.log("after", mostFrequentIcon);
        return  {
            tempMin,
            tempMax,
            day: items[0].day,
            date: items[0].date,
            month: items[0].month,
            dateString: items[0].dateString,
            icon: convertWeatherIcon(mostFrequentIcon),
        };
    });
    return forecast.slice(0, 4);
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

function convertDate(date: number) {
    const d = new Date(date);
    return {
        hour: d.getHours(),
        day: d.getDay(),
        date: d.getDate(),
        month: d.getMonth(),
        year: d.getFullYear(),
    };
}

function findMostFrequent(items: string[]) {
    if (items.length === 0) {
        return '';
    }

    const modeMap: any = {};
    let mostFreqEl = items[0];
    let maxCount = 1;

    for (let i = 0; i < items.length; i += 1) {
        const el = items[i];
        if (modeMap[el] == null) {
            modeMap[el] = 1;
        } else {
            modeMap[el] += 1;
        }

        if (modeMap[el] > maxCount) {
            mostFreqEl = el;
            maxCount = modeMap[el];
        }
    }
    return mostFreqEl;
}

function getMinMaxTemp(temperatures: number[]) {
    let tempMin = temperatures[0];
    let tempMax = temperatures[0];

    temperatures.forEach(temperature => {
        if (temperature < tempMin) {
            tempMin = temperature;
        }
        if (temperature > tempMax) {
            tempMax = temperature;
        }
    });

    return {tempMin, tempMax};
}

function convertWeatherIcon(icon: string) {
    // tslint:disable:ter-indent
    switch (icon) {
        case '01d':
            return 'wi-day-sunny';
        case '01n':
            return 'wi-night-clear';
        case '02d':
            return 'wi-day-cloudy';
        case '02n':
            return 'wi-night-alt-cloudy';
        case '03d':
        case '03n':
            return 'wi-cloud';
        case '04d':
        case '04n':
            return 'wi-cloudy';
        case '09d':
        case '09n':
            return 'wi-showers';
        case '10d':
            return 'wi-day-rain';
        case '10n':
            return 'wi-night-alt-rain';
        case '11d':
        case '11n':
            return 'wi-storm-showers';
        case '13d':
        case '13n':
            return 'wi-snow';
        case '50d':
        case '50n':
            return 'wi-fog';
        default:
            return 'wi-day-sunny';
    }
    // tslint:enable:ter-indent
}
