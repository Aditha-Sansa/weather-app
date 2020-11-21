import React from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Image from 'react-bootstrap/Image'



export class PressureData extends React.Component {
    render() {
  
      const main = this.props.main;
  
      return (
        <Card bg="secondary" text="white">
          <Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item variant="transparent"><strong>Pressure</strong> {main.pressure} hPa</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      );
    }
  }