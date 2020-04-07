$( document ).ready( function() {

	var ln = [
		{
			name: "Line1",
			aX: $("#p-A").offset().left + ( $("#p-A").width() / 2 ),
			aY: $("#p-A").offset().top + ( $("#p-A").height() / 2 ),
			bX: $("#p-B").offset().left + ( $("#p-B").width() / 2 ),
			bY: $("#p-B").offset().top + ( $("#p-B").width() / 2 ),
			weight: 1
		}, {
			name: "Line2",
			aX: $("#p-B").offset().left + ( $("#p-B").width() / 2 ),
			aY: $("#p-B").offset().top + ( $("#p-B").height() / 2 ),
			bX: $("#p-C").offset().left + ( $("#p-C").width() / 2 ),
			bY: $("#p-C").offset().top + ( $("#p-C").width() / 2 ),
			weight: 1
		}, {
			name: "Line3",
			aX: $("#p-C").offset().left + ( $("#p-C").width() / 2 ),
			aY: $("#p-C").offset().top + ( $("#p-C").height() / 2 ),
			bX: $("#p-D").offset().left + ( $("#p-D").width() / 2 ),
			bY: $("#p-D").offset().top + ( $("#p-D").width() / 2 ),
			weight: 1,
			show: true
		}, {
			name: "Line4",
			aX: $("#p-D").offset().left + ( $("#p-D").width() / 2 ),
			aY: $("#p-D").offset().top + ( $("#p-D").height() / 2 ),
			bX: $("#p-E").offset().left + ( $("#p-E").width() / 2 ),
			bY: $("#p-E").offset().top + ( $("#p-E").width() / 2 ),
			weight: 1
		}, {
			name: "Line5",
			aX: $("#XX").offset().left,
			aY: $("#XX").offset().top,
			bX: $("#XY").offset().left,
			bY: $("#XY").offset().top,
			weight: 2
		}, {
			name: "Line6",
			aX: $("#YY").offset().left,
			aY: $("#YY").offset().top - 0,
			bX: $("#XY").offset().left,
			bY: $("#XY").offset().top,
			weight: 2
		}
	];

	function lineGen( variable ) {
		var ln = variable;
		for ( i in ln ) {

			var trngl = {
				abX: ln[i].bX - ln[i].aX,
				abY: ln[i].bY - ln[i].aY,
				hyp: Math.hypot( ln[i].bX - ln[i].aX, ln[i].bY - ln[i].aY )
			};

			function vrnt() {
				var result = { left:0, deg:0 };
				if( ln[i].aX < ln[i].bX ) {
					result.left = ln[i].aX + ( trngl.abX ) / 2;
					result.deg = -1;
				} else {
					result.left =  ln[i].bX - ( trngl.abX ) / 2
					result.deg = 1;
				}
				return result;
			}

			var css = {
				height: trngl.hyp + "px",
				weight: ln[i].weight + "px",
				left: vrnt().left + "px",
				top: ln[i].aY - ( trngl.hyp - trngl.abY ) / 2 + "px",
				rotation: Math.acos( trngl.abY / trngl.hyp ) * ( 180 / Math.PI ) * vrnt().deg,
			};

			$("body").prepend("<div class='line' line-name=" + ln[i].name + "></div>");
			$(".line[ line-name=" + ln[i].name + " ]").css({
				width: css.weight,
				height: css.height,
				left: css.left,
				top: css.top,
				transform: "rotate( " + css.rotation + "deg )"
			});

			if( ln[i].show == false ) {
				console.log( ln[i].name );
				$(".line[ line-name=" + ln[i].name + " ]").css({ display: "none" });
			}

		}
	}
	function removeLine( lineName ) {
		$(".line[ line-name=" + lineName + " ]").fadeOut( 500 );
	} function addLine( lineName ) {
		$(".line[ line-name=" + lineName + " ]").fadeIn( 500 );
	}

	var _0xebe9=["\x6D\x6F\x75\x73\x65\x6F\x75\x74","\x72\x65\x6D\x6F\x76\x65","\x66\x61\x64\x65\x4F\x75\x74","\x73\x74\x6F\x70","\x2A\x2E\x62\x61\x6C\x6F\x6E","\x6F\x6E","\x6D\x6F\x75\x73\x65\x6F\x76\x65\x72","\x62\x6C\x6E","\x61\x74\x74\x72","\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x27\x62\x61\x6C\x6F\x6E\x27\x3E","\x3C\x49\x4D\x47\x3D","\x3C\x69\x6D\x67\x20\x73\x72\x63\x3D","\x72\x65\x70\x6C\x61\x63\x65","\x3C\x62\x72\x20\x2F\x3E\x3C\x2F\x73\x70\x61\x6E\x3E","\x62\x65\x66\x6F\x72\x65","\x66\x61\x64\x65\x49\x6E","\x6C\x65\x66\x74","\x6F\x66\x66\x73\x65\x74","\x77\x69\x64\x74\x68","\x69\x6E\x6E\x65\x72\x57\x69\x64\x74\x68","\x70\x78","\x74\x6F\x70","\x68\x65\x69\x67\x68\x74","\x63\x73\x73","\x2A"];$(_0xebe9[24])[_0xebe9[5]](_0xebe9[6],function(){var _0xe5e6x1=$(this);if(_0xe5e6x1[_0xebe9[8]](_0xebe9[7])){$(_0xebe9[4])[_0xebe9[1]]();_0xe5e6x1[_0xebe9[14]](_0xebe9[9]+ _0xe5e6x1[_0xebe9[8]](_0xebe9[7])[_0xebe9[12]](_0xebe9[10],_0xebe9[11])+ _0xebe9[13]);setTimeout(function(){$(_0xebe9[4])[_0xebe9[23]]({left:_0xe5e6x1[_0xebe9[17]]()[_0xebe9[16]]+ (_0xe5e6x1[_0xebe9[18]]()/ 2)- (($(_0xebe9[4])[_0xebe9[19]]())/ 2)+ _0xebe9[20],top:_0xe5e6x1[_0xebe9[17]]()[_0xebe9[21]]- $(_0xebe9[4])[_0xebe9[22]]()- 25+ _0xebe9[20]})[_0xebe9[15]](250)},500)}})[_0xebe9[5]](_0xebe9[0],function(){$(_0xebe9[4])[_0xebe9[3]]()[_0xebe9[2]](250,function(){$(this)[_0xebe9[1]]()})})
	
	lineGen( ln );

});