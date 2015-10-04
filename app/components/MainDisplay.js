import React, { Component, PropTypes } from 'react';
import ResultList from './ResultList';

class MainDisplay extends Component {

  render() {

    const { resultArray, getResults } = this.props;

    let element = resultArray.map((results) => {
      return (
        <ResultList results={results} />
      )
    });
    
    return (<div>
      <button type="buttun" onClick={getResults.bind(this)}>get</button>
      {element}
    </div>);
  }
}

MainDisplay.propTypes = {
  resultArray: PropTypes.array.isRequired,
  getResults: PropTypes.func.isRequired
};

export default MainDisplay;