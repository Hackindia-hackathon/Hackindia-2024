Meteor.users.helpers({
	getName: function() {
		return this.profile.name;
	}
});