$( document ).ready( function() {

	function openWindow( wName, wTitle, wUrlPrefix, wUrl, wWidth, wHeight, wCntntSource ) {

		var windowSource = "\
			<div class='window' id=" + wName + ">\
				<div class='title' unselectable='on' onselectstart='return false;' onmousedown='return false;'>\
					" + wTitle + "\
					<div class='close buttons'>\
						<svg fill='#F44' viewBox='0 0 24 24' width='23' height='23' xmlns='http://www.w3.org/2000/svg'>\
    						<path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/>\
    						<path d='M0 0h24v24H0z' fill='none'/>\
						</svg>\
					</div>\
					<div class='minimize buttons'>\
						<svg fill='#F44' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'>\
    						    <path d='M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z'/>\
   								<path d='M0 0h24v24H0z' fill='none'/>\
						</svg>\
					</div>\
				</div>\
				<div class='url'><span class='urlPrefix'>" + wUrlPrefix + "</span> " + wUrl + "</div>\
				<div class='content' style=' width:" + wWidth + "px; height: " + wHeight + "px;'>" + wCntntSource + "</div>\
			</div>\
		";

		$("*#" + wName ).remove();
		$("#social-menu").after( windowSource );

	}

	$.ajax({
		type: 'GET',
		cache: false,
        url: 'home/index.html',
        success : function( data ) {
            $("#explorer .content").prepend( data );
        } 
    });

	var way = new Array();
	way.push("home");

    $("#explorer").on( "click", ".urlItem", function() {
    	$this =  $(this).index();
    	way.splice( $this + 1, 10);
		var loadUrl = "";
		for( i in way ) {
			loadUrl += way[i] + "/";
		}
    	var urlBar = "";
		for( i in way ) {
			urlBar += "<span class='urlItem' load=" + way[ i ] + ">" + way[i].replace( /\b[a-z]/g , function( l ) { return l.toUpperCase();}) + "</span> > ";
		}
    	$.ajax({
			type: 'GET',
			cache: false,
        	url: loadUrl + "/index.html",
        	success : function( data ) {
	            $("#explorer .content").empty().prepend( data );
	            $("#explorer .url").empty().prepend( urlBar );
        	} 
 	   });
    });

    $("#explorer").on( "click", ".item[load]", function() {

		way.push( $( this ).attr("load") );

		var loadUrl = "";
		for( i in way ) {
			loadUrl += way[i] + "/";
		}

		var urlBar = "";
		for( i in way ) {
			urlBar += "<span class='urlItem' load=" + way[ i ] + ">" + way[i].replace( /\b[a-z]/g , function( l ) { return l.toUpperCase();}) + "</span> > ";
		}

    	$.ajax({
			type: 'GET',
			cache: false,
        	url: loadUrl + "/index.html",
        	success : function( data ) {

	            $("#explorer .content").empty().prepend( data );
	            $("#explorer .url").empty().prepend( urlBar );

        	} 
 	   });
    });

    $("#explorer").on( "click", ".item[window]", function() {

    	var attr = {
    		wName: $( this ).attr("window"),
    		wTitle: $( this ).attr("wTitle"),
    		wType: $( this ).attr("wType"),
    		wWidth: $( this ).attr("wWidth"),
    		wHeight: $( this ).attr("wHeight"),
    		wContent: $( this ).attr("wLoad")
    	}

    	var urlBar = "";
		for( i in way ) {
			urlBar += way[i].replace( /\b[a-z]/g , function( l ) { return l.toUpperCase();}) + " > ";
		}
		urlBar += attr.wContent.replace( /\b[a-z]/g , function( l ) { return l.toUpperCase();});

		var loadUrl = "";
		for( i in way ) {
			loadUrl += way[i] + "/";
		}


		var wSource = "";

		$.ajax({
			type: 'GET',
			cache: false,
			async: false,
			url: loadUrl + attr.wContent + ".html",
			success : function( data ) {
				wSource = data;
			}
		});

		openWindow( attr.wName, attr.wTitle, attr.wType, urlBar, attr.wWidth, attr.wHeight, wSource );

    });

	$( document ).on( "mousedown", ".window, #explorer", function() {
		$("*.window").css({
			zIndex: "0"
		}); $( this ).css({
			zIndex: "1"
		});
	});

	$( document ).on( "mousedown", ".window .title", function( e ) {
		var $this = $( this );
		var mPos = {
			x: e.pageX - $this.parent().offset().left,
			y: e.pageY - $this.parent().offset().top
		}
		$( window ).on( "mousemove", function( e ) {
			if( e.pageY - mPos.y >= $("#mainMenu").innerHeight() && e.pageY + mPos.y <= $("#bottom").offset().top ) {
				$this.parent().css({
					top: e.pageY - mPos.y
				});
			}
			$this.parent().css({
				left: e.pageX - mPos.x
			});
			$("body").css({ cursor: "move" });
		}).on( "mouseup", function() {
			$( this ).off( "mousemove" );
			$("body").css({ cursor: "default" });
		});
	});

	$( document ).on( "click", ".window .title .close", function() {
		$( this ).parent().parent().fadeOut( 200, function(){
			$( this ).remove()
		});
	});

	$( document ).on( "click", ".window .title .minimize", function() {
		$this = "#" +  $( this ).parent().parent().get(0).id;

		$( $this + " .content").attr({ oldWidth: $( $this + " .content").width(), oldHeight: $( $this + " .content").height(), });
		$( $this + " .url").slideToggle();
		$( $this + " .content").animate({
			width: "250px",
			height: "0px",
			padding: "0px"
		}).css({
			overflow: "hidden"
		});
		$( this ).css({transform: "rotateX(180deg)"}).removeClass( "minimize" ).addClass( "maximize" );
	}) .on( "click", ".window .title .maximize", function() {
		$this = "#" +  $( this ).parent().parent().get(0).id;

		$( $this + " .url").slideToggle();
		$( $this + " .content").animate({
			width: $( $this + " .content").attr("oldWidth") + "px",
			height: $( $this + " .content").attr("oldHeight") + "px",
			padding: "10px"
		});
		$( $this + " .content").removeAttr("oldWidth", "oldHeight");
		$( this ).css({transform: "rotateX(0deg)"}).removeClass( "maximize" ).addClass( "minimize" );
	});

	$("#mainMenu-search").on( "keydown", function(e) {
		if( $(this).val() && e.which == 13 ) {
			openWindow( "search-window", "Pesquisa", "Url:", $(this).val(), "600", "400", "<iframe src=" + $(this).val() + ">" );
		}
	});

});