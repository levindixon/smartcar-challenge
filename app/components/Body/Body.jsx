import React from 'react';
import styles from './Body.css';
import Docs from '../Docs/Docs.jsx';

let { PropTypes } = React;

export default class Body extends React.Component {

  static defaultProps = {
    schema: [],
    apiKey: "",
    vehicleId: 0,
  };

  static propTypes = {
    schema: PropTypes.array.isRequired,
    apiKey: PropTypes.string.isRequired,
    vehicleId: PropTypes.string.isRequired
  };

  render() {
    return (
      <div className={styles.column}>
        <Docs
          schema={this.props.schema}
          apiKey={this.props.apiKey}
          vehicleId={this.props.vehicleId}
        />
      </div>
    );
  }
}
