import React, { Component } from "react";
import Card from "./Card";
import DATA from "../assets/data/data";

export default class MyComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: DATA,
      max: 33,
      min: 0,
    };
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement = (index) => {
    const currentItems = [...this.state.data];
    currentItems[index].count += 1;
    this.setState(currentItems);
  };

  render() {
    // console.log(this.state.data);
    return (
      <div className="row pt-4">
        <Card data={this.state.data} handleIncrement={this.handleIncrement} />
      </div>
    );
  }
}
