$( document ).ready( function() {

	$.fn.rangeSlider = function( a, b ) {

		var $e = $(this);
		var a = $.extend({
			min: 0,
			max: 1,
			value: 0
		}, a);

		$e.prepend("\
			<div class='rangeSlider-track'></div>\
			<div class='rangeSlider-thumb'></div>\
			<div class='rangeSlider-value'></div>\
		")
		.attr({
			unselectable: "on",
            onselectstart: "return false;",
			onmousedown: "return false;"
		})

		.on( "mousedown", function() {
			$e = $(this);
			$( window ).on ("mousemove", function( c ) {

				$p = ( c.pageX - $e.offset().left ) / $e.width();
				if( $p >= 0 && $p <= 1 ) {

					$v = $p * ( a.max - a.min ) + a.min;
					$( $e ).attr({
						value: $v
					});
					$(".rangeSlider-track", $e  ).css({
						width: $p * 100 + "%",
						opacity: .5 + $p / 2
					});
					$(".rangeSlider-thumb", $e ).css({
						marginLeft: $p * $e.width() - 10 + "px"
					});
					$(".rangeSlider-value", $e ).css({
						marginLeft: $p * $e.width() - ( $(".rangeSlider-value", $e ).innerWidth() / 2 ) + "px"
					}) .empty().prepend( $v.toFixed( 0 ) );

					var result = {
						int: $v,
						dec: $p
					};
					b( result );

				}
			})
			.on("mouseup", function() {
				$( this ).off("mousemove");
			});

		});

		$(".rangeSlider-track", $e ).css({
			width: a.value *100 + "%",
			opacity: .5 + a.value / 2
		});
		$(".rangeSlider-thumb", $e ).css({
			marginLeft: a.value * $e.width() -10 + "px"
		});
		$(".rangeSlider-value", $e ).empty().prepend( ( a.value * ( a.max - a.min ) + a.min ).toFixed( 0 ) )
		.css({
			marginLeft: a.value * $e.width() - ( $(".rangeSlider-value", $e ).innerWidth() / 2 ) + "px"
		});

		var result = {
			int: a.value * ( a.max - a.min ) + a.min,
			dec: a.max * a.value
		};
		b( result );
	};

	var rgb = {
		r: 0,
		g: 0,
		b: 0
	};

	function color() {
		$("body").css({
			background: "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")"
		});
		console.log( "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")" );
	}

	$("#teste").rangeSlider({ max: 1000 }, function( a ) {
		$("#texto").empty().prepend( "Voce se fosdeu " + a.int.toFixed(0) + " vezes!" );
	});

});