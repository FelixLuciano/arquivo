$ ->

  getWindowSize = () ->

    if $( window ).width() < 768
      return xl()
    if $( window ).width() < 992
      return sm()
    if $( window ).width() < 1120
      return md()
    else
      return lg()

  xl = -> #celular
    $ "body"
      .addClass("container-fluid")

  sm = -> #Tablet
    $ "body"
      .removeClass("container-fluid")

  md = -> #laptop
    $ "body"
      .removeClass("container-fluid")

  lg = -> #desktop
    $ "body"
      .removeClass("container-fluid")

  getWindowSize()
  $( window ).resize ->
    getWindowSize()

  $("*.card").each ->

    $this = this
    attr = ( attr ) ->
      return $( "." + attr, $this ).text().split(" | ")
    source = "\
      <div class='title'></div>\
      <div class='text'></div>"

    $ this
      .prepend source

    $ this
      .css {
        backgroundImage: "url( #{attr("imagem")} )" }

    $ ".title", this
      .prepend attr("titulo")[0]
      .css {color: attr("titulo")[1] }

    $ ".text", this
      .prepend attr("texto")[0]
      .css {
        background: attr("texto")[1]
        color: attr("texto")[2]
        marginTop:
          $( $this ).width() - (
            $( ".text", $this ).innerHeight() + $( ".title", $this ).innerHeight()
          ) + "px"
      }

    $ ".imagem,.titulo,.texto", this
      .remove()

  $ "*[animated]"
    .each ( index, callback  )->
      $this = $(this)
      $.each callback.attributes, ( index, callback )->
        $val = callback.value.split(" ")
        if callback.name == "animated"
          $this
            .addClass("animated")
            .addClass( $val[0] )
            .css("animation-delay", $val[1] + "s" )
            .css("animation-duration", $val[2] + "s" )

###  $(".card").on "click", ->
    $this = $( this )
    $this
      .css {
        position: "fixed"
        left: "calc( 50% - " + $this.width() / 2 + "px )"
        top: "calc( 50% - " + $this.height() / 2 + "px )"
      } ###