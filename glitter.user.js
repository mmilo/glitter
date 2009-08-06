// ==UserScript==
// @name			Glitter
// @namespace		http://mammil.com
// @description		Glitter is a greasemonkey script that allows users to modify the look and feel of Twitter.
// @include			http://twitter.com/
// @include			http://twitter.com/*
// @require			http://ajax.googleapis.com/ajax/libs/jquery/1.3.0/jquery.min.js
// ==/UserScript==

	var docHead = document.getElementsByTagName('head')[0];
	var docBody = document.getElementsByTagName('body')[0];
	
	// add custom style
	var customStyle = document.createElement('link');
    customStyle.href = 'http://mammil.com/glitter/themes/svelte/style.css';
	customStyle.type = 'text/css';
	customStyle.rel = 'stylesheet';
	customStyle.id = 'customStyle';
    docHead.appendChild(customStyle);
	
	// add custom script
	function addScript() {
		var customScript = document.createElement('script');
		customScript.src = 'http://mammil.com/glitter/themes/svelte/script.js';
		customScript.type = 'text/javascript';
		customScript.id = 'customScript';
		docBody.appendChild(customScript);
	}
	
	
	
