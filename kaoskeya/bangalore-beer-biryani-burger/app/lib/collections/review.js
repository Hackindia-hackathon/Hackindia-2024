Review = new Mongo.Collection('review');

Review.attachSchema(new SimpleSchema({
  review: {
    type: String,
    max: 160
  },
  item: {
    type: String
  },
  user: {
    type: Object,
    optional: true
  },
  "user.id": {
    type: String
  },
  "user.fb": {
    type: String
  },
  "user.name": {
    type: String
  },
  timestamp: {
    type: Number,
    defaultValue: moment().unix()
  }
}));


if (Meteor.isServer) {
  Review.allow({
    insert: function (userId, doc) {
      return userId != null;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return false;
    },

    remove: function (userId, doc) {
      return false;
    }
  });

  Review.deny({
    insert: function (userId, doc) {
      return userId == null;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });
}
