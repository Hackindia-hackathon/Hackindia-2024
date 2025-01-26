/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */

Meteor.publish("restaurants", function() {
	return Restaurant.find()
});

// Meteor.publishComposite("items", function(filter) {
// 	return {
// 		find: function() {
// 			filter.approved = true;
// 			return Item.find( filter, { fields: { voters: 0, addedBy: 0 } } );
// 		},
// 		children: [
// 			{
// 				find: function( item ) {

// 				}
// 			}
// 		]
// 	}
// });

Meteor.publish("items", function( filter ) {
	if( filter.type == "profile" ) {
		filter = {};
		filter._id = { $in: Meteor.users.findOne({ _id: this.userId }).profile.licks };
	} else {
		filter.approved = true;
	}
	return Item.find( filter, { fields: { voters: 0, addedBy: 0 } } );
});

Meteor.publishComposite("item", function(id) {
	return {
		find: function() {
			return Item.find({ _id: id });
		},
		children: [
			{
				find: function( item ) {
					return Review.find({ item: item._id });
				}
			}
		]
	}
});