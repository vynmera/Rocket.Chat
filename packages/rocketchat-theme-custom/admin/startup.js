RocketChat.AdminBox.addOption({
	href: 'theme-custom',
	i18nLabel: 'Custom_Themes',
	icon: 'star',
	permissionGranted() {
		return RocketChat.authz.hasAtLeastOnePermission(['view-privileged-setting']);
	}
});