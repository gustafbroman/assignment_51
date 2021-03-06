import React from 'react';
import './Vehicle.scss';

class Tab_page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "boat",
            name: "Bogserbåt Grimmen",
            events: {date: "21.05.2020 14:58", description: "Rörde sig"},
        }
    }

    getSymbol() {
        const type = this.state.type;
        if (type === "boat") {
            return "directions_boat";
        }
        else if (type === "car") {
            return "directions_car";
        }
        else if (type === "bike") {
            return "two_wheeler";
        }
        else {
            return "gps_fixed";
        }
    }

    getAdditionalText(info){
        return ( 
            <div className="vehicle-additional-text-container">
                <p className="vehicle-additional-text fat" style={info.status==="Active" ? {color:"green"} : {color:"#cf2a44"}}>{info.status}</p>    
                <p className="vehicle-additional-text">•</p>
                <p className="vehicle-additional-text">{info.date}</p>
                <p className="vehicle-additional-text">•</p>
                <p className="vehicle-additional-text">{info.share_text}</p>
            </div>
        )
    }   

    getArrow() {
        if (this.props.arrow) {
            if (this.props.up) {
                return <span className="material-icons">keyboard_arrow_down</span>;
            }
            else {
                return <span className="material-icons">keyboard_arrow_up</span>;
            }
        }
    }

    render() {
        return (
            <div className="vehicle">
                {this.props.additional_text && this.getAdditionalText(this.props.info)}
                <span className="material-icons">{this.getSymbol()}</span>
                <div className="text">
                    <p className="name">{this.props.info.name}</p>
                    <p className="date">{this.props.info.id}</p>
                    {this.getArrow()}
                </div>
            </div>
        );
    }
}

export default Tab_page;