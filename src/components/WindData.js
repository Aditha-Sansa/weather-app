import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';

export class WindData extends React.Component {

    render() {
        const wind = this.props.wind;
        return (
            <Card bg="light" text="dark">
                <Card.Header>Wind</Card.Header>
                <Card.Body>
                    <Card.Text className="text-left"></Card.Text>
                    <ListGroup variant="flush">
                        <ListGroup.Item variant="transparent">Deg: {wind.deg} °</ListGroup.Item>
                        <ListGroup.Item variant="transparent">Speed: {wind.speed} meter/sec</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        );
    }
}