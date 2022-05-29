
console.log("[+] service running...");
let g_url;
let g_pressed = false;

const injectedScript = function (prev_url) {
    if (window.location.href.includes('youtube.com')) {
        document.querySelector('input').setAttribute('value', prev_url);

        // TO DO: click button after tab loads? 
        // const btn = document.getElementById('button');
    }
};

chrome.runtime.onMessage.addListener((previousURL) => {
    // Get url, set pressed to true, and create a new tab
    g_url     = previousURL;
    g_pressed = true;
    const url = 'https://youtube.com';

    chrome.tabs.create({ url });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    // Only execute script if updated tab is a result of the extension button press
    if(tab.status === 'complete' && g_pressed) {
        g_pressed = false;
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            function: injectedScript,
            args: [g_url]
        });
    }
});
