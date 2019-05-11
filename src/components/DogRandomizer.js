import React, { Component } from "react";
import Button from "@material-ui/core/Button";

import "../styles/global.css";

class DogRandomizer extends Component {
  constructor() {
    super();
    this.state = {
      breedList: []
    };
  }

  componentDidMount() {
    const url = "https://dog.ceo/api/breeds/image/random";
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ breedList: responseJson.message });
        console.log(this.state.breedList);
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleClick = () => {
    const url = "https://dog.ceo/api/breeds/image/random";
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ breedList: responseJson.message });
        console.log(this.state.breedList);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="dd-wrapper">
        {/* <h1>Select Your Favorite Breed:</h1> */}
        <Button variant="raised" color="secondary" onClick={this.handleClick}>
          Fetch Random Good Boi!
        </Button>

        {/* <Select className="dd-options" options={this.state.breed} /> */}
        <div className="dog-image">
          <img
            src={this.state.breedList}
            alt="Smiley face"
            height="500"
            width="500"
          />
        </div>
      </div>
    );
  }
}

export default DogRandomizer;
