import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = { lat:null, errorMessage: '' };
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => { this.setState({lat:position.coords.latitude}) },
            (err) => { this.setState({errorMessage:err.message}) }
        );
        console.log(`lat ${this.state.lat} error ${this.state.errorMessage}`)
    }

    render(){
        if(this.state.lat && !this.state.errorMessage){
            return <div>Latitude: {this.state.lat}</div>;
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
    <App />, document.querySelector('#root')
)