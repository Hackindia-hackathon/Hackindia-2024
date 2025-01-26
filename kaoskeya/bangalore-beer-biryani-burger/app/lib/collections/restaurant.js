Restaurant = new Mongo.Collection('restaurant');

Restaurant.attachSchema(new SimpleSchema({
  name: {
    type: String
  },
  location: {
    type: Object
  },
  "location.coordinates" : {
    type: [Number],
    decimal: true,
    autoform: {
      type: 'map',
      afFieldInput: {
        geolocation: true,
        searchBox: true,
        autolocate: true
      }
    }
  },
  "location.type" : {
    type: String,
    defaultValue: "Point"
  }
}));

if (Meteor.isServer) {
  Restaurant.allow({
    insert: function (userId, doc) {
      return Roles.userIsInRole(userId, [ "admin" ]);
    },

    update: function (userId, doc, fieldNames, modifier) {
      return Roles.userIsInRole(userId, [ "admin" ]);
    },

    remove: function (userId, doc) {
      return Roles.userIsInRole(userId, [ "admin" ]);
    }
  });

  Restaurant.deny({
    insert: function (userId, doc) {
      return !Roles.userIsInRole(userId, [ "admin" ]);
    },

    update: function (userId, doc, fieldNames, modifier) {
      return !Roles.userIsInRole(userId, [ "admin" ]);
    },

    remove: function (userId, doc) {
      return !Roles.userIsInRole(userId, [ "admin" ]);
    }
  });
}
