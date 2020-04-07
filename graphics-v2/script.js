$( document ).ready( function() {

	$.fn.graphic = function( a ) {

		function getHighest() {
			var $m = 0;
			for( i in a ) {
				$m = Math.max( a[ i ], $m );
			}
			return $m;
		}


		function gLength() {

			$r = {
				bar: new String(),
				val: new String(),
			};

			for( i in a ) {
				$r.val += "<td class='graphic-val'><div>" + a[i] + "</td>";
				$r.bar += "<td class='graphic-bar'><div style=height:" + a[i] / getHighest() * 100 + "%;></td>";
			}

			return $r;
		}

		gSource = "\
		<table class='graphic-table'>\
			<tr>\
				" + gLength().bar + "\
			</tr> <tr>\
				" + gLength().val + "\
			</tr>\
		</table>\
		"

		$( this ).empty() .prepend( gSource );

	}

	$("#graphic").graphic([ "69", "55", "124", "67", "60", "100", "20", "85" ]);

});