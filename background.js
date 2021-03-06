
console.log("[+] service running...");
let g_url;
let g_pressed = false;

const injectedScript = function (prev_url) {
    const loadNews  = document.querySelectorAll('button').item(0);
    const lucky     = document.querySelectorAll('button').item(1);

    // Focus on input and paste url
    loadNews.click(); 


    /** ((TESTING)) */
    // let current = 0;
    // let len = prev_url.length;

    // const writeURL = () => {
        // if(current < len-1) {
            // userInput.value += prev_url[current];
            // current++;
            // setTimeout(() => {
                // writeURL();
            // }, 30);
        // } else {
            // setTimeout(() => { loadNews.click() }, 250);
        // }
    // }
    // writeURL();
    

    // TODO: wait for RUN NER button to appear, then press it -- easy
};

chrome.runtime.onMessage.addListener((previousURL) => {
    // Get url, set pressed to true, and create a new tab
    g_url     = previousURL;
    g_pressed = true;
    const url = 'https://newskg.wdmuofa.ca/?doc=' + encodeURIComponent(previousURL);

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
