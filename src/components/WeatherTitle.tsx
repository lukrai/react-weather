import React from 'react';
import {ICity} from '../dto';

export default function WeatherTitle(props: { city: ICity, cityName: string }) {
    const [favorites, setFavorites] = React.useState(
        JSON.parse(localStorage.getItem('favoriteCities') as string) || [],
    );

    React.useEffect(() => {
        if (!favorites) {
            setFavorites(JSON.parse(localStorage.getItem('favoriteCities') as string));
        }

    }, [favorites]);

    const onChange = (event: any) => {
        if (favorites && favorites.length > 0) {
            const existingCity = favorites.find((o: any) => o != null && o.city === props.cityName);
            if (!existingCity) {
                const city = {city: props.city.name, lat: props.city.coord.lat, lng: props.city.coord.lon}
                saveCityDataToLocalStorage(city);
                setFavorites([...favorites, city]);
            }
        }
    };

    return (
        <div className="weather-city-title">
            <p>{props.city.name}, {props.city.country} <Star isFavorite={false} onChange={onChange}/></p>
        </div>
    );
}

function Star(props: { isFavorite: boolean; onChange: any }) {
    const color = props.isFavorite ? '#fe5a3f' : '#000';

    return (
        <span onClick={props.onChange} style={{color}}>★</span>
    );
}

function saveCityDataToLocalStorage(data: any) {
    const dataArray = JSON.parse(localStorage.getItem('favoriteCities') as string);
    dataArray.push(data);
    localStorage.setItem('favoriteCities', JSON.stringify(dataArray));
}
