import React from 'react';

import styles from './Inputs.css';
import VehicleIdStore from '../../stores/VehicleIdStore.js';

const { PropTypes } = React;

export default class VehicleIdInput extends React.Component {
  static propTypes = {
    vehicleId: PropTypes.string.isRequired
  };

  static defaultProps = {
    vehicleId: 0
  };

  state = {
    vehicleId: this.props.vehicleId
  }

  componentDidMount() {
    VehicleIdStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    VehicleIdStore.removeChangeListener(this.onChange);
  }

  onChange = () => {
    this.setState({
      vehicleId: VehicleIdStore.get()
    });
  }

  handleInputChange = (e) => {
    VehicleIdStore.set(e.target.value);
  }

  render() {
    return (
      <label className={styles.inputs}>
        <span className={styles.label}>
          vehicle id
        </span>
        <input
          className={styles.input}
          type="text"
          value={this.state.vehicleId}
          onChange={this.handleInputChange}
        />
      </label>
    );
  }
}
