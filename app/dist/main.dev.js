"use strict";

window.addEventListener('load', function () {
  renderClockBar();
  currentTime();
});

var renderClockBar = function renderClockBar() {
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();
  var clockBar = "";
  clockBar += "<div class=\"clock_info\">\n            <div class=\"clock\">\n                <h1>18:45:00</h1>\n            </div>\n            <div class=\"clock_location\">\n             ".concat(logData.userData.location, "\n            </div>\n        </div>\n            <div class=\"clock_date\">\n            <p>").concat(day, "/").concat(month + 1, "/").concat(year, "</p>\n            </div>");
  var userData = document.querySelector('.clock_bar');
  userData.innerHTML = clockBar;
};
/* calling currentTime() function to initiate the process */


var currentTime = function currentTime() {
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  /* adding time to the div */

  var t = setTimeout(function () {
    currentTime();
  }, 1000);
  /* setting timer */

  console.log("".concat(hour, ":").concat(min, ":").concat(sec));
  var clock = document.querySelector('.clock');
  clock.innerHTML = clockBar;
};

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  } else {
    return k;
  }
}