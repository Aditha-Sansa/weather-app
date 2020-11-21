import React from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Image from 'react-bootstrap/Image'


export class TempData extends React.Component {

  render() {

    const main = this.props.main;
    const weather = this.props.weather;
    let cardStyles = {};

      if (/^8[0-9]/.test(weather.id) || /^6[0-9]/.test(weather.id)) {
        cardStyles = {
          cardLight: "info",
          cardText: "white"
        }
      } else {
        cardStyles = {
          cardLight: "dark",
          cardText: "white"
        }
      }

    return (
      <Card bg={cardStyles.cardLight} text={cardStyles.cardText}>
        <Card.Header>
          <h4>Temperature</h4>
        </Card.Header>
        <Card.Body>
          <Card.Text className="text-left"></Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item variant="transparent"><strong>Temperature</strong> {main.temp} °C</ListGroup.Item>
            <ListGroup.Item variant="transparent"><strong>Max Temperature</strong> {main.temp_max} °C</ListGroup.Item>
            <ListGroup.Item variant="transparent"><strong>Min Temperature</strong> {main.temp_min} °C</ListGroup.Item>
            <ListGroup.Item variant="transparent"><strong>Feels Like</strong> {main.feels_like} °C</ListGroup.Item>
            <ListGroup.Item variant="transparent"><strong>Humidity</strong> {main.humidity} %</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    );

  }
}