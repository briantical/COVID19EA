import React, { Component } from "react";
import { connect } from "react-redux";

import { Header } from "./components";
const WHO = require("./../assets/who.png");

export class Country extends Component {
  render() {
    return (
      <div className="container-fluid no-gutters px-0">
        <Header />
        <div className="content commons_vertical">Country Data</div>
        <img
          src={WHO}
          alt="WHO Log"
          title="Data provided by WHO"
          className="img-fluid"
          id="who_logo"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Country);
