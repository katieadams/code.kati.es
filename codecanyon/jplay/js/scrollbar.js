$(document).ready(function() {
	//replace placeholders with actual scrollbars
	var ORIG_SCROLLBAR_WIDTH = 18;
	
	$.each($(".with_js"), function() {		
		//get the original height
		var scrollArea = $(this);
		var origHeight = scrollArea.height();
		scrollArea.height("auto");
		
		//prepare the container for new scrollbar
		scrollArea.css("overflow", "hidden");
		scrollArea.css("padding-right", parseInt(scrollArea.css("padding-right")) + ORIG_SCROLLBAR_WIDTH);
		scrollArea.width(parseInt(scrollArea.width()) - ORIG_SCROLLBAR_WIDTH);
		scrollArea.append("<div class=\"v_scrollbar\"><div class=\"v_scrollbar_move\"></div></div>");
		
		//get the scrollable height
		var scrollHeight = scrollArea.innerHeight();
		scrollArea.height(origHeight);
		
		//variable declarations
		var scrollbar = scrollArea.find(".v_scrollbar");
		var mover = scrollbar.find(".v_scrollbar_move");
		var scrollerHeight = parseInt(scrollbar.outerHeight(true));
		
		//EVENTS
		scrollbar.bind("mouseover", function(e) {
			$(this).stop();
			$(this).animate({opacity:1.0},400);
		});
		
		scrollbar.bind("mouseleave", function(e) {
			if (!mover.data("dragged")) {
				$(this).stop();
				$(this).animate({opacity:0.3},400);
			}
		});
		
		mover.bind("mousedown", function(e) { 
			$(this).data("clickY", e.pageY-this.offsetTop); 
		});
		
		mover.bind("dragstart", function(e) {
			$(this).data("dragged",true);
		});
		
		mover.bind("drag", function(e) {
			var newHeight = parseInt($(this).css("top")) + parseInt(e.pageY-this.offsetTop) - parseInt($(this).data("clickY"));
			
			updatePosition(newHeight);
		});
		
		function updatePosition(newHeight) {	
				
			newHeight = Math.max(newHeight, 0);
			newHeight = Math.min(newHeight, parseInt(scrollbar.innerHeight())-parseInt(mover.outerHeight(true)));

			mover.css("top",  newHeight);
			
			var contentHeight = (newHeight/(scrollerHeight-parseInt(mover.height()))) * (scrollHeight-scrollerHeight);
			scrollbar.css("top", contentHeight);
			scrollArea.scrollTop(contentHeight);
		};
		
		mover.bind("dragend", function(e) {
			$(this).data("dragged",false);
			scrollbar.stop();
			scrollbar.animate({opacity:0.3},400);
		});
		
		scrollArea.bind("mousewheel", function(event, delta) {
			var scrollPos = mover.position().top;
			scrollPos -= delta*15;
			
			updatePosition(scrollPos);
			
            return false;
        });
		
		//START
		
		//defaults
		scrollbar.css("top", 0);
		scrollArea.css("top",  0);
		scrollArea.scrollTop(0);
		mover.css("top", 0);
		mover.height(((scrollerHeight/scrollHeight)*100) + "%");
		mover.data("dragged",false);
		
		//turn scrollbar on/off
		if (scrollerHeight>=scrollHeight) {
			scrollArea.css("padding-right", parseInt($(this).css("padding-right"))-ORIG_SCROLLBAR_WIDTH);
			scrollArea.width(parseInt($(this).width())+ORIG_SCROLLBAR_WIDTH);
			scrollbar.hide();
		}
	});	
	
	//round off the scrollbars and scroll areas
	$(".vertical_scroll").corner("10px");
	$(".v_scrollbar").corner("20px");
	$(".v_scrollbar_move").corner("10px");
	
	
});
