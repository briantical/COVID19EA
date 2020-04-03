import React, { Component } from "react";
import { connect } from "react-redux";

export class Country extends Component {
  render() {
    return <div>Country Data</div>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Country);
