Item = new Mongo.Collection('item');

Item.attachSchema(new SimpleSchema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  photos: {
    type: [String],
    optional: true
  },
  votes: {
    type: Number,
    defaultValue: 0
  },
  voters: {
    type: [String],
    defaultValue: []
  },
  type: {
    type: String,
    allowedValues: [ "Beer", "Biryani", "Burger" ]
  },
  approved: {
    type: Boolean
  },
  restaurant_id: {
    label: "Restaurant",
    type: String
  },
  restaurant: {
    type: Object,
    optional: true
  },
  "restaurant.name": {
    type: String
  },
  "restaurant.location": {
    type: Object
  },
  "restaurant.location.coordinates" : {
    type: [Number],
    decimal: true
  },
  "restaurant.location.type" : {
    type: String,
    defaultValue: "Point"
  },
  addedBy: {
    type: Object
  },
  "addedBy.user": {
    type: String,
    autoValue: function() {
      return this.userId;
    }
  },
  "addedBy.level": {
    type: String,
    autoValue: function() {
      if( Roles.userIsInRole(this.userId, [ "admin" ]) ) {
        return "admin";
      } else {
        return "user";
      }
    }
  },
}));

Item.helpers({
  getRestaurant: function() {
    return this.restaurant.name;
  }
});

Item.before.insert(function(userId, doc) {
  if( doc.hasOwnProperty("restaurant_id") ) {
    var restaurant = Restaurant.findOne({ _id: doc.restaurant_id });
    doc.restaurant = {};
    doc.restaurant.name = restaurant.name;
    doc.restaurant.location = restaurant.location;
  }
});


if (Meteor.isServer) {
  Item.allow({
    insert: function (userId, doc) {
      if( Roles.userIsInRole(userId, [ "admin" ]) ) {
        return true;
      } else if( userId != null ) {
        doc.approved = false;
        return true;
      } else {
        return false;
      }
    },

    update: function (userId, doc, fieldNames, modifier) {
      return Roles.userIsInRole(userId, [ "admin" ]);
    },

    remove: function (userId, doc) {
      return Roles.userIsInRole(userId, [ "admin" ]);
    }
  });

  Item.deny({
    insert: function (userId, doc) {
      return userId == null;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return userId == null;
    },

    remove: function (userId, doc) {
      return userId == null;
    }
  });
}
