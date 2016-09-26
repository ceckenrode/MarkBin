import React, { Component } from 'react';
import { markdown } from 'markdown';

class BinsViewer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (!this.props.bin) {
      return (
        <div className="col-xs-4">
          <h5>Output</h5>
          <div></div>
        </div>
      )
    } else {
      const rawHTML = markdown.toHTML(this.props.bin.content);
      return (
        <div className="col-xs-4">
          <h5>Output</h5>
          <div dangerouslySetInnerHTML={{ __html: rawHTML}}></div>
        </div>
      )
    }
  }
}

export default BinsViewer;
