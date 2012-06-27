/*global window:false, alert:false, document:false */
var calculate = function (x, y) {
        "use strict";
        return x + y;
    };

var hello = function () {
        "use strict";
        var messageElement = document.getElementById("answer");
        messageElement.innerHTML = calculate(29, 13);
    };

window.onload = hello;


