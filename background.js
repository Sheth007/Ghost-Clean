browser.action.onClicked.addListener(function() {
  console.log('Extension clicked!');

  browser.browsingData.remove({}, {
    downloads: true,
    history: true,
    passwords: true,
    localStorage: true,
    cache: true,
    indexedDB: true,
    cookies: true
  }).then(function() {
    console.log("All browsing data has been cleared.");

    browser.tabs.query({}).then(function(tabs) {
      tabs.forEach(tab => browser.tabs.remove(tab.id));
    });

    browser.tabs.create({}).then(function(tab) {
      console.log("New tab created:", tab);
    });
  }).catch(function(error) {
    console.error("Error clearing browsing data:", error);
  });
});
