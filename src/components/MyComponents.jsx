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

  handleIncrement = (point) => {
    const arr2 = this.state.data;
    arr2.forEach((element, index) => {
      arr2[index] = element + 1;
      console.log(element);
    });

    // 👇️ [2, 3, 4]
    console.log(arr2);
    // this.setState({ points });
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
