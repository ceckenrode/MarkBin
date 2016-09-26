import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

//we use regular function because inside a meteor method,
//we need the this context of the meteor method
Meteor.methods({
  'bins.insert': function() {
    return Bins.insert({
      createdAt: new Date(),
      content: '',
      sharedWith: [],
      ownerId: this.userId
    });
  },
  'bins.remove': function(bin) {
    return Bins.remove(bin);
  },
  'bins.update': function(bin, content) {
    return Bins.update(bin._id, { $set: { content } });
  }
})
export const Bins = new Mongo.Collection('bins');
