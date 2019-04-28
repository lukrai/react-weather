import React from 'react';
import Search from './components/Search';
import {getWeatherData} from "./actions/weather.actions";

class App extends React.Component {
    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position: Position) => {
                const r = await getWeatherData(position);
                console.log(r);
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
                    <div className="weather-grid">
                        <div className="weather-city-title">
                            <p>Kaunas</p>
                        </div>
                        <div className="weather-temperature">
                            <p>Kaunas</p>
                        </div>
                        <div className="weather-info">
                            <p>Kaunas</p>
                        </div>
                        <div className="weather-day-grid">
                            <div className="weather-day">
                                <p>1</p>
                            </div>
                            <div className="weather-day">
                                <p>2</p>
                            </div>
                            <div className="weather-day">
                                <p>3</p>
                            </div>
                            <div className="weather-day">
                                <p>4</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
