import React from 'react';
import styles from './TableOfContents.css';
import TableOfContentsItem from './TableOfContentsItem.jsx';

const { Component, PropTypes } = React;

export default class TableOfContents extends Component {
  static propTypes = {
    schema: PropTypes.array.isRequired
  };

  static defaultProps = {
    schema: []
  };

  render() {
    return (
      <ul className={styles.contents}>
        {this.props.schema.map((item, i) => {
          return (
            <TableOfContentsItem
              key={i}
              item={item.title}
            />
          );
        }, this)}
      </ul>
    );
  }
}
