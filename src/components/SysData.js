import React from 'react';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

export class SysData extends React.Component {

    render() {
        let header;
        if (this.props.sys.country !== undefined && this.props.searchTerm !== undefined) {
            header = <h1>{this.props.sys.country}, {this.props.searchTerm}</h1>;
        } else {
            header = <span></span>;
        }
        
        return (
            <div>
                {header}
                <p>

                </p>
            </div>
        );
    }

}