// SVELTE THEME FOR GLITTER
// Coyright 2009(c) Matt Milosavljevic

// this removes the default twitter styles
$('style').remove();
var stylesheets = $('link[type="text/css"]')
$.each(stylesheets, function() {
	// make sure not to remove the custom style we added
	if($(this).attr('id') != 'customStyle') {
		$(this).remove();
	}
});

// move the profile info into the left column for svelte
$('#side #profile').insertAfter($('#status_update_box'));
$('.profile-head').append($('#profile .stats'));
$('#side').wrapAll('<div id="side_wrap"></div>');

// start autorefreshing
refreshTimeline();

// this moves the ellipsis into the status message when it's length exceeds 140 chars
// TODO - need to find more efficient way of doing this, this fires too many times
$('#timeline').bind('DOMSubtreeModified', function() { 
	$.each($('.entry-content'), function() {
		$(this).append($(this).siblings('a'));
	});
});

// this is the svelte specific sliding menu
$('#side_base').hover(
	function() {
		$('#side_base').css('width','250px');
		$('#side_wrap').stop().animate({'width': '250px'}, 200);
	},
	function() {
		$('#side_wrap').stop().animate({'width': '17px'}, 200);
		$('#side_base').css('width','auto');
	}
);

function refreshTimeline() {
	// ensure autorefreshing only occurs for your timeline
	
	if(window.location.hash == '' || window.location.hash == '#home') {
		if(window.location.pathname == '/') {
			var currDate = new Date();
			currDate.toLocaleTimeString();
			$('#timeline').load("/ #timeline li");
		}
	}
	// be polite to twitter and don't refresh the page more than 2 times a minute
	window.setTimeout(refreshTimeline,30000);
}