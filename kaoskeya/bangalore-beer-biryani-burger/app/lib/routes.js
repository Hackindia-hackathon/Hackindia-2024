Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  trackPageView: true
});

Router.route('admin', {
  name: 'admin',
  controller: 'AdminController',
  action: 'action',
  where: 'client'
});

Router.route('/:category?', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});
