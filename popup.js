let btn = document.getElementById("mainBtn");

btn.addEventListener("click", async () => {
    const url = "https://youtube.com/";

    try {
        // Send currently active tab to background service
        let tabQuery = await chrome.tabs.query({active: true, currentWindow: true});
        chrome.runtime.sendMessage(tabQuery[0].url)
    } catch (err) { 
        chrome.runtime.sendMessage(err);
    }
   
});
