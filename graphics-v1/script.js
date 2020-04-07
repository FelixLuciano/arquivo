$( document ).ready( function() {

	eval(function(p,a,c,k,e,d){e=function(c){return c};if(!''.replace(/^/,String)){while(c--){d[c]=k[c]||c}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('16 17(4,11,6){12 7={3:($("5").8()-$(4).8())/2+(6*(-1)),0:($("5").10()-$(4).10())/2+(11*(-1))};12 9={3:(7.3/$("5").8())*15+"%",0:(7.0/$("5").10())*15+"%"};18(13 6=="14"&&13 11=="14"){$(4).19({3:9.3,0:9.0})}}',10,20,'top|||left|objectName|body|offsetLeft|halfScreen|width|halfPercent|height|offsetTop|var|typeof|number|100|function|centralize|if|css'.split('|'),0,{}))

	var graphic = [
		11,
		3,
		1,
		10,
		9,
		3,
		15,
		20,
		3,
		15
	];

	var graphicb = [
		111,
		13,
		11,
		110,
		19,
		13,
		115,
		120,
		13,
		115
	];

	function graphics( getElement, getVariable ) {
		
		$( getElement ).empty() .prepend(
			"<tr class='bars'></tr>\
   			<tr class='values'></tr>"
		);
		for( i = getVariable.length; i > 0; --i ) {
			$( ".bars" ).prepend( "<td><id id='bar_" + i + "' class='bar'></td>" );
			$( ".values" ).prepend( "<td><id id='val_" + i + "' class='value'></td>" );
		}

		function getHighest() {
			var max = 0;
			for( i in getVariable ) {
				max = Math.max( getVariable[ i ], max );
			}
			return max;
		}
		var getHighest = getHighest();

		for( i = getVariable.length; i > 0; --i ){
			$( getElement + " #bar_" + i ).animate({ height: (getVariable[ i-1 ] / getHighest ) * 100 + "%" }, 1000 );
			$( getElement + " #val_" + i ).fadeOut() .empty() .prepend( getVariable[ i-1 ] ).fadeIn( 1000 );
		}
	}

	graphics( "#graphic", graphic );
	graphics( "#graphicb", graphicb );

	$( window ).resize( function() {
		centralize( "#graphic", 150, 0 );
		centralize( "#graphicb", -150, 0 );
	});
	centralize( "#graphic", 150, 0 );
	centralize( "#graphicb", -150, 0 );

});