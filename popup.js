let btn = document.getElementById("mainBtn");

btn.addEventListener("click", async () => {
    const url = "https://youtube.com/";

    try {
        // Get currently active tab URL
        let tabQuery = await chrome.tabs.query({active: true, currentWindow: true});
        const exURL = tabQuery[0].url;
        
        // Create new tab and send information to background service
        let tab = await chrome.tabs.create({url, active: false}, tab => {
            chrome.runtime.sendMessage({ exURL: exURL, tab: tab })
        });
    } catch (err) { msg = err };
   
})
