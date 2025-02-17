chrome.action.onClicked.addListener(function() {
    console.log('Extension clicked!');

    chrome.browsingData.remove({}, {
        downloads: true,
        history: true,
        passwords: true,
        localStorage: true,
        cache: true,
        indexedDB: true,
        cookies: true
    }, function() {
        console.log("All browsing data has been cleared.");

        chrome.tabs.query({}, function(tabs) { tabs.forEach(tab => chrome.tabs.remove(tab.id)); });

        chrome.tabs.create({}, function(tab) { console.log("New tab created:", tab); });
    });
});
