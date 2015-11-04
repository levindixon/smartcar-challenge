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
      <div className={styles.tableOfContents}>
        <h3 className={styles.header}>introduction</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a
              className={styles.link}
              href="#introduction"
            >
              introduction
            </a>
          </li>
        </ul>
        <h3 className={styles.header}>methods</h3>
        <ul className={styles.list}>
          {this.props.schema.map((item, i) => {
            return (
              <TableOfContentsItem
                key={i}
                item={item.title}
              />
            );
          }, this)}
        </ul>
      </div>
    );
  }
}
