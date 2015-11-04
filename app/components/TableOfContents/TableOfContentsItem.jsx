import React from 'react';
import styles from './TableOfContents.css';

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
      <li className={styles.listItem}>
        <a
          className={styles.link}
          href={itemId}
        >
          {this.props.item}
        </a>
      </li>
    );
  }
}
