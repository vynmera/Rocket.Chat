RocketChat.settings.addGroup('RetentionPolicy', function() {

	this.add('RetentionPolicy_Enabled', false, {
		type: 'boolean',
		public: true,
		i18nLabel: 'RetentionPolicy_Enabled',
		alert: 'Watch out! Tweaking these settings without utmost care can destroy all message history. Please read the documentation before turning the feature on at rocket.chat/docs/administrator-guides/retention-policies/'
	});

	this.add('RetentionPolicy_AppliesToChannels', true, {
		type: 'boolean',
		public: true,
		i18nLabel: 'RetentionPolicy_AppliesToChannels'
	});
	this.add('RetentionPolicy_MaxAge_Channels', 2592000, {
		type: 'int',
		public: true,
		i18nLabel: 'RetentionPolicy_MaxAge_Channels',
		i18nDescription: 'RetentionPolicy_MaxAge_Description'
	});

	this.add('RetentionPolicy_AppliesToGroups', true, {
		type: 'boolean',
		public: true,
		i18nLabel: 'RetentionPolicy_AppliesToGroups'
	});
	this.add('RetentionPolicy_MaxAge_Groups', 2592000, {
		type: 'int',
		public: true,
		i18nLabel: 'RetentionPolicy_MaxAge_Groups',
		i18nDescription: 'RetentionPolicy_MaxAge_Description'
	});

	this.add('RetentionPolicy_AppliesToDMs', true, {
		type: 'boolean',
		public: true,
		i18nLabel: 'RetentionPolicy_AppliesToDMs'
	});
	this.add('RetentionPolicy_MaxAge_DMs', 2592000, {
		type: 'int',
		public: true,
		i18nLabel: 'RetentionPolicy_MaxAge_DMs',
		i18nDescription: 'RetentionPolicy_MaxAge_Description'
	});

	this.add('RetentionPolicy_ExcludePinned', false, {
		type: 'boolean',
		public: true,
		i18nLabel: 'RetentionPolicy_ExcludePinned'
	});
	this.add('RetentionPolicy_FilesOnly', false, {
		type: 'boolean',
		public: true,
		i18nLabel: 'RetentionPolicy_FilesOnly',
		i18nDescription: 'RetentionPolicy_FilesOnly_Description'
	});

	this.add('RetentionPolicy_Precision', '0', {
		type: 'select',
		values: [
			{
				key: '0',
				i18nLabel: 'every_second'
			}, {
				key: '1',
				i18nLabel: 'every_10_seconds'
			}, {
				key: '2',
				i18nLabel: 'every_minute'
			}, {
				key: '3',
				i18nLabel: 'every_5_minutes'
			}, {
				key: '4',
				i18nLabel: 'every_30_minutes'
			}, {
				key: '5',
				i18nLabel: 'every_hour'
			}, {
				key: '6',
				i18nLabel: 'every_six_hours'
			}, {
				key: '7',
				i18nLabel: 'every_day'
			}
		],
		public: true,
		i18nLabel: 'RetentionPolicy_Precision',
		i18nDescription: 'RetentionPolicy_Precision_Description'
	});
});
