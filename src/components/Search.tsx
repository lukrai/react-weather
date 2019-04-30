import React from 'react';
declare const google: any;

export default class Search extends React.Component<any, {lat: number| string, lng: number | string}> {
    constructor(props: any) {
        super(props);

        this.state = {
            lat: '',
            lng: '',
        };
    }

    componentDidMount() {
        const input = document.getElementById('autocomplete');

        const autocomplete = new google.maps.places.Autocomplete(input, {types: ['(cities)']});

        google.maps.event.addListener(autocomplete, 'place_changed', () => {
            const place = autocomplete.getPlace();

            const lat = place.geometry.location.lat();
            const lng = place.geometry.location.lng();

            this.setState({
                lat,
                lng,
            });
            this.props.onSubmit(lat, lng);
        });
    }

    handleSubmit = (event: any) => {
        event.preventDefault();

        if (this.state.lat && this.state.lng) {
            this.props.onSubmit(this.state.lat, this.state.lng);
        }
    };

    handleFocus = (event: any) => event.currentTarget.select();

    render() {
        return (
            <div className="search-box">
                <form className="search-form" onSubmit={this.handleSubmit}>
                    <input
                        id="autocomplete"
                        type="text"
                        placeholder="Search"
                        onFocus={this.handleFocus}
                    />
                    <button type="submit">
                        <svg id="search-icon" className="search-icon" viewBox="0 0 24 24">
                            <path // tslint:disable-next-line:max-line-length
                                d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                            <path d="M0 0h24v24H0z" fill="none"/>
                        </svg>
                    </button>
                </form>
            </div>
        );
    }
}
