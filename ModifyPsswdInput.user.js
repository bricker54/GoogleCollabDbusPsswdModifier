// ==UserScript==
// @name         Modify Input Type
// @namespace    Idk
// @version      1.0
// @description  Change password input to text input for google collab
// @match        https://colab.research.google.com/drive/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to change the input type to text
    function changeToText(inputElement) {
        if (inputElement) {
            inputElement.type = 'text';
        }
    }

    // Function to periodically check for the input field
    function checkAndModify() {
        var passwordInput = document.querySelector('.stdin-widget.input-container[type="password"]');
        changeToText(passwordInput);
    }

    // Start checking every 1 second
    setInterval(checkAndModify, 1000);
})();
