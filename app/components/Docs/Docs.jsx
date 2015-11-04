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
      <div className={styles.docs}>
        <div
          className={styles.docItem}
          id="introduction"
        >
          <div className={styles.content}>
            <h2 className={styles.title}>Introduction</h2>
            <p className={styles.paragraph}>
              Welcome to the smartcar api docs!
            </p>
            <p className={styles.paragraph}>
              We’ve gone ahead and added your API key into each example,
              along with an example vehicle ID. Feel free to generate
              a new API key or change your vehicle ID at anytime and we’ll
              update the examples for you.
            </p>
          </div>
          <div className={styles.example}></div>
        </div>
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
