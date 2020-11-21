import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export class WindData extends React.Component {

    render() {
        const wind = this.props.wind;
        return (
            <Card bg="gradient-1" text="white">
                <Card.Header><h4>Wind</h4></Card.Header>
                <Card.Body>
                    <Card.Text className="text-left"></Card.Text>
                    <ListGroup variant="flush">
                        <ListGroup.Item variant="transparent"><strong>Deg</strong> {wind.deg} °</ListGroup.Item>
                        <ListGroup.Item variant="transparent"><strong>Speed</strong> {wind.speed} meter/sec</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        );
    }
}