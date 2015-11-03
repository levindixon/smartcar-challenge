import React from 'react';

let { Component, PropTypes } = React;

export default class TableOfContentsItem extends Component {

  static propTypes = {
    item: PropTypes.string.isRequired
  };

  onItemClick = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <li key={'table-of-contents-item-' + this.props.item}>
        <a href="#" onClick={this.onItemClick}>
          {this.props.item}
        </a>
      </li>
    );
  }
}
