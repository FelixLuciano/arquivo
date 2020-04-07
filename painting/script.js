$( document ).ready( function() {

	$( "body" ).on("mousedown", function(){
		$( "body" ).on("mousemove", function(){

			var $this = $(" .explosion ");
			var getMouse = {
				xAxis: event.pageX,
				yAxis: event.pageY
			};
			var getPosition = {
				xAxis: getMouse.xAxis - ( $this.width() / 2 ),
				yAxis: getMouse.yAxis - ( $this.height() / 2 ),
			};

			var explosion = "<div class='explosion' style='left:" + getPosition.xAxis + "; top:" + getPosition.yAxis + ";'></div>";
			var i = 1;

			$(" #bottom ").before( explosion ).delay( 1000, function(){
				$( ".explosion" ).fadeOut();
			});

		});
	}).on("mouseup", function(){
		$( "body" ).off("mousemove");
	});

	$( "body" ).dbclick(function(){
		$( "*.explosion" ).fadeOut();
	});

});