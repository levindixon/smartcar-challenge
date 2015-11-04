import React from 'react';

import styles from './Inputs.css';

import AppActions from '../../actions/AppActions.js';
import VehicleIdStore from '../../stores/VehicleIdStore.js';

let { PropTypes } = React;

export default class VehicleIdInput extends React.Component {
  static defaultProps = {
    vehicleId: 0
  };

  static propTypes = {
    vehicleId: PropTypes.string.isRequired
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
    VehicleIdStore.set(e.target.value)
  }

  render() {
    return (
      <label className={styles.inputs}>
        <span>vehicle id</span>
        <input
          type="text"
          value={this.state.vehicleId}
          onChange={this.handleInputChange}
        />
      </label>
    );
  }
}
