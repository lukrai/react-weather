interface ICity {
    coord: {
        lat: number;
        lon: number;
    };
    country: string;
    id: number;
    name: string;
}

export interface IWeatherDataResponse {
    city: ICity;
    cnt: number;
    cod: string;
    list: IWeatherDataResponseListItem[];
    message: number;
}

export interface IWeatherDataResponseListItem {
    clouds: {
        all: number;
    };
    dt: number;
    dt_txt: string;
    main: {
        grnd_level: number;
        humidity: number;
        pressure: number;
        sea_level: number;
        temp: number;
        temp_kf: number;
        temp_max: number;
        temp_min: number;
    };
    sys: {
        pod: string;
    };
    weather: {
        description: string;
        icon: string;
        id: number;
        main: string;
    }[];
    wind: {
        deg: number;
        speed: number;
    };
}

export interface IWeatherData {
    city: ICity;
    currentWeather: ICurentWeather;
}

export interface ICurentWeather {
    temperature: number;
    humidity: number;
    pressure: number;
    description: string;
    icon: string;
    id: number;
    clouds: number;
    wind: {
        direction: string;
        speed: number;
    };
}
