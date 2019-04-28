export interface IWeatherDataResponse {
    city: {
        coord: {
            lat: number;
            lon: number;
        };
        country: string;
        id: number;
        name: string;
    };
    cnt: number;
    cod: string;
    list: IWeatherDataListItem[];
    message: number;
}

export interface IWeatherDataListItem {
    clouds: {
        all: string;
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
    }
}