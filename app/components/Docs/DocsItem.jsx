import React from 'react';

let { Component, PropTypes } = React;

function getRequestParams(item) {
  return (
    item.request.map((item) => {
      return (
        <tr>
          <td>{item.field}</td>
          <td>{item.type}</td>
          <td>{item.description}</td>
        </tr>
      );
    }, this)
  );
}

function getResponseParams(item) {
  return (
    item.response.map((item) => {
      return (
        <tr>
          <td>{item.field}</td>
          <td>{item.type}</td>
          <td>{item.description}</td>
        </tr>
      );
    }, this)
  );
}

export default class DocsItem extends Component {

  static propTypes = {
    item: PropTypes.object.isRequired
  };

  render() {
    let item = this.props.item;
    let id = item.title.replace(/\s+/g, '-').toLowerCase();
    let requestParams = getRequestParams(item);
    let responseParams = getResponseParams(item);

    return (
      <div id={id} key={'docs-item-' + id}>
        <h2>{item.title}</h2>
        <h3>request</h3>
        <table>
          <tbody>
            <tr>
              <td>{item.method}</td>
              <td>{item.url}</td>
            </tr>
          </tbody>
        </table>
        <h3>request parameters</h3>
        <table>
          <thead>
            <tr>
              <td>field</td>
              <td>type</td>
              <td>description</td>
            </tr>
          </thead>
          <tbody>
            {requestParams}
          </tbody>
        </table>
        <h3>response parameters</h3>
        <table>
          <thead>
            <tr>
              <td>field</td>
              <td>type</td>
              <td>description</td>
            </tr>
          </thead>
          <tbody>
            {responseParams}
          </tbody>
        </table>
        <h3>example</h3>
        <table>
          <tbody>
            <tr>
              <td>{item.example}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
