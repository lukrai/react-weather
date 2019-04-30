import React from 'react';
import {GoogleMap, withGoogleMap, withScriptjs, InfoWindow} from 'react-google-maps';
import {IWeatherData} from '../dto';
import {googleKey} from '../helpers/apiKeys';

// tslint:disable-next-line:variable-name
const Map = withScriptjs(withGoogleMap((props: any) => {
    return (
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{lat: 54.9167, lng: 23.9667}}
            center={{lat: props.position.lat, lng: props.position.lng}}
        >
            {props.weather
            && <InfoWindow  position={{lat: props.position.lat, lng: props.position.lng}}>
                <p>{props.weather.temperature}° {props.weather.description.toUpperCase()}</p>
            </InfoWindow>}
        </GoogleMap>
    );
}));

interface IPropsWeatherData {
    weatherData: IWeatherData | undefined;
}

export default function MapWithAMarkedInfoWindow(props: IPropsWeatherData) {
    return (
        <Map
            isMarkerShown={true}
            position={{lat: props.weatherData && props.weatherData.city.coord.lat || 0, lng: props.weatherData && props.weatherData.city.coord.lon || 0}}
            weather={props.weatherData && props.weatherData.currentWeather}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${googleKey}&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{height: '100%'}}/>}
            containerElement={<div className="map-container-element"/>}
            mapElement={<div className="map-element"/>}
        />
    );
}
