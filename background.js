
console.log("[+] service running...");

// Listener for message sent from content script
chrome.runtime.onMessage.addListener( (request) => {
    console.log(request);
})
