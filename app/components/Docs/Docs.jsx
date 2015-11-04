import React from 'react';
import styles from './Docs.css';
import DocsItem from './DocsItem.jsx';

const { Component, PropTypes } = React;

export default class Docs extends Component {
  static propTypes = {
    schema: PropTypes.array.isRequired,
    apiKey: PropTypes.string.isRequired,
    vehicleId: PropTypes.string.isRequired
  };

  static defaultProps = {
    schema: []
  };

  render() {
    return (
      <div className={styles.contents}>
        {this.props.schema.map((item, i) => {
          return (
            <DocsItem
              key={i}
              item={item}
              apiKey={this.props.apiKey}
              vehicleId={this.props.vehicleId}
            />
          );
        }, this)}
      </div>
    );
  }
}
