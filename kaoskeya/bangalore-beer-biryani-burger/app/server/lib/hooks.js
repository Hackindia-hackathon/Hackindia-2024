Meteor.users.before.update(function (userId, doc, fieldNames, modifier, options) {
	if( modifier.hasOwnProperty("$push") && modifier.$push.hasOwnProperty("profile.licks") ) {
		var user = Meteor.users.findOne({ _id: userId }, { fields: { "services.facebook.id": 1 } });
		var item_id = modifier.$push["profile.licks"];
		// console.log( userId, user.services.facebook.id, modifier.$push["profile.licks"] );
		Item.update({ _id: item_id }, { $inc: { votes: 1 }, $push: { voters: user.services.facebook.id } });
	} else if( modifier.hasOwnProperty("$pull") && modifier.$pull.hasOwnProperty("profile.licks") ) {
		var user = Meteor.users.findOne({ _id: userId }, { fields: { "services.facebook.id": 1 } });
		var item_id = modifier.$pull["profile.licks"];
		// console.log( userId, user.services.facebook.id, modifier.$pull["profile.licks"] );
		Item.update({ _id: item_id }, { $inc: { votes: -1 }, $pull: { voters: user.services.facebook.id } });
	}
});

Review.before.insert(function(userId, doc) {
	var user = Meteor.users.findOne({ _id: userId });
	doc.user = {};
	doc.user.id = userId;
	doc.user.fb = user.services.facebook.id;
	doc.user.name = user.profile.name;
});