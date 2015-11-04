import React from 'react';

const { Component, PropTypes } = React;

export default class TableOfContentsItem extends Component {

  static propTypes = {
    item: PropTypes.string.isRequired
  };

  render() {
    const itemId =  '#' +
                    this.props.item
                    .replace(/\s+/g, '-')
                    .toLowerCase();

    return (
      <li key={'table-of-contents-item-' + itemId}>
        <a href={itemId}>
          {this.props.item}
        </a>
      </li>
    );
  }
}
