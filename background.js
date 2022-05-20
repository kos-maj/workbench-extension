
// Listener for message sent from content script
chrome.runtime.onMessage.addListener( message => {
    console.log(message);
})
