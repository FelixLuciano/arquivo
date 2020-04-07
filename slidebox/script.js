$(document).ready(function(){

//SlideBoxAPI
	function slideBox( slideBoxContent, imagesCarrier, autoPlayTimer ) {
		$( slideBoxContent ).prepend("\
			<div class='prev'></div>\
			<div class='next'></div>\
			<div class='desc'></div>\
		");

		function update( i ) {
			var images = imagesCarrier;
			$(slideBoxContent)
				.css({
					background: "url('imgs/" + images[i].img + "') no-repeat center #555",
					boxShadow: "0px 0px 50px" + images[i].cor
				});
			$( "title" ).empty().prepend( images[i].desc );
			$( slideBoxContent + " .desc" )
				.fadeOut(function () {
					$(slideBoxContent + " .desc")
						.empty()
						.prepend(images[i].desc);
					$(slideBoxContent + " .desc")
						.fadeIn()
				})
		}
		update(0);
		var selectedTpc = 0;
		$( slideBoxContent + " .next" ).click(function () {
			if ( selectedTpc < topics.length ) {
				selectedTpc++;
				if ( selectedTpc == topics.length ) {
					selectedTpc = 0
				}
				update( selectedTpc )
			}
		});
		$( slideBoxContent + " .prev" ).click(function () {
			if ( selectedTpc > -1 ) {
				--selectedTpc;
				if ( selectedTpc < 0 ) {
					selectedTpc = topics.length - 1
				}
				update( selectedTpc )
			}
		});

		function autoplay( timer ) {
			update( selectedTpc );
			selectedTpc++;
			if ( selectedTpc == topics.length ) {
				selectedTpc = 0
			}
			setTimeout(function () {
				autoplay( timer )
			}, timer );
		}
		if ( typeof autoPlayTimer == "number" ) {
			autoplay( autoPlayTimer )
		}
	}


	var topics = [
		{
			img:"img1.jpg",
			desc:"Imagem 1",
			cor:"#53c1fc"
		}, {
			img:"img2.jpg",
			desc:"Imagem 2",
			cor:"#810b2b"
		}, {
			img:"img3.jpg",
			desc:"Imagem 3",
			cor:"#2a5e48"
		}, {
			img:"img4.jpg",
			desc:"Imagem 4",
			cor:"#45271d"
		}, {
			img:"img5.jpg",
			desc:"Imagem 5",
			cor:"#dcbcbf"
		}, {
			img:"img6.jpg",
			desc:"Imagem 6",
			cor:"#c86b3f"
		}
	];

	slideBox( "#slidebox", topics, 5000 );

	function centralize( objectName, offsetTop, offsetLeft ) {
		var halfScreen = {
			left :  ( $("body").width() - $( objectName ).width() ) / 2 + offsetLeft ,
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

	centralize( "#slidebox", 0, 0 );

});