/*****************************************************************************/
/* Admin: Event Handlers */
/*****************************************************************************/
Template.Admin.events({
});

/*****************************************************************************/
/* Admin: Helpers */
/*****************************************************************************/
Template.Admin.helpers({
});

/*****************************************************************************/
/* Admin: Lifecycle Hooks */
/*****************************************************************************/
Template.Admin.created = function () {
};

Template.Admin.rendered = function () {
};

Template.Admin.destroyed = function () {
};


Template.AdminAddItem.created = function () {
	this.subscribe("restaurants");
};

Template.AdminAddItem.rendered = function() {
	AutoForm.hooks({
		AdminAddItemForm: {
			onSuccess: function(operation, result, template) {
				$('#cancelAction').trigger('click');
				toastr.success('Action completed');
			},
			onError: function(operation, error, template) {
				console.log(error)
				toastr.error(error.error)
			}
		}
	});
}

Template.AdminAddItem.helpers({
	restaurantList: function() {
		return Restaurant.find().map(function(r){
			return { label: r.name , value: r._id };
		});
	}
});
