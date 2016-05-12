(function(window, document){

  'use strict';

  var toggleAnalyze = function(tab) {
    var injector = '';

    // logic test if the injected assets exists
    injector += 'if (document.querySelector("#scroll_percentage_analyze_js")) {';

    //if they exist, remove them
    injector += 'document.querySelector("#scroll_percentage_analyze_js").remove();';
    injector += 'document.querySelector("#scroll_percentage_analyze_block").remove();';

    //if they don't exist, inject them
    injector += '} else {';

    injector += 'analyzeJS = document.createElement("script");';
    injector += 'analyzeJS.type = "text/javascript";';
    injector += 'analyzeJS.src = chrome.extension.getURL("/scroll_percentage_analyze.js");';
    injector += 'analyzeJS.id = "scroll_percentage_analyze_js";';
    injector += 'document.querySelector("head").appendChild(analyzeJS);';
    injector += 'analyzeResult = document.createElement("div"),';
    injector += 'analyzeResult.id = "scroll_percentage_analyze_block",';
    injector += 'analyzeResult.style.cssText = "position: fixed; top: 0; right: 0; background-color: #000; padding: 0 5px; line-height: 16px; color: #fff; z-index: 999999999; font-size: 14px;",';
    injector += 'document.querySelector("body").appendChild(analyzeResult)';

    //close logic test
    injector += '}';

    chrome.tabs.executeScript({code: injector});
  };

  chrome.browserAction.onClicked.addListener(function(tab){
    toggleAnalyze(tab);
  });

}(window, document));
