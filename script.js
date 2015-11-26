chrome.browserAction.onClicked.addListener(function(tab) {
// No tabs or host permissions needed!
  chrome.tabs.executeScript({
    code: 
    	'function removeElement(element, index, array) { element.remove(); }' +  
    	'function setBackgroundToNull(element, index, array) { element.style.backgroundImage = ""; }' +

    	'var imgs = document.getElementsByTagName("img");' +
    	'Array.prototype.slice.call(imgs).forEach(removeElement);' + 

    	'var divs = document.getElementsByTagName("div");' +
    	'Array.prototype.slice.call(divs).forEach(setBackgroundToNull);' +
    	
    	'var headers = document.getElementsByTagName("header");' +
    	'Array.prototype.slice.call(headers).forEach(removeElement);'
  });
});