// Called when user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
	// opens email window with page title as subject and url in body
	chrome.tabs.executeScript({
		file: 'email.js'
		});
});

