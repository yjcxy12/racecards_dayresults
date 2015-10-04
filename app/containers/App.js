import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MainDisplay from '../components/MainDisplay';
import * as Actions from '../actions/actions';

class App extends Component {
  render() {
    const { resultArray, dispatch } = this.props;
    const actions = bindActionCreators(Actions, dispatch);

    return (
      <div>
        <MainDisplay resultArray={resultArray} getResults={actions.getResults}/>
      </div>
    );
  }
}

App.propTypes = {
  resultArray: PropTypes.array.isRequired
};

function select(state) {
  return {
  	resultArray: state.dayResults
  };
}

export default connect(select)(App);