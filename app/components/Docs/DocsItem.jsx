import React from 'react';
import Template from 'lodash.template';

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

function getExample(example, vehicleId, apiKey) {
  let compiledExample = Template(example, {interpolate: /{{([\s\S]+?)}}/g});

  return (
    compiledExample({
      'id': vehicleId,
      'apiKey': apiKey
    })
  );
}

export default class DocsItem extends Component {

  static propTypes = {
    item: PropTypes.object.isRequired,
    apiKey: PropTypes.string.isRequired,
    vehicleId: PropTypes.string.isRequired
  };

  render() {
    let item = this.props.item;
    let id = item.title.replace(/\s+/g, '-').toLowerCase();
    let requestParams = getRequestParams(item);
    let responseParams = getResponseParams(item);
    let example = getExample( item.example,
                              this.props.vehicleId,
                              this.props.apiKey );

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
              <td>{example}</td>
            </tr>
          </tbody>
        </table>
        <div>
          <h3>example resonse</h3>
            <code>
              // this would be a great place to show an
              example of a response object.
            </code>
        </div>
      </div>
    );
  }
}
