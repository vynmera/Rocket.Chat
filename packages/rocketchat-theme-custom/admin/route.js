FlowRouter.route('/admin/theme-custom', {
	name: 'theme-custom',
	subscriptions(/*params, queryParams*/) {
		this.register('ThemeCustom', Meteor.subscribe('ThemeCustom'));
	},
	action(/*params*/) {
		BlazeLayout.render('main', {center: 'adminThemeCustom'});
	}
});