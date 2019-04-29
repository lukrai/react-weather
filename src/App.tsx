import React from 'react';
import Search from './components/Search';
import { getWeatherData } from './actions/weather.actions';
import WeatherGrid from './components/WeatherGrid';
import {IWeatherData} from './dto';
import Map from './components/Map';

interface IProps {}

interface IState {
    weatherData: IWeatherData | undefined;
}

class App extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            weatherData: undefined,
        };
    }

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position: Position) => {
                const r = await getWeatherData({latitude: position.coords.latitude, longitude: position.coords.longitude});
                this.setState({ weatherData: r });
            });
        }
    }

    handleSearchSubmit = async (lat: number, lng: number) => {
        const r = await getWeatherData({latitude: lat, longitude: lng});
        this.setState({ weatherData: r });
    };

    render() {
        return (
            <div>
                <header>
                    <a href="#">WeatherApp</a>
                </header>
                <main>
                    <Search onSubmit={this.handleSearchSubmit}/>
                    {this.state.weatherData && <WeatherGrid weatherData={this.state.weatherData}/>}
                    <Map weatherData={this.state.weatherData}/>
                </main>
            </div>
        );
    }
}

export default App;
