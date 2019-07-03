import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class Seasons extends React.Component{
    constructor(props){
        super(props);
        this.state = { lat:null, errorMessage: '' };
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => { this.setState({lat:position.coords.latitude}) },
            (err) => { this.setState({errorMessage:err.message}) }
        );
    }

    render(){
        if(this.state.lat && !this.state.errorMessage){
            console.log(`latitude:${this.state.lat}`);
            return <SeasonDisplay lat = {this.state.lat}/>;
        }
        if(!this.state.lat && this.state.errorMessage){
            return <div>err: {this.state.errorMessage}</div>;
        } 
        if(!this.state.lat && !this.state.errorMessage){
            return <div>loading!</div>;
        }
    }
}
ReactDOM.render(
    <Seasons />, document.querySelector('#root')
)