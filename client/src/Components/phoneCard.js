import React, { Component } from "react";
import "./phoneCard.scss";
import { Link } from "react-router-dom";

export default class PhoneDetail extends Component {
  render() {
    return (
      <Link to={`/phoneDetail/${this.props.id}`}>
        <article className="phone">
          <h1>{this.props.name}</h1>

          <img src={`./${this.props.imageFileName}`} alt="img" />

          <p>{this.props.description}</p>

          <h4>{this.props.price} €</h4>
        </article>
      </Link>
    );
  }
}
