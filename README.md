## About

This is a simple project consisting of a browser extension that extends some functionality to the NLP workbench.  
The idea is as follows: when a user is on a page, they are able to press a button (within the extension) in order to open the NLP workbench (in a new tab) and instantly have the URL of the previous page pasted in the corresponding input field. 

### Built With  
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Setup/Installation  
1. Clone this repo into a designated folder
2. Open chrome browser
3. In your browser, navigate to your `Extensions` (chrome://extensions/ in chrome, brave://extensions/ in brave, similar for other browsers)
4. Turn on `Developer Mode` (should be near the top right of the brower)
5. A new tab should appear after step 4. consisting of the following options: `Load unpacked`, `Pack extension`, `Update`
6. Click on `Load unpacked`
7. When prompted to select a folder, pick the one in which the repo was cloned (done in step 1.)
8. You should now see the extension titled "Workbench-Demo-Extension" with version `0.x`
9. Enable the extension and pin it, if you wish, for better accessibility

### Usage
When in a webpage, simply click on the extension and a popup should appear. Press on the button within the popup to be redirected to a new tab.

## To Do
- Extension to find the main content of the current webpage and load it into the NLP workbench (new API likely required in the backend which accepts full text as input)

### Reference
[Getting Started](https://developer.chrome.com/docs/extensions/mv3/)
