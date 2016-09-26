import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown';
import '../../../node_modules/react-spinkit/css/wordpress.css';
import Spinner from 'react-spinkit';

class BinsEditor extends Component {
  render() {
    if (!this.props.bin) {
      return (
        <div className="col-xs-8 text-center">
          <Spinner spinnerName="wordpress" />
        </div>
      )
    } else {
      return (
        <div className="col-xs-8">
          <h5>Input</h5>
          <CodeMirror
            onChange={this.handleEditorChange.bind(this)}
            value={this.props.bin.content}
            options={{mode: 'markdown', lineNumbers: true}} />
        </div>
      );
    }
  }
  handleEditorChange(content) {
    Meteor.call('bins.update', this.props.bin, content);
  }
}

export default BinsEditor;
