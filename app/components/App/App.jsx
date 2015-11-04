import React from 'react';

import styles from './App.css';

import AppActions from '../../actions/AppActions.js';
import SchemaStore from '../../stores/SchemaStore.js';
import ApiKeyStore from '../../stores/ApiKeyStore.js';
import VehicleIdStore from '../../stores/VehicleIdStore.js';

import SideBar from '../SideBar/SideBar.jsx';
import Body from '../Body/Body.jsx';

function getAppState() {
  return {
    schema: SchemaStore.getAll(),
    apiKey: ApiKeyStore.get(),
    vehicleId: VehicleIdStore.get()
  };
}

export default class App extends React.Component {

  state = getAppState()

  componentDidMount() {
    SchemaStore.addChangeListener(this.onChange);
    ApiKeyStore.addChangeListener(this.onChange);
    VehicleIdStore.addChangeListener(this.onChange);

    AppActions.getSchema();
    AppActions.getApiKey();
    AppActions.getVehicleId();
  }

  componentWillUnmount() {
    SchemaStore.removeChangeListener(this.onChange);
    ApiKeyStore.removeChangeListener(this.onChange);
    VehicleIdStore.removeChangeListener(this.onChange);
  }

  onChange = () => {
    this.setState(getAppState());
  }

  render() {
    return (
      <div className={styles.app}>
        <SideBar
          schema={this.state.schema}
          apiKey={this.state.apiKey}
          vehicleId={this.state.vehicleId}
        />
        <Body
          schema={this.state.schema}
          apiKey={this.state.apiKey}
          vehicleId={this.state.vehicleId}
        />
      </div>
    );
  }
}
