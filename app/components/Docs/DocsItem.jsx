import React from 'react';
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
          <tr key={i}>
            <td>{item.field}</td>
            <td>{item.type}</td>
            <td>{item.description}</td>
          </tr>
        );
      }, this)
    );
  }

  getResponseParams = (responseParams) => {
    return (
      responseParams.map((item, i) => {
        return (
          <tr key={i}>
            <td>{item.field}</td>
            <td>{item.type}</td>
            <td>{item.description}</td>
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
      <div id={id}>
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
