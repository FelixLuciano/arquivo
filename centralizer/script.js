$( document ).ready( function() {

	function centralize( objectName, offsetTop, offsetLeft ) {
		var halfScreen = {
			left :  ( $("body").width() - $( objectName ).width() ) / 2 + ( offsetLeft * (-1)),
			top :  ( $("body").height()  - $( objectName ).height() ) / 2 + ( offsetTop * (-1))
		};
		var halfPercent = {
			left: ( halfScreen.left / $("body").width() ) * 100 + "%" ,
			top: ( halfScreen.top / $("body").height()  ) * 100 + "%"
		};
		if( typeof offsetLeft == "number" && typeof offsetTop == "number" ) {
			$( objectName ).css({
				left: halfPercent.left,
				top: halfPercent.top
			});
		}
	}

	function bgSwitcher() {
		var r = Math.floor(Math.random() * (50 - 150)) + 150;
        var g = Math.floor(Math.random() * (50 - 150)) + 150;
        var b = Math.floor(Math.random() * (50 - 150)) + 150;
    	var color = "rgb(" + r + "," + g + "," + b + ")" ;
    	$("body").css({background: color});
		setTimeout(bgSwitcher, 2000);
	}
	bgSwitcher();

	centralize( "#box", 0, 0 );
	centralize( "#boxa", -10, -10 );
	centralize( "#boxb", 10, 10 );
	centralize( "#bbox", 0, 0 );
	centralize( "#bboxa", -10, -10 );
	centralize( "#bboxb", 10, 10 );

});