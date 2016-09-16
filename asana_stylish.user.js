// ==UserScript==
// @name          Asana custom CSS fix
// @author        murchik <murchik+gitgub@protonmail.com>
// @description   Fix Asana's hidden project tasks list with custom CSS (e.g. Stylish) applied
// @homepage      http://github.com/moorchegue
// @match         *://app.asana.com/*
// @version       0.0.1
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==


function removeDragLayers(jNode) {
    console.log(jNode);
    jNode.remove();
}

function fixAsana() {
    console.log('fixing…');
    waitForKeyElements(".DragLayer", removeDragLayers);
}

function test() {
    console.log('Passed.');
}

if (this.window) {
	fixAsana();
} else {
	test();
}
