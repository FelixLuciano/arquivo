$(".header").css({backgroundImage: "url('imgs/server-" + $(".header > .title").attr("svsName") + ".png')"});
$(".header + #menu").on( "click", ".item, .home-button", function() {
	console.log( $( this ).attr("id") );
	$.ajax({
		type: 'GET',
		url:  "home/servidores/" + $(".header > .title").attr("svsName") + "/" + $( this ).attr("id") + ".html",
		success : function( data ) {
			$(".header + #menu + #content").fadeOut( 300,function(){
				$( this ).empty().prepend( data ).fadeIn();
			});
		}
	});
});

$(".header + #menu #home").trigger("click");