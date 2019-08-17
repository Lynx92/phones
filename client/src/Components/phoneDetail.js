import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./phoneDetail.scss";

export default class phoneDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id
    };
  }

  render() {
    return (
      <section className="phoneDetail">
        <div className="upPart">
          <div className="pictures">
            <img
              src={`../${this.props.phones[this.state.id].imageFileName}`}
              alt="img"
            />
          </div>

          <div className="features">
            <h1>{this.props.phones[this.state.id].name}</h1>
            <p>
              <span>Manufacturer: </span>
              {this.props.phones[this.state.id].manufacturer}
            </p>
            <p>
              <span>Color: </span>
              {this.props.phones[this.state.id].color}
            </p>
            <p>
              <span>Screen: </span>
              {this.props.phones[this.state.id].screen}
            </p>
            <p>
              <span>Processor: </span>
              {this.props.phones[this.state.id].processor}
            </p>
            <p>
              <span>Ram: </span>
              {this.props.phones[this.state.id].ram} GB
            </p>
            <p>{this.props.phones[this.state.id].description}</p>
            <p className="price">{this.props.phones[this.state.id].price} €</p>
          </div>
        </div>

        <div className="lowPart">
          <Link to={`/phones`}>
            <button>GO BACK</button>
          </Link>
        </div>
      </section>
    );
  }
}
