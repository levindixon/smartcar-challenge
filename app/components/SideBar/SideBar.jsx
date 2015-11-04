import React from 'react';
import styles from './SideBar.css';
import ApiKeyInput from '../Inputs/ApiKeyInput.jsx';
import VehicleIdInput from '../Inputs/VehicleIdInput.jsx';
import TableOfContents from '../TableOfContents/TableOfContents.jsx';

let { PropTypes } = React;

export default class SideBar extends React.Component {

  static defaultProps = {
    schema: [],
    apiKey: "",
    vehicleId: 0
  };

  static propTypes = {
    schema: PropTypes.array.isRequired,
    apiKey: PropTypes.string.isRequired,
    vehicleId: PropTypes.string.isRequired
  };

  render() {
    return (
      <div className={styles.column}>
        <h1>smartcar</h1>
        <hr/>
        <h3>john doe</h3>
        <ApiKeyInput apiKey={this.props.apiKey} />
        <VehicleIdInput vehicleId={this.props.vehicleId} />
        <hr/>
        <TableOfContents schema={this.props.schema} />
      </div>
    );
  }
}
