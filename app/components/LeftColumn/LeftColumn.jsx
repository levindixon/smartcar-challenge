import React from 'react';
import styles from './LeftColumn.css';
import TableOfContents from '../TableOfContents/TableOfContents.jsx';

let { PropTypes } = React;

export default class LeftColumn extends React.Component {

  static defaultProps = {
    schema: []
  };

  static propTypes = {
    schema: PropTypes.array.isRequired
  };

  render() {
    return (
      <div className={styles.column}>
        <TableOfContents schema={this.props.schema} />
      </div>
    );
  }
}
