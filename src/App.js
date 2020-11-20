import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import { TempData, OtherTempData } from './components/TempData';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'


import 'fontsource-roboto/500.css';
import 'fontsource-roboto/400.css';
import 'fontsource-roboto/500.css';
import 'fontsource-roboto/700.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.appID = process.env.REACT_APP_ID;
    this.handleClick = this.handleClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      main: [],
      query: ''
    };
  }

  componentDidMount() {

  }

  handleClick(e) {
    e.preventDefault();
    console.log(this.state.main);
  }

  handleSearch(e) {
    this.setState({ query: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    let query = this.state.query;

    const options = {
      method: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather',
      params: {
        q: query,
        APPID: this.appID,
        units: 'metric'
      }
    };

    axios.request(options)
      .then(res => {
        const main = res.data.main;
        this.setState({ main: main });
      }).catch(res => { console.log("Error occured:" + res) })
    // console.log(this.state.query);
  }

  render() {
    return (
      <div>
        <Container>
          <Row className="searchrow">
            <Col sm={8}><Form.Group><Form.Control size="lg" type="text" placeholder="Search by a city..." value={this.state.query} onChange={this.handleSearch} /></Form.Group></Col>
            <Col sm={4}><Button variant="gradient" size="xxl" type="submit" onClick={(e) => this.onSubmit(e)} >Search</Button></Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <CardColumns>
                <TempData connection={this.state.main} />
                <OtherTempData connection={this.state.main} />
              </CardColumns>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;