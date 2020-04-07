$( document ).ready( function() {

	function tableGen( TableName, TableArguments ) {

		var txt;
		for( l = 0; l < TableArguments.length; l++ ) {

			txt += "<tr>" ;
			for( c = 0; c < TableArguments[l].length; c++ ) {
				txt += "<td>" + TableArguments[l][c] + "</td>" ;
			}
			txt += "</tr>" ;

		}
		$( TableName ).empty().prepend( txt );

	}

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

	tableItens = [
		[
			"C1 L1",
			"C2 L1",
			"C3 L1",
			"C4 L1"
		], [
			"C1 L2",
			"C2 L2",
			"C3 L2",
			"C4 L2"
		], [
			"C1 L3",
			"C2 L3",
			"C3 L3",
			"C4 L3"
		]
	];

	tableGen( "#table", tableItens );
	centralize( "#table", 0, 0 );

});