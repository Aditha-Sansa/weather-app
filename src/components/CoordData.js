import React from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Image from 'react-bootstrap/Image'

export class CoordData extends React.Component {

    render() {
        const coord = this.props.coord;
        return (
            <Card bg="light" text="dark">
                <Card.Body>
                    <Card.Text className="text-left"></Card.Text>
                    <ListGroup variant="flush">
                        <ListGroup.Item variant="transparent">Lon: {coord.lon} °</ListGroup.Item>
                        <ListGroup.Item variant="transparent">Lat: {coord.lat} °</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        );
    }
}