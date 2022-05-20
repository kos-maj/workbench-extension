let btn = document.getElementById("mainBtn");

btn.addEventListener("click", async () => {
    const url = "https://youtube.com/";
    let msg = "success";

    try {
        // Get currently active tab URL
        let tabQuery = await chrome.tabs.query({active: true, currentWindow: true});
        const exURL = tabQuery[0].url;
        
        // Create new tab
        let tab = await chrome.tabs.create({url});
    } catch (err) { msg = err };
    

    // Passing msg to background service
    chrome.runtime.sendMessage({"errorMsg": msg, "exURL": exURL});

})
