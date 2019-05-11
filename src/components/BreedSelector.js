import React, { Component } from "react";
import Select from "react-select";
import "../styles/global.css";

class BreedSelector extends Component {
  constructor() {
    super();
    this.state = {
      breeds: [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" }
      ]
    };
  }

  componentDidMount() {
    const url = "";
  }

  render() {
    return (
      <div className="dd-wrapper">
        <h1>Select Your Favorite Breed:</h1>
        <Select className="dd-options" options={this.state.breeds} />
      </div>
    );
  }
}

export default BreedSelector;
