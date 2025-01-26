Meteor.startup(function () {

	// FB user IDs for admin users.
	var admin_ids = Meteor.users.find({ $or: [ 
			{ "services.facebook.id": "10206886580021072" }, // Keya
			{ "services.facebook.id": "10152881881193414" }  // Rahul
		] }).map(function(user){
		return user._id;
	});

	Roles.addUsersToRoles(admin_ids, ["admin"]);

	// On user creation, fetch friends and update
	Accounts.onCreateUser(function(options, user) {
		console.log( options, user );
		if (options.profile)
			user.profile = options.profile;
		HTTP.get("https://graph.facebook.com/me/friends?access_token=" + user.services.facebook.accessToken, function(error, result) {
			friends = _.map( result.data.data, function(friend) {
				return friend.id;
			});
			Meteor.users.update({ _id: user._id }, { $set: { "profile.friends": friends, "profile.licks": [] } });
			Meteor.users.update({ _id: friends }, { $push: { "profile.friends": user.services.facebook.id } });
			// TODO: Paginate if required.
		});
		return user;
	});

	// There could be a lot of querying with this field
	Meteor.users._ensureIndex({ "services.facebook.id": 1 });

});
