function shared_createCookie (key, value, date) {
	var expiration = new Date(date).toUTCString();
	var cookie = encodeURIComponent(key) + "=" + encodeURIComponent(value) + ";expires=" + expiration + ";";
	document.cookie = cookie;
}

function shared_readCookie (name) {
	var key = name + "=";
	var cookies = document.cookie.split(";");
	for (var i = 0; i < cookies.length; i++) {
		var cookie = cookies[i];
		while (cookie.charAt(0) === " ") {
			cookie = cookie.substring(1, cookie.length);
		}

		if (cookie.indexOf(key) === 0) {
			return cookie.substring(key.length, cookie.length);
		}
	}
}

function shared_removeCookie (key) {
	shared_createCookie(key, "", -1);
}