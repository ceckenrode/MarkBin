import React, {Component} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import {Bins} from '../../../imports/collections/bins';
import { Link } from 'react-router';

class BinsList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul className="list-group">
        {this.renderList()}
      </ul>
    )
  }
  renderList() {
    return this.props.bins.map(bin => {
      return (
        <Link
          to={`/bins/${bin._id}`}
          key={bin._id}
          className="list-group-item">
          Bin {bin._id}
          <span
            className="pull-right">
            <button
              className="btn btn-danger"
              // this way on event handling lets us pass a specific parameter
              // while still using a callback so its not isntantly ran
              onClick={() => this.onBinRemove(bin)}>
              Remove
              </button>
          </span>
        </Link>
      )
    })
  }
  onBinRemove(bin) {
    //the second argument is the first argument in the meteor method
    Meteor.call('bins.remove', bin);
  }
}

export default createContainer(() => {
  Meteor.subscribe('bins');
  return {bins: Bins.find({}).fetch()}
}, BinsList)
