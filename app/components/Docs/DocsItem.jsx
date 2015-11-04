import React from 'react';
import styles from './Docs.css';
import template from 'lodash.template';

const { Component, PropTypes } = React;

export default class DocsItem extends Component {

  static propTypes = {
    item: PropTypes.object.isRequired,
    apiKey: PropTypes.string.isRequired,
    vehicleId: PropTypes.string.isRequired
  };

  getRequestParams = (requestParams) => {
    return (
      requestParams.map((item, i) => {
        return (
          <tr
            className={styles.tableRow}
            key={i}
          >
            <td className={styles.tableData}>{item.field}</td>
            <td className={styles.tableData}>{item.type}</td>
            <td className={styles.tableData}>{item.description}</td>
          </tr>
        );
      }, this)
    );
  }

  getResponseParams = (responseParams) => {
    return (
      responseParams.map((item, i) => {
        return (
          <tr
            className={styles.tableRow}
            key={i}
          >
            <td className={styles.tableData}>{item.field}</td>
            <td className={styles.tableData}>{item.type}</td>
            <td className={styles.tableData}>{item.description}</td>
          </tr>
        );
      }, this)
    );
  }

  getExample = (example, vehicleId, apiKey) => {
    const compiledExample = template(example, {interpolate: /{{([\s\S]+?)}}/g});

    return (
      compiledExample({
        'id': vehicleId,
        'apiKey': apiKey
      })
    );
  }

  render() {
    const item = this.props.item;
    const id = item.title.replace(/\s+/g, '-').toLowerCase();
    const requestParams = this.getRequestParams(item.request);
    const responseParams = this.getResponseParams(item.response);
    const example = this.getExample(  item.example,
                                    this.props.vehicleId,
                                    this.props.apiKey);

    return (
      <div
        className={styles.docItem}
        id={id}
      >
        <div className={styles.content}>
          <h2 className={styles.title}>{item.title}</h2>
          <h3 className={styles.header}>request</h3>
          <div className={styles.panel}>
            <table className={styles.table}>
              <tbody>
                <tr className={styles.tableRow}>
                  <td className={styles.tableData}>
                    <span className={styles.method}>
                      {item.method}
                    </span>
                    {item.url}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className={styles.header}>request parameters</h3>
          <div className={styles.panel}>
            <table className={styles.table}>
              <thead>
                <tr className={styles.tableRow}>
                  <th className={styles.tableHeader}>field</th>
                  <th className={styles.tableHeader}>type</th>
                  <th className={styles.tableHeader}>description</th>
                </tr>
              </thead>
              <tbody>
                {requestParams}
              </tbody>
            </table>
          </div>
          <h3 className={styles.header}>response parameters</h3>
          <div className={styles.panel}>
            <table className={styles.table}>
              <thead>
                <tr className={styles.tableRow}>
                  <th className={styles.tableHeader}>field</th>
                  <th className={styles.tableHeader}>type</th>
                  <th className={styles.tableHeader}>description</th>
                </tr>
              </thead>
              <tbody>
                {responseParams}
              </tbody>
            </table>
          </div>
          <h3 className={styles.header}>example</h3>
          <div className={styles.panel}>
            <table className={styles.table}>
              <tbody>
                <tr className={styles.tableRow}>
                  <td className={styles.tableData}>{example}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={styles.example}>
          <h3 className={styles.exampleHeader}>example resonse</h3>
          <code className={styles.code}>
            // this would be a great place to show an
            example of a response object.
          </code>
        </div>
      </div>
    );
  }
}
