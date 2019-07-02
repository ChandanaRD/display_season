import React from 'react';
import ReactDOM from 'react-dom';

const SeasonDisplay = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => { console.log(position) },
        (err) => { console.log(`err: ${err}`) }
    );
return <div>Season Display!</div>
}

export default SeasonDisplay;