import React, { Component } from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';

import './App.css';
import CategoryComp from '../components/CategoryComp';
import SubCatComp from '../components/SubCatComp';
import TileDisplay from '../components/TileDisplay';

import { myConfig } from '../constants/constant';

import * as myAction from '../actions/simpleAction'

class App extends Component {
  componentDidMount() {
    var that = this;       
    
    $.ajax({
      url: 'http://www.mocky.io/v2/5ed741b13200002b002745dc',
      success(response) {
        console.log("SUCCESS");
        response = myConfig.stubData;
        that.props.dispatch(myAction.responseData(response));
      },
      error(response) {
        console.log("ERROR");
        response = myConfig.stubData;
        that.props.dispatch(myAction.responseData(response));
      }
    })
  }
  render() {
    return (
      <div className="App">
        <CategoryComp />
        <SubCatComp />
        <TileDisplay />
      </div>
    );
  }
}

export default connect()(App);
