module.exports = function (env) {
	return {
		clientAllowedKeys: [
			'FIREBASE_API_KEY',
			'FIREBASE_DOMAIN',
			'FIREBASE_URL',
			'FIREBASE_ID',
			'FIREBASE_STORAGE_BUCKET',
			'FIREBASE_SENDER_ID'],

		failOnMissingKey: false,
	};
};