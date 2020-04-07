$( document ).ready( function() {

	$.fn.mSwitch = function ( a, b ) {

		mSwitch = {
			id: $(this).attr("id") + "-mSwitch",
			value: a,
			checked: new String
		}

		if ( a == true ) {
			mSwitch.checked = "checked";
		}

		$( this ).prepend("\
			<input type='checkbox' class='mSwitch' id='" + mSwitch.id + "'" + mSwitch.checked + ">\
	    	<label for=" + mSwitch.id + ">\
    			<div class='mSwitch-checkedTrack'></div>\
    			<div class='mSwitch-thumb'></div>\
    		</label>\
		").addClass("mSwitch-content")
		.attr({ value: mSwitch.value });

		$( "label", this ).on( "click", function() {
			if( $( this ).parent().attr("value") == "true" ) {
				$( this ).parent().attr({ value: false });
				$b = false;
			} else {
				$( this ).parent().attr({ value: true });
				$b = true;
			}
			b( $b );
		});
	}

	$("#test").mSwitch( true , function( a ) {
		console.log( "value: " + a );
	});

	$("#test2").mSwitch( false, function( a ) {
		console.log( a );
	});

	$(document).on("click", function( e ) {
		console.log( e );
	});

});