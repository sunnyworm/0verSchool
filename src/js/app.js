var App = (_ => {
	
	function _init() {
		_setLanguage();
	}
	
	function _setLanguage() {
		!localStorage.language && (localStorage.language = 'ch');
		const lng = localStorage.language;
		$.i18n.init({
			lng, 
			debug: true
		}, function() {
			$(document).i18n();
		});
	}

	function changeLanguage(lng) {
		lng != 'ch' && lng != 'en' && (lng = 'ch');
		localStorage.language = lng;
		$.i18n.setLng(lng, function(err, t) { 
			$(document).i18n();
		});
	}

	function checkLogin(callback) {
		callback();
	}

	_init();

	return {
		changeLanguage, 
		checkLogin
	}
})();
