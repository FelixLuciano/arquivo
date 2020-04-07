$(document).ready(function(){

	var time = { dd:"1", hh:"0", mm:"0", ss:"0" };
	var timeSec = { dd:"86400", hh:"3600", mm:"60", ss:"1" };
	var secTotal = timeSec.dd * time.dd + timeSec.hh * time.hh + timeSec.mm * time.mm + timeSec.ss * time.ss;
	var secAtual = secTotal;

	function timer(){

		if( time.ss <= 0 ) { time.mm--; time.ss = 60; }
		if( time.mm < 0 ) { time.hh--; time.mm = 59; }
		if( time.hh < 0 ) { time.dd--; time.hh = 24; }
		$( "#ss" ).empty().prepend( time.ss );
		$( "#mm" ).empty().prepend( time.mm );
		$( "#hh" ).empty().prepend( time.hh );
		$( "#dd" ).empty().prepend( time.dd );
		time.ss--;
		setTimeout( timer, 1000 );

	} function progress(){

		--secAtual;
		var secDecimal = secAtual / secTotal ;
		var secPrct = secDecimal * 100 ;
		$( "#progress" ).css({ width: secPrct.toFixed(1) + "%" });

		if( secAtual > 0 ) {
			setTimeout( progress, 1000 );
		}
	}
	timer();
	progress();

});