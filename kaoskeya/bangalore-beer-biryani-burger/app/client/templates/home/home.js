/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
	'click #login': function() {
		Meteor.loginWithFacebook({ loginStyle: "popup", requestPermissions: [ "public_profile", "email", "user_friends" ] });
	},
	'click #logout': function() {
		Meteor.logout();
	},
	'click .lick': function(e) {
		var self = this;
		if( Meteor.userId() ) {
			Meteor.users.update({ _id: Meteor.userId() }, { $push: { "profile.licks": self._id } });
		} else {
			// if(Meteor.isCordova) {
			// 	facebookConnectPlugin.login([ "public_profile", "email", "user_friends" ],
			// 		function() {
			// 			if( _.indexOf( Meteor.user().profile.licks, self._id ) == -1 ) {
			// 				Meteor.users.update({ _id: Meteor.userId() }, { $push: { "profile.licks": self._id } });
			// 			} else {
			// 				console.log("Already licked");
			// 			}
			// 		},
			// 		function() {
			// 			console.log('Error while logging in.');
			// 		}
			// 	);
			// } else {
				Meteor.loginWithFacebook({ loginStyle: "popup", requestPermissions: [ "public_profile", "email", "user_friends" ] }, function(error){
					if( !error ) {
						if( _.indexOf( Meteor.user().profile.licks, self._id ) == -1 ) {
							Meteor.users.update({ _id: Meteor.userId() }, { $push: { "profile.licks": self._id } });
						} else {
							console.log("Already licked");
						}
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
			Meteor.loginWithFacebook({ loginStyle: "popup", requestPermissions: [ "public_profile", "email", "user_friends" ] });
		}
	}
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
	items: function() {
		if( Session.equals("category", "profile") ) {
			return Item.find({ _id: { $in: Meteor.user().profile.licks } }, { sort: { votes: -1 } }).fetch();
		} else {
			return Item.find({}, { sort: { votes: -1 } }).fetch();
		}
	},
	licked: function() {
		if( Meteor.user() )
			return _.indexOf( Meteor.user().profile.licks, this._id ) != -1;
		else
			return false;
	},
	getImage: function() {
		return this.photos[0];
	}
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.created = function () {
	var instance = this;
	Session.set("category", (Session.get("category") == undefined)?"Beer":Session.get("category") );
};

Template.Home.rendered = function () {
	var instance = this;

	instance.autorun(function() {
		instance.subscribe("items", { type: Session.get("category") }, function(){
		    if( instance.data.hash ) {
		    	Meteor.setTimeout(function(){
				    $( "#item_" + instance.data.hash ).trigger("click");
		    	}, 100);
		    }
		});
	});

	$('#xitemModal').on('show.bs.modal', function (e) {
		$('.xtabs').addClass('g-hidden');
		$('.floatingxbutton-wrapper').addClass('g-show');
		Session.set( "item", $(e.relatedTarget).data("item-id") );
		instance.openItem = Meteor.subscribe("item", $(e.relatedTarget).data("item-id"));
	});
	$('#xitemModal').on('hide.bs.modal', function (e) {
		$('.floatingxbutton-wrapper').removeClass('g-show');
		$('.xtabs').removeClass('g-hidden');
		Session.set( "item" );
		instance.openItem.stop();
	});

};

Template.Home.destroyed = function () {
};
