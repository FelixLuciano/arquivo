$( document ).ready( function() {

	eval(function(p,a,c,k,e,d){while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+c+'\\b','g'),k[c])}}return p}('18 19(4,10,9){12 8={3:($("5").6()-$(4).6())/2+(9*(-1)),0:($("5").7()-$(4).7())/2+(10*(-1))};12 11={3:(8.3/$("5").6())*17+"%",0:(8.0/$("5").7())*17+"%"};13(16 9=="15"){$(4).14({3:11.3})}13(16 10=="15"){$(4).14({0:11.0})}}',10,20,'top|||left|objectName|body|width|height|halfScreen|offsetLeft|offsetTop|halfPercent|var|if|css|number|typeof|100|function|centralize'.split('|')))

	$( "*.range[padrao='true']" ).prepend("\
			<div class='ajuster'></div>\
			<div class='rangeBar'>\
			<div class='ajuster' style='border-bottom:10px solid transparent;''></div>\
			</div>\
		");

	function rangerSlider( rangerName, rangeValTipe, maxValue, outputFunction ) {

		$( rangerName ).mousedown( function() {
			$( window ).on( "mousemove", function( event ) {

				var rangerOffset = $( rangerName + " .rangeBar" ).parent().offset().left;
				var ranger = {
					insitePos: event.pageX - rangerOffset,
					width: $( rangerName ).width()
				} ;
	 			var pos = ranger.insitePos / ranger.width ;

 	 			if ( pos * 100 <= 100 && pos * 100 >= 0 ) {
 	 				$( "#text" ).empty().prepend( ( pos * 100 ).toFixed( 0 ) + "%" );
	 	 			$( "*" + rangerName + " .ajuster" ).css( { marginLeft: pos * 100 + "%" } );

					if( rangeValTipe == "%" ) {
						eval( outputFunction + "( (pos * 100).toFixed( 0 ) )" );
	 				} if( rangeValTipe == "n" ) {
						eval( outputFunction + "( (maxValue * pos).toFixed( 2 ).replace( '.', ',' ) )" );
	 				} if( rangeValTipe == "s/n" && pos < 0.1 ) {
						eval( outputFunction + "( 'false' )" );
	 				} if( rangeValTipe == "s/n" && pos > 0.9 ) {
						eval( outputFunction + "( 'true' )" );
	 				}
	 			}

			});
		});
		$( window ).on( "mouseup", function() {
				$( window ).off( "mousemove" );
		});

		$( rangerName ).attr({unselectable:"on", onselectstart:"return false;", onmousedown:"return false;"});
	}

	
	rangerSlider( "#rangeA", "%", false, "textA" );
	rangerSlider( "#rangeB", "n", 876, "textB" );
	rangerSlider( "#rangeC", "s/n", false, "textC" );

	function textA( value ) {
		$("#textA").empty().prepend( value + "%" );
	}

	function textB( value ) {
		$("#textB").empty().prepend( value );
	}

	function textC( value ) {
		if( value == "false" || value == "true" ) {
			$("#textC").stop().fadeOut( function(){
				$(this).empty().prepend( value ).fadeIn();
			});
		}
	}

	function bgSwitcher() {
		var r = Math.floor(Math.random() * (50 - 150)) + 150;
        var g = Math.floor(Math.random() * (50 - 150)) + 150;
        var b = Math.floor(Math.random() * (50 - 150)) + 150;
    	var color = "rgb(" + r + "," + g + "," + b + ")" ;
    	$("body, .ajuster").css({background: color});
    	$(".box, #title").css({color: color});
		setTimeout(bgSwitcher, 2000);
	}
	bgSwitcher();

	centralize( "#boxa", 0, 0 );
	centralize( "#boxb", 10, 10 );
	centralize( "#boxc", -10, -10 );

});