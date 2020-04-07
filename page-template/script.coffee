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
    $("body").addClass("container-fluid")

  sm = -> #Tablet
    $("body").removeClass("container-fluid")

  md = -> #laptop
    $("body").removeClass("container-fluid")

  lg = -> #desktop
    $("body").removeClass("container-fluid")

  getWindowSize()
  $( window ).resize ->
    getWindowSize()

  $("*[animated]").each ( index, callback  )->
    $this = $(this)
    $.each callback.attributes, ( index, callback )->
      $val = callback.value.split(" ")
      if callback.name == "animated"
        $this
          .addClass("animated")
          .addClass( $val[0] )
          .css("animation-delay", $val[1] + "s" )
          .css("animation-duration", $val[2] + "s" )

  $("#slideBox #indexes div").on "click", ->
    $this = $( this )
    $attr = ( attr ) ->
      return $this.children( "." + attr ).text()
    $("#header").css {
      backgroundImage: "url(" + $attr("image") + ")" }
    $("#slideBox #text").fadeOut ->
      $( this ).children().empty()
      $( this ).children("h1").prepend( $attr("title") )
      $( this ).children("h4").prepend( $attr("text") )
    .delay( 10 ).fadeIn()
    $("#slideBox #indexes div").removeClass("selected")
    $this.addClass("selected")
  $("#slideBox #indexes div:first").trigger("click")