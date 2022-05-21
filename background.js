
console.log("[+] service running...");

const injectedScript = url => {
    if (window.location.href.includes('youtube.com')) {
        const extractedURL = url;
        document.querySelector('input').value = extractedURL;
    }
}

async function createNewTab(url) {
    let tab = await chrome.tabs.create({ url });
    return tab;
}

chrome.runtime.onMessage.addListener( (request) => {
    const url   = "https://youtube.com";
    const exurl = request;
    console.log(exurl);

    createNewTab(url).then(tab => {
        if(typeof tab !== 'undefined') {
            console.log(`[+] Injecting script into tabid = '${tab.id}'\nexurl = ${exurl}...`);
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: injectedScript,
                args: [exurl]
            })
        } else {
            console.log("Error: could not create new tab - chrome.tabs.create() returned undefined.");
        }
    })

})
