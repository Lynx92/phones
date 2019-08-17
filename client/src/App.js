import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Phones from "./Components/phones";
import PhoneDetail from "./Components/phoneDetail";
import axios from "axios";


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      phones: []
    };
  }

  componentDidMount() {
    let payload = [];
    axios.get("http://localhost:5000/phones")
    .then(datapayload => {
      payload = datapayload.data;
      this.setState({ ...this.state, phones: payload });
    });
  }


  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/phones" />} />

          <Route exact path="/phones" render={() => <Phones phones={this.state.phones}/>} />

          <Route exact path="/phoneDetail/:id" render={(props) => <PhoneDetail {...props} phones={this.state.phones}/>} />
        </Switch>
      </div>
    );
  }
}
