HomeController = RouteController.extend({
  layoutTemplate: 'MasterLayout',

  subscriptions: function() {
  },

  action: function() {
    this.render('Home');
  },

  data: function() {
  	return { hash: this.params.query.item }
  }
});
