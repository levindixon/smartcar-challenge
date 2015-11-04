import React from 'react';
import styles from './SideBar.css';
import ApiKeyInput from '../Inputs/ApiKeyInput.jsx';
import VehicleIdInput from '../Inputs/VehicleIdInput.jsx';
import TableOfContents from '../TableOfContents/TableOfContents.jsx';

const { PropTypes } = React;

export default class SideBar extends React.Component {
  static propTypes = {
    schema: PropTypes.array.isRequired,
    apiKey: PropTypes.string.isRequired,
    vehicleId: PropTypes.string.isRequired
  };

  static defaultProps = {
    schema: [],
    apiKey: '',
    vehicleId: 0
  };

  render() {
    return (
      <div className={styles.sideBar}>
        <h1 className={styles.logo}>
          <span className={styles.logoWheel}></span>
          <span className={styles.logoName}></span>
        </h1>
        <a
          className={styles.user}
          href="#"
        >
          <span className={styles.userAvatar}></span>
          <span className={styles.username}>john doe</span>
        </a>
        <ApiKeyInput apiKey={this.props.apiKey} />
        <VehicleIdInput vehicleId={this.props.vehicleId} />
        <TableOfContents schema={this.props.schema} />
      </div>
    );
  }
}
