import React, { Component } from "react";
import Card from "./Card";
import DATA from "../assets/data/data";

export default class MyComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: DATA,
      max: 33,
      isSubmitDisabled: false,
    };
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement = (index) => {
    const currentItems = [...this.state.data];
    const count = currentItems[index].count;
    const btn = currentItems[index].isSubmitDisabled;
    currentItems[index].count += 1;

    this.setState({
      currentItems,
    });
  };

  render() {
    // console.log(this.state.data);
    return (
      <div className="row pt-3">
        <Card
          data={this.state.data}
          handleIncrement={this.handleIncrement}
          isSubmitDisabled={this.state.isSubmitDisabled}
        />
      </div>
    );
  }
}
