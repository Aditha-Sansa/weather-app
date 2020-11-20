import React from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Image from 'react-bootstrap/Image'


export class TempData extends React.Component {

  render() {

    const main = this.props.main;
    const weather = this.props.weather;
    const iconUrl = 'http://openweathermap.org/img/wn/';
    let weatherIcon = weather.icon + '.png';

    return (
      <Card bg="dark" text="white">
        <Card.Header>
          <Image src={iconUrl + weatherIcon} alt="Card image" />
          {weather.description}
        </Card.Header>
        <Card.Body>
          <Card.Text className="text-left"></Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item variant="transparent">Temperature: {main.temp} °C</ListGroup.Item>
            <ListGroup.Item variant="transparent">Max Temperature: {main.temp_max} °C</ListGroup.Item>
            <ListGroup.Item variant="transparent">Min Temperature: {main.temp_min} °C</ListGroup.Item>
            <ListGroup.Item variant="transparent">Feels Like: {main.feels_like} °C</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    );

  }
}

export class OtherTempData extends React.Component {
  render() {

    const main = this.props.main;

    return (
      <Card bg="light" text="dark">
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item variant="transparent">Humidity: {main.humidity} %</ListGroup.Item>
            <ListGroup.Item variant="transparent">Pressure: {main.pressure} hPa</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    );
  }
}