$('style').remove();
var stylesheets = $('link[type="text/css"]')
$.each(stylesheets, function() {
	if($(this).attr('id') != 'customStyle') {
		$(this).remove();
	}
});

$('#side #profile').insertAfter($('#status_update_box'));
$('.profile-head').append($('#profile .stats'));

/*$.each($('.actions'), function() {
	$(this).prepend($(this).siblings('.status-body').children('strong'));
});

$('.actions strong, .actions div').live('mouseover',function() {
	$(this).parent().addClass('over');
});
$('.actions strong, .actions div').live('mouseout',function() {
	$(this).parent().removeClass('over');
});*/

$('#side').wrapAll('<div id="side_wrap"></div>');

//var infoTextWidth = toEm($('#profile table').width(),$('body'));

//$('#timeline').css('width',infoTextWidth + 'em');
//$('textarea').css('width',(infoTextWidth - 1) + 'em');



$('body').bind('DOMSubtreeModified', function() {  
	/*$('#timeline').css('width',infoTextWidth + 'em');
	//$('textarea').css('width',(infoTextWidth - 1) + 'em');
	$.each($('.actions'), function() {
		$(this).prepend($(this).siblings('.status-body').children('strong'));
	});*/
}); 


$('#more').click(function() {
	$('#timeline').bind('DOMNodeInserted', function() {  
	
		$('#timeline').css('width',toEm($('#profile table').width(),$('body')) + 'em');
		$('textarea').css('width',(toEm($('#profile table').width(),$('body')) - 1) + 'em');
	});  
});

$('#side_base').hover(
	function() {
		$('#side_wrap').animate({"width": "250px"}, 250);
	},
	function() {
		$('#side_wrap').animate({"width": "17px"}, 250);
	}
);