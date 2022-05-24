
console.log("[+] service running...");

const injectedScript = url => {
    if (window.location.href.includes('youtube.com')) {
        document.querySelector('input').value = url;
        // TO DO: click button after tab loads? 
        // const btn = document.getElementById('button');
    }
}

chrome.runtime.onMessage.addListener(async (previousURL) => {
    const url   = 'https://youtube.com';
    let tab = await chrome.tabs.create({ url });

    if(typeof tab  !== 'undefined') {
        console.log(`[+] Injecting script into tabid = '${tab.id}'\nprev_url = '${previousURL}`);
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: injectedScript,
            args: [previousURL]
        });
    } else {
        console.log("Error: could not create new tab - chrome.tabs.create() returned undefined.");
    }
    // createNewTab(url).then(tab => {
        // if(typeof tab !== 'undefined') {
            // console.log(`[+] Injecting script into tabid = '${tab.id}'\nexurl = ${previousURL}...`);
            // chrome.scripting.executeScript({
                // target: { tabId: tab.id },
                // function: injectedScript,
                // args: [previousURL]
            // })
        // } else {
            // console.log("Error: could not create new tab - chrome.tabs.create() returned undefined.");
        // }
    // })

})
