import React from 'react';
// import ReactDOM from 'react-dom';
import './SeasonDisplay.css';

const seasonConfig = {
    'summer' : {
        'text' : "Summer time = Mango time!",
        'iconName' : "sun"
    },
    'winter' : {
        'text' : "Winter time = bed time!",
        'iconName' : 'snowflake'
    }
}

const getSeason = function (lat, month) {
    if(month >2 && month <9){
        return lat>0 ? "summer" : "winter";
    }else{
        return lat>0 ? "winter" : "summer";
    }
}

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];
return (<div className={`season-display ${season}`}>
    <i className={`icon massive ${iconName} icon-left`}></i>
    <h1>{text}</h1>
    <i className={`icon massive ${iconName} icon-right`}></i>
    </div>
    )
}

export default SeasonDisplay;