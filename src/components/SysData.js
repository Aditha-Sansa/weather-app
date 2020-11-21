import React from 'react';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image';

export class SysData extends React.Component {

    render() {
        const weather = this.props.weather;
        let header;
        const iconUrl = 'http://openweathermap.org/img/wn/';
        let weatherIcon;

        weather.icon !== undefined ? weatherIcon = <Image src={iconUrl + weather.icon + '.png'} alt="Card image" /> : weatherIcon = '';

        let capitalizeFirstLetter = (string) => {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
      
        
        if (this.props.sys.country !== undefined && this.props.searchTerm !== undefined) {
            header = this.props.sys.country + ',' + this.props.searchTerm;
        } else {
            header = <span></span>;
        }
        

        return (
            <div>
                <h1>
                {header} 
                </h1>
                <h5>{weather.description!==undefined?capitalizeFirstLetter(weather.description):weather.description}{weatherIcon}</h5>
            </div>
        );
    }

}