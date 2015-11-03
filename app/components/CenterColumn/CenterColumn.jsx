import React from 'react';
import styles from './CenterColumn.css';
import Docs from '../Docs/Docs.jsx';

let { PropTypes } = React;

export default class CenterColumn extends React.Component {

  static defaultProps = {
    schema: []
  };

  static propTypes = {
    schema: PropTypes.array.isRequired
  };

  render() {
    return (
      <div className={styles.column}>
        <Docs schema={this.props.schema} />
      </div>
    );
  }
}
