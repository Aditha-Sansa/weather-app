import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


export class SunData extends React.Component {

    constructor(props) {
        super(props);
        this.formatTime = this.formatTime.bind(this);
    }

    formatTime = (s) => {
        return new Date(s * 1e3).toISOString().slice(-13, -5);
    }


    render() {
        let sunrise;
        let sunset;
        if (this.props.sys.sunrise !== undefined && this.props.sys.sunset !== undefined) {
            sunrise = this.formatTime(this.props.sys.sunrise);
            sunset = this.formatTime(this.props.sys.sunset);
        } else {
            sunrise = '';
            sunset = '';
        }


        return (
            <Card bg="gradient" text="white">
                <Card.Body>
                    <Card.Text className="text-left"></Card.Text>
                    <ListGroup variant="flush">
                        <ListGroup.Item variant="transparent"><strong>Sunrise</strong> {sunrise} </ListGroup.Item>
                        <ListGroup.Item variant="transparent"><strong>Sunset</strong> {sunset} </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        );
    }

}