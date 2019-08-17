import React, { Component } from "react";
import PhoneCard from "./phoneCard";
import "./phones.scss";

export default class Phones extends Component {
  render() {
    return (
      <div className="phoneList">
        {this.props.phones.map((phone, idx) => (
          <PhoneCard key={idx} {...phone} />
        ))}
      </div>
    );
  }
}
