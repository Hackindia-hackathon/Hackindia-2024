Template.MasterLayout.helpers({
});

Template.MasterLayout.events({
});

Template.xtabs.events({
	'click .xtab': function(e, instance) {
		var elem = e.currentTarget;
		if( $(elem).data("show-id") == "profile" && Meteor.user() == undefined ) {

			// if(Meteor.isCordova) {
			// 	facebookConnectPlugin.login([ "public_profile", "email", "user_friends" ],
			// 		function() {
			// 			Session.set( "category", $(elem).data("show-id") );
			// 			$(".g-sel").removeClass("g-sel");
			// 			$(elem).addClass("g-sel");
			// 			Router.go("home", { category: $(elem).data("show-id") });
			// 		},
			// 		function() {
			// 			console.log('Error while logging in.');
			// 		}
			// 	);
			// } else {
				Meteor.loginWithFacebook({ loginStyle: "popup", requestPermissions: [ "public_profile", "email", "user_friends" ] }, function(error){
					if( !error ) {
						Session.set( "category", $(elem).data("show-id") );
						$(".g-sel").removeClass("g-sel");
						$(elem).addClass("g-sel");
						Router.go("home", { category: $(elem).data("show-id") });
						$(window).scrollTop(0);
					}
				});
			// }
		} else {
			Session.set( "category", $(elem).data("show-id") );
			$(".g-sel").removeClass("g-sel");
			$(elem).addClass("g-sel");
			$(window).scrollTop(0);
		}
	}
});

Template.xmodals.onRendered(function () {
	$('.floatingxbutton').on('click', function (e) {
		$('#xitemModal').modal('hide');
	});
});

Template.xmodals.events({
	'click .lick': function(e) {
		var self = this;
		if( Meteor.userId() ) {
			Meteor.users.update({ _id: Meteor.userId() }, { $push: { "profile.licks": self._id } });
		} else {
			// if(Meteor.isCordova) {
			// 	facebookConnectPlugin.login([ "public_profile", "email", "user_friends" ],
			// 		function() {
			// 			Meteor.setTimeout(function(){
			// 				if( _.indexOf( Meteor.user().profile.licks, self._id ) == -1 ) {
			// 					Meteor.users.update({ _id: Meteor.userId() }, { $push: { "profile.licks": self._id } });
			// 				} else {
			// 					console.log("Already licked");
			// 				}
			// 			}, 300);
			// 		},
			// 		function() {
			// 			console.log('Error while logging in.');
			// 		}
			// 	);
			// } else {
				Meteor.loginWithFacebook({ loginStyle: "popup", requestPermissions: [ "public_profile", "email", "user_friends" ] }, function(error){
					if( !error ) {
						Meteor.setTimeout(function(){
							if( _.indexOf( Meteor.user().profile.licks, self._id ) == -1 ) {
								Meteor.users.update({ _id: Meteor.userId() }, { $push: { "profile.licks": self._id } });
							} else {
								console.log("Already licked");
							}
						}, 300);
					}
				});
			// }
		}
	},
	'click .unlick': function(e) {
		var self = this;
		if( Meteor.userId() ) {
			Meteor.users.update({ _id: Meteor.userId() }, { $pull: { "profile.licks": self._id } });
		} else {
			// if(Meteor.isCordova) {
			// 	facebookConnectPlugin.login([ "public_profile", "email", "user_friends" ],
			// 		function() {
			// 		},
			// 		function() {
			// 			console.log('Error while logging in.');
			// 		}
			// 	);
			// } else {
				Meteor.loginWithFacebook({ loginStyle: "popup", requestPermissions: [ "public_profile", "email", "user_friends" ] });
			// }
		}
	},
	'click .login': function() {
		// if(Meteor.isCordova) {
		// 	facebookConnectPlugin.login([ "public_profile", "email", "user_friends" ],
		// 		function() {
		// 		},
		// 		function() {
		// 			console.log('Error while logging in.');
		// 		}
		// 	);
		// } else {
			Meteor.loginWithFacebook({ loginStyle: "popup", requestPermissions: [ "public_profile", "email", "user_friends" ] });
		// }
	}
});

Template.xmodals.helpers({
	item: function() {
		return Item.findOne({ _id: Session.get("item") });
	},
	licked: function() {
		if( Meteor.user() )
			return _.indexOf( Meteor.user().profile.licks, this._id ) != -1;
		else
			return false;
	},
	getImage: function() {
		return this.photos[0];
	},
	reviews: function() {
		return Review.find({ item: Session.get("item") }, { order: { timestamp: -1 } });
	},
	friends: function() {
		return _.intersection( this.voters, Meteor.user().profile.friends );
	}
})