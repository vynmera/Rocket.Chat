Package.describe({
	name: 'rocketchat:theme-custom',
	version: '0.0.1',
	summary: 'Custom theme manager',
	git: ''
});

Package.onUse(function(api) {
	api.use([
		'ecmascript',
		'rocketchat:theme',
		'rocketchat:file',
		'rocketchat:lib',
		'templating',
		'webapp'
	]);

	api.use('kadira:flow-router', 'client');

	api.addFiles('server/models/CustomThemes.js', 'server');
	api.addFiles('server/publications/customThemes.js', 'server');

	api.addFiles([
		'admin/startup.js',
		'admin/adminThemeCustom.html',
		'admin/adminThemeCustom.js',
		'admin/route.js'
	], 'client');

	/*
	api.addFiles('server/startup/emoji-custom.js', 'server');
	api.addFiles('server/startup/settings.js', 'server');

	api.addFiles('server/models/EmojiCustom.js', 'server');
	api.addFiles('server/publications/fullEmojiData.js', 'server');

	api.addFiles([
		'server/methods/listEmojiCustom.js',
		'server/methods/deleteEmojiCustom.js',
		'server/methods/insertOrUpdateEmoji.js',
		'server/methods/uploadEmojiCustom.js'
	], 'server');

	api.addFiles('assets/stylesheets/emojiCustomAdmin.css', 'client');

	api.addFiles([
		'admin/startup.js',
		'admin/adminEmoji.html',
		'admin/adminEmoji.js',
		'admin/adminEmojiEdit.html',
		'admin/adminEmojiInfo.html',
		'admin/emojiPreview.html',
		'admin/emojiEdit.html',
		'admin/emojiEdit.js',
		'admin/emojiInfo.html',
		'admin/emojiInfo.js',
		'admin/route.js'
	], 'client');

	api.addFiles([
		'client/lib/emojiCustom.js',
		'client/models/EmojiCustom.js',
		'client/notifications/updateEmojiCustom.js',
		'client/notifications/deleteEmojiCustom.js'
	], 'client');
	*/

	/*
	api.use('rocketchat:lib');
	api.use('rocketchat:logger');
	api.use('rocketchat:assets');
	api.use('ecmascript');
	api.use('less');
	api.use('webapp');
	api.use('webapp-hashing');
	api.use('templating', 'client');

	// Compiled stylesheets
	api.addFiles('client/main.css', 'client');

	// Server side files
	api.addFiles('server/server.js', 'server');
	api.addFiles('server/variables.js', 'server');

	// Colorpicker
	api.addFiles('client/vendor/jscolor.js', 'client');

	// Photoswipe
	api.addFiles('client/vendor/photoswipe.css', 'client');

	api.addAssets('client/imports/general/variables.css', 'server');
	// Fontello
	api.addFiles('client/vendor/fontello/css/fontello.css', 'client');
	api.addAssets('client/vendor/fontello/font/fontello.eot', 'client');
	api.addAssets('client/vendor/fontello/font/fontello.svg', 'client');
	api.addAssets('client/vendor/fontello/font/fontello.ttf', 'client');
	api.addAssets('client/vendor/fontello/font/fontello.woff', 'client');
	api.addAssets('client/vendor/fontello/font/fontello.woff2', 'client');

	// Run-time stylesheets
	api.addAssets('server/colors.less', 'server');
	api.addAssets('server/colors-dark.less', 'server');
	*/
});
