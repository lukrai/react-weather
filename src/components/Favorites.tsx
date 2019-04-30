import React from 'react';

export default function Favorites(props: any) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [favorites, setFavorites] = React.useState(
        JSON.parse(localStorage.getItem('favoriteCities') as string) || [],
    );

    const toggle = () => {
        setIsOpen(!isOpen);
        setFavorites(JSON.parse(localStorage.getItem('favoriteCities') as string));
    };

    const onCityClick = (lat: number, lng: number) => {
        props.onCityClick(lat, lng);
    };

    return (
        <div className="collapsible-div">
            <button className="collapsible" onClick={toggle}>Favorites</button>
            {isOpen
            && <div className="content">
                {favorites.length > 0 && favorites.map((o: any, i: number) => o != null ? <span key={i} onClick={() => onCityClick(o.lat, o.lng)}>{o.city}</span> : null)}
            </div>
            }
        </div>
    );
}
