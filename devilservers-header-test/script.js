$( document ).ready( function() {

	function animate() {

		$( "#lB" ).animate({marginLeft:"-300px"}, 1000).animate({marginLeft:"300px"}, 2000).animate({marginLeft:"0px"}, 3000);
		$( "#lC" ).animate({marginLeft:"400px"}, 3000).animate({marginLeft:"-180px"}, 1000).animate({marginLeft:"0px"}, 1000);
		$( "#lD" ).animate({marginLeft:"-400px"}, 3000).animate({marginLeft:"180px"}, 1000).animate({marginLeft:"0px"}, 2000);
		$( "#lE" ).animate({marginLeft:"300px"}, 3000).animate({marginLeft:"-300px"}, 2000).animate({marginLeft:"0px"}, 1000);
		setTimeout(animate, 3500);

	}
	animate();

	function centralize( objectName, offsetTop, offsetLeft ) {
		var halfScreen = {
			left :  ( $("body").width() - $( objectName ).width() ) / 2 + ( offsetLeft * (-1)),
			top :  ( $("body").height()  - $( objectName ).height() ) / 2 + ( offsetTop * (-1))
		};
		var halfPercent = {
			left: ( halfScreen.left / $("body").width() ) * 100 + "%" ,
			top: ( halfScreen.top / $("body").height()  ) * 100 + "%"
		};
		if( typeof offsetLeft == "number" ) {
			$( objectName ).css({ left: halfPercent.left });
		}
		if( typeof offsetTop == "number" ) {
			$( objectName ).css({top: halfPercent.top });
		}
	}

	centralize( "#logo", 80, 0 );
	centralize( "#lA", 0, 0 );
	centralize( "#lB", 1, 0 );
	centralize( "#lC", -3, 100 );
	centralize( "#lD", 2, -100 );
	centralize( "#lE", -1, 0 );

});