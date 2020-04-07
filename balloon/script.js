$( document ).ready( function() {

	$("*").on( "mouseover", function() {

		var $T = $(this);

		if( $T.attr("bln") ) {

			$("*.balon").remove();
			$T.before( "<span class='balon'>" + $T.attr("bln").replace( "<IMG=", "<img src=" ) + "<br /></span>" );
			setTimeout( function() {
				$("*.balon").css({
					left: $T.offset().left + ( $T.width() / 2 ) - ( $("*.balon").innerWidth() / 2 ) + "px",
					top: $T.offset().top - $("*.balon").height() - 25 + "px"
				}) .fadeIn( 250 );
			}, 500 );

		}

	}) .on( "mouseout", function() {
		$("*.balon").stop().fadeOut( 250, function() {
			$(this).remove();
		})
	});

});