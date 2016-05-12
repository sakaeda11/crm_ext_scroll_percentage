(function() {

  'use strict';

  var analyze = function() {
    var result = document.querySelector("#scroll_percentage_analyze_block");
    var current = window.pageYOffset;
    if (current === 0) current = 1;
    var maxheight = document.querySelector("body").scrollHeight -window.innerHeight;
    result.innerText = (parseInt((current / maxheight) * 100)) + " %";
  }
  analyze();
  window.addEventListener('scroll', analyze, false);

})();
