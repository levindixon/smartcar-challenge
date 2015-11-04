import React from 'react';
import styles from './Body.css';
import Docs from '../Docs/Docs.jsx';

const { PropTypes } = React;

export default class Body extends React.Component {
  static propTypes = {
    schema: PropTypes.array.isRequired,
    apiKey: PropTypes.string.isRequired,
    vehicleId: PropTypes.string.isRequired
  };

  static defaultProps = {
    schema: [],
    apiKey: '',
    vehicleId: 0,
  };

  render() {
    return (
      <div className={styles.body}>
        <Docs
          schema={this.props.schema}
          apiKey={this.props.apiKey}
          vehicleId={this.props.vehicleId}
        />
      </div>
    );
  }
}
