import React, { Component, PropTypes } from 'react';

class ResultList extends Component {
  render() {
    let element = this.props.results.map((result) => {
      return (
        <li>
          {result.rank + result.name}
        </li>
      );
    });
    
    return (
      <ol>
        {element}
      </ol>
    );
  }
}

ResultList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({
    rank: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired
};

export default ResultList;