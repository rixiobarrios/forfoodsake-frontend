import React from 'react';

const Map = ({ user }) => {
    return (
        <>
            <iframe
                title="map"
                width="450"
                height="250"
                frameborder="0"
                style={{ border: 0 }}
                src={`https://www.google.com/maps/embed/v1/place?key=${
                    process.env.REACT_APP_GMAPS_KEY
                }&q=${encodeURIComponent(
                    user.street,
                    user.state,
                    user.zipCode
                )}`}
                allowfullscreen
            ></iframe>
        </>
    );
};

export default Map;
