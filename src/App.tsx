import React from 'react';
import './main.scss';

const App: React.FC = () => {
    return (
        <div>
            <header>
                <a href="#">WeatherApp</a>
            </header>
            <main>
                <h1>Not a Header</h1>
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
                    <div className="day-grid">
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
};

export default App;
