import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Template} from 'meteor/templating';
import {Blaze} from 'meteor/blaze';

class Accounts extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    //render the blaze accounts form
    //find the div we just rendered in the render
    //method and place the accounts form inside our div
    this.view = Blaze.render(Template.loginButtons, ReactDOM.findDOMNode(this.container));
  }
  componentWillUnmount() {
    //Go find the forms we created and destroy them
    //We need to clean those up ourselves
    Blaze.remove(this.view);
  }
  render() {
    return <div
      ref={(container) => {
      this.container = container;
    }}></div>
  }
}

export default Accounts
