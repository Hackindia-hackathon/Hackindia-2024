App.info({
	name: 'Slurrp',
	version: '0.0.1',
	description: 'Bangalore\'s Beer Biryani Burger recommender'
});

App.accessRule("*");

App.configurePlugin('com.phonegap.plugins.facebookconnect', {
	APP_ID: "1462398360747963",
	APP_NAME: "Slurrp"
});