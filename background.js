chrome.runtime.onInstalled.addListener(async () => {
    let url = chrome.runtime.getURL("youtube.com");

    let tab = await chrome.tabs.create({url});
    console.log(`Created tab ${tab.id}.`);
})