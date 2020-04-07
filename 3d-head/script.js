//Slider2.0 Plugin
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('$.I.4=k(a,b){h $e=$(o);h a=$.J({7:0,d:1,3:0},a);$e.m("<8 l=\'4-q\'></8><8 l=\'4-n\'></8><8 l=\'4-3\'></8>").z({K:"i",H:"w x;",L:"w x;"}).i("E",k(){$e=$(o);$(F).i("s",k(c){$p=(c.G-$e.M().O)/$e.6();Q($p>=0&&$p<=1){$v=$p*(a.d-a.7)+a.7;$($e).z({3:$v});$(".4-q",$e).9({6:$p*B+"%",C:.5+$p/2});$(".4-n",$e).9({g:$p*$e.6()-D+"j"});$(".4-3",$e).9({g:$p*$e.6()-($(".4-3",$e).y()/2)+"j"}).A().m($v.u(0));h f={r:$v,t:$p};b(f)}}).i("N",k(){$(o).P("s")})});$(".4-q",$e).9({6:a.3*B+"%",C:.5+a.3/2});$(".4-n",$e).9({g:a.3*$e.6()-D+"j"});$(".4-3",$e).A().m((a.3*(a.d-a.7)+a.7).u(0)).9({g:a.3*$e.6()-($(".4-3",$e).y()/2)+"j"});h f={r:a.3*(a.d-a.7)+a.7,t:a.d*a.3};b(f)};',53,53,'|||value|rangeSlider||width|min|div|css||||max||result|marginLeft|var|on|px|function|class|prepend|thumb|this||track|int|mousemove|dec|toFixed||return|false|innerWidth|attr|empty|100|opacity|10|mousedown|window|pageX|onselectstart|fn|extend|unselectable|onmousedown|offset|mouseup|left|off|if'.split('|')))

$( document ).ready( function() {

	deg = {
		x: 0,
		y: 0
	};

	$("#x").rangeSlider({ min: -180, max: 180, value: .5 }, function( a ) {
		deg.x = a.int.toFixed(0);
		rotate();
	});

	$("#y").rangeSlider({ min: -180, max: 180, value: .5 }, function( a ) {
		deg.y = a.int.toFixed(0);
		rotate();
	});

	function rotate() {
		$(".skull").css({
			transform: "rotateX(" + deg.x + "deg ) rotateY(" + deg.y + "deg )"
		});
	}

	$("#playerName").on( "keydown", function( e ) {
		if( $(this).val() && e.which == 13 ) {
			$("*.face").css({
				backgroundImage: "url( http://skins.minecraft.net/MinecraftSkins/" + $( this ).val() + ".png )"
			});
		}
	});

});

$( document ).ready( function() {

	var hello = function( a ) {
		console.log( a );
	}

	hello( "Hello World \nSHAZAM KARAI!" );

});