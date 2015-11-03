import React from 'react';
import styles from './Docs.css';
import DocsItem from './DocsItem.jsx';

let { Component, PropTypes } = React;

export default class Docs extends Component {

  static defaultProps = {
    schema: []
  };

  static propTypes = {
    schema: PropTypes.array.isRequired
  };

  render() {
    return (
      <div className={styles.contents}>
        {this.props.schema.map((item) => {
          return (<DocsItem item={item} />);
        }, this)}
      </div>
    );
  }
}
