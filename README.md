# workbench-extension

## First Stage
When the user is browsing page X, they click on a button (within the extension), and the NLP workbench is opened in a new page and page X's URL is pasted into the input box in the workbench.  
  
> You can modify the frontend to make it read from the URL parameters.   

For example, if the URL is `newskg.wduofa.ca/?url=xxxx`, some script in the frontend puts the URL part in the box and clicks the `Load News` button.  

## Second Stage  
Whatever web page you are in, when clicking a button, the extension finds the main content of that webpage and loads it into the NLP workbench. For this a new API will be required in the backend that accepts full text as input.

## Reference
[Getting Started](https://developer.chrome.com/docs/extensions/mv3/)
