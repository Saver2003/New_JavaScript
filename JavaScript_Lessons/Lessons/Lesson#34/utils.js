var createDivForContainer = function(containerId, text) {
  var container = document.getElementById(containerId);
  var div = document.createElement('div');
  div.innerHTML = text;
  container.appendElement(div);
};
