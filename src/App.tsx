import React from 'react';
import Search from './components/Search';
import { getWeatherData } from './actions/weather.actions';
import WeatherGrid from './components/WeatherGrid';
import {IWeatherData, IWeatherDataResponse} from './dto';

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
                const r = await getWeatherData(position);
                this.setState({ weatherData: r });
                console.log(this.state);
            });
        }
    }

    render() {
        return (
            <div>
                <header>
                    <a href="#">WeatherApp</a>
                </header>
                <main>
                    <Search/>
                    {
                        this.state.weatherData &&
                        <WeatherGrid weatherData={this.state.weatherData}/>
                    }

                </main>
            </div>
        );
    }
}

export default App;
