let btn = document.getElementById("mainBtn");

btn.addEventListener("click", async () => {
    const url = "https://youtube.com/";
    
    let tab = await chrome.tabs.create({url});
    console.log(`Created tab ${tab.id}.`);
})