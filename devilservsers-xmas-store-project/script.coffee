$ ->

  $("*[animated]").each ( index, callback ) ->
    $this = $ this
    $.each callback.attributes, ( index, callback ) ->
      $val = callback.value.split " "
      if callback.name == "animated"
        $this
          .addClass("animated " + $val[0] )
          .css("animation-delay", $val[1] + "s" )
          .css("animation-duration", $val[2] + "s" )

  $("#messageSlider #indexes div").on "click", ->
    $this = $ this
    $attr = ( attr ) ->
      return $this.children( "." + attr ).text()
    $("#messageSlider #text").fadeOut ->
      $( this ).children().empty()
      $( this ).children("h1").prepend $attr("title")
      $( this ).children("h4").prepend $attr("text")
    .delay( 10 ).fadeIn()
    $("#messageSlider #indexes div").removeClass "selected"
    $this.addClass "selected"
  $("#messageSlider #indexes div:first").trigger "click"

  $(".card").each ->

    $this = this
    attr = ( attr ) ->
      return $( "." + attr, $this ).text().split(" | ")
    source = "\
      <div class='title'></div>\
      <div class='text'></div>"

    $ this
      .prepend source
      .css {
        backgroundImage: "url( #{attr("fundo")[0]} )"
        backgroundColor: attr("fundo")[1] }

    $ ".title", this
      .prepend attr("titulo")[0]

    $ ".text", this
      .prepend attr("texto")[0]
      .css {
        marginTop: ( Math.round( $( $this ).width() * .1 ) / .1 ) * .5 }

    $ ".fundo, .titulo, .texto", this
      .remove()
  $("#purchase-cancel") .on "click", ->
    $ "#shop"
      .removeClass "purchase-mode"
      .addClass "cards-mode"
    $ "#cards"
      .show()
    $ "#purchaseScreen"
      .hide()

  $.fn.mSwitch = ( a, b ) ->

    mSwitch = {
      id: $(this).attr("id") + "-mSwitch",
      value: a,
      checked: new String
    }
    if ( a == true )
      mSwitch.checked = "checked"

    $ this
      .prepend "\
    			<input type='checkbox' class='mSwitch' id='" + mSwitch.id + "'" + mSwitch.checked + ">\
    	    	<label for=" + mSwitch.id + ">\
        			<div class='mSwitch-checkedTrack'></div>\
        			<div class='mSwitch-thumb'></div>\
        		</label>\
    		"
      .addClass "mSwitch-content"
      .attr { value: mSwitch.value }

    $ "label", this
      .on "click", ->
        if( $( this ).parent().attr("value") == "true" )
          $( this ).parent().attr({ value: false })
          $b = false
        else
          $( this ).parent().attr({ value: true })
          $b = true
        b( $b )

  paymentForm = "pagseguro"

  $("#payService-switcher").mSwitch false , ( a ) ->

    if a == true
      $("#pagseguro").removeClass "selected"
      $("#moip").addClass "selected"
      paymentForm = "moip"
    else
      $("#moip").removeClass "selected"
      $("#pagseguro").addClass "selected"
      paymentForm = "pagseguro"
      
  $("*[ openLink ]").on "click", ->
      attr = $( this ).attr("openLink").split(" | ")
      window.open attr[0], attr[1], attr[2]

  shopItems =
    comboDG:
      name: "Combo DevilGames2"
      price: 15
      color: "#b36262"
      text: "
        - Uma de key Vip Dima de 35 dias;<br />
        - Uma key de Glorius Equilibrium;<br />
        - Uma caixa de RI's;<br />
        - Lançador de fogos de artifício;"
    comboDP:
      name: "Combo DevilPlay"
      price: 15
      color: "#62b365"
      text: "
        - Uma de key Vip Dima de 35 dias;<br />
        - Duas caixas de itens;<br />
        - Kit armas;<br />
        - Lançador de fogos de artifício;"
    comboDJ:
      name: "Combo DevilJail"
      price: 15
      color: "#b362b0"
      text: "
        - Uma de key Vip Dima de 35 dias;<br />
        - Duas caixas de itens;<br />
        - Bonus de $25.000 ao ativar;<br />"
    
  purchaseScreen = ( item ) ->
    $ "#shop"
      .removeClass "cards-mode"
      .addClass "purchase-mode"
    $ "#cards"
      .hide()
    $ "#purchaseScreen"
      .show()
    $ "body"
      .animate {
        scrollTop: $("#shop").offset().top - 20, 500 }

    $ "#purchaseScreen .left .header"
      .css {
        backgroundImage: "url(images/#{item}.png)"
        backgroundColor: shopItems[item].color }
    $ "#purchaseScreen .left .info .name"
      .empty()
      .prepend shopItems[item].name
    $ "#purchaseScreen .left .info .price"
      .empty()
      .prepend "R$ #{shopItems[item].price}"
    $ "#purchaseScreen .right"
      .empty()
      .prepend shopItems[item].text
      .css {
        borderRightColor: shopItems[item].color }

    $("#checkTerms").on "click", ->
      if $( this ).is ":checked"
        $ "#purchase-buy"
          .removeClass "buy-notAllowed"
          .addClass "buy-allowed"
        $("#purchaseScreen #purchase-buy").on "click", ->
          console.log "#{shopItems[item].name} via #{paymentForm}"
      else
        $ "#purchase-buy"
          .removeClass "buy-allowed"
          .addClass "buy-notAllowed"
        $("#purchaseScreen #purchase-buy").off "click"

  $(".card").on "click", ->
    purchaseScreen $( this ).attr "shop"