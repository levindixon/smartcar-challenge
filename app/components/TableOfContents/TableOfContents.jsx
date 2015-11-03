import React from 'react';
import styles from './TableOfContents.css';
import TableOfContentsItem from './TableOfContentsItem.jsx';

let { Component, PropTypes } = React;

export default class TableOfContents extends Component {

  static defaultProps = {
    schema: []
  };

  static propTypes = {
    schema: PropTypes.array.isRequired
  };

  render() {
    return (
      <ul className={styles.contents}>
        {this.props.schema.map((item) => {
          return (<TableOfContentsItem item={item.title} />);
        }, this)}
      </ul>
    );
  }
}
