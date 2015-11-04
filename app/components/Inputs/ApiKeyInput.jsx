import React from 'react';

import styles from './Inputs.css';

import AppActions from '../../actions/AppActions.js';
import ApiKeyStore from '../../stores/ApiKeyStore.js';

let { PropTypes } = React;

export default class ApiKeyInput extends React.Component {
  static defaultProps = {
    apiKey: ''
  };

  static propTypes = {
    apiKey: PropTypes.string.isRequired
  };

  state = {
    apiKey: this.props.apiKey
  }

  componentDidMount() {
    ApiKeyStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    ApiKeyStore.removeChangeListener(this.onChange);
  }

  onChange = () => {
    this.setState({
      apiKey: ApiKeyStore.get()
    });
  }

  handleInputChange = (e) => {
    ApiKeyStore.set(e.target.value)
  }

  render() {
    return (
      <label className={styles.inputs}>
        <span>api key</span>
        <input
          type="text"
          value={this.state.apiKey}
          onChange={this.handleInputChange}
        />
      </label>
    );
  }
}
