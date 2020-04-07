$( document ).ready( function() {

	var clicker = {
		progressRate: 7,
		clickDelay: 1000,
		timing: false,
		clicksInLevel: 0,
		clicksTotal: 0,
		playerLevel: 0
	}

	function progress() {
		$("#progressBar-progress").stop().animate({ width: "+=" + clicker.progressRate + "%" }, 150, function() {
			progressUpdate();
		});
			clicker.timing = true;
			setTimeout( function(){
				clicker.timing = false;
			}, clicker.clickDelay );
	}

	function progressUpdate() {
		if( $("#progressBar-progress").width() >= $(window).width() ) {
			$("#progressBar-progress").css({ width: "0px" }, 150);
			clicker.progressRate = clicker.progressRate * 0.9;
			clicker.clicksInLevel = 0;
			clicker.playerLevel += 1;
		}
	}

	$("#radial-button").on( "click", function() {

		if ( $("#progressBar-progress").width() <= $(window).width() && clicker.timing == false ) {

			progress();
			clicker.clicksInLevel += 1;
			clicker.clicksTotal += 1;

		}

	});

});