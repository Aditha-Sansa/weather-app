import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'


export class TempData extends React.Component {

  render() {

    const connection = this.props.connection;
    const tempInCelcius = {
      temp: parseFloat(connection.temp) - 273.15,
      temp_max: connection.temp_max - 273.15,
      temp_min: connection.temp_min - 273.15,
      feels_like: connection.feels_like - 273.15
    }

    return (
      <Card bg="dark" text="light">
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Text className="text-left">
            <ListGroup variant="flush">
              <ListGroup.Item variant="transparent">Temperature: {connection.temp} °C</ListGroup.Item>
              <ListGroup.Item variant="transparent">Max Temperature: {connection.temp_max} °C</ListGroup.Item>
              <ListGroup.Item variant="transparent">Min Temperature: {connection.temp_min} °C</ListGroup.Item>
              <ListGroup.Item variant="transparent">Feels Like: {connection.feels_like} °C</ListGroup.Item>
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
    );

  }
}

export class OtherTempData extends React.Component {
  render() {

    const connection = this.props.connection;

    return (
      <Card>
        <Card.Img variant="top" src="https://picsum.photos/100/100" />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text className="text-left">
            <ul>
              <li>Humidity: {connection.humidity} %</li>
              <li>Pressure: {connection.pressure} hPa</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}