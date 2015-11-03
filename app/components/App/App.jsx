import React from 'react';

import styles from './App.css';

import AppActions from '../../actions/AppActions.js';
import SchemaStore from '../../stores/SchemaStore.js';
import LeftColumn from '../LeftColumn/LeftColumn.jsx';
import CenterColumn from '../CenterColumn/CenterColumn.jsx';

function getAppState() {
  return {
    schema: SchemaStore.getAll()
  };
}

export default class App extends React.Component {

  state = getAppState()

  componentDidMount() {
    SchemaStore.addChangeListener(this.onChange);
    AppActions.getSchema();
  }

  componentWillUnmount() {
    SchemaStore.removeChangeListener(this.onChange);
  }

  onChange = () => {
    this.setState(getAppState());
  }

  render() {
    return (
      <div className={styles.app}>
        <LeftColumn schema={this.state.schema} />
        <CenterColumn schema={this.state.schema} />
      </div>
    );
  }
}
