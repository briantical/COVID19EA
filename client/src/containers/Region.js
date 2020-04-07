import React, { Component } from "react";
import { connect } from "react-redux";

export class Region extends Component {
  render() {
    return <div>Regional Data</div>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Region);
