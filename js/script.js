function backTimer(min) {
	setTimeout(function() {
		window.location.href = 'menu.htm?param=' + min;
	}, min * 1000 * 60);
}
function movePage(url, min) {
	window.location.href = url + '?param=' + min;
}
