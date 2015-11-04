import React from 'react';

import styles from './Inputs.css';
import ApiKeyStore from '../../stores/ApiKeyStore.js';

const { PropTypes } = React;

export default class ApiKeyInput extends React.Component {
  static propTypes = {
    apiKey: PropTypes.string.isRequired
  };

  static defaultProps = {
    apiKey: ''
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

  handleApiKeyRefresh = () => {
    const newApiKey = Math.random().toString(36).substring(5);
    ApiKeyStore.set(newApiKey);
  }

  render() {
    return (
      <label className={styles.inputs}>
        <span>api key</span>
        <input
          type="text"
          value={this.state.apiKey}
          readOnly
        />
        <button onClick={this.handleApiKeyRefresh}>refresh</button>
      </label>
    );
  }
}
