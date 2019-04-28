import React from 'react';

const App: React.FC = () => {
    return (
        <div>
            <header>
                <a href="#">WeatherApp</a>
            </header>
            <main>
                <div className="search-box">
                    <form className="search-form" /*onSubmit={this.handleSubmit}*/>
                        <input
                            type="text"
                        />
                        <button type="submit">
                            <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                                <path d="M0 0h24v24H0z" fill="none"/>
                            </svg>
                        </button>
                    </form>
                </div>
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
};

export default App;
