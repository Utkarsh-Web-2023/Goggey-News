import Navbar from "./navbar";
import NewsComponent from "./news";
import React, { Component } from "react";
export default class App extends Component {
  render() {
    return (
      <div>
        {/* <h1 className="heading font-large text-lg">Welcome to News Junkeyy</h1> */}
        <Navbar />
        <NewsComponent />
      </div>
    );
  }
}
