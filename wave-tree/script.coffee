$ ()->

  colors = [
    "red",
    "green",
    "blue",
    "pink",
    "yellow",
    "orange"
  ]

  $ "#box"
    .prepend "<div class='point'></div>" for i in [0...600]

  $("#box .point").each ( index ) ->
    $ this
      .css {
        background: colors[Math.floor(Math.random() * ( colors.length - 0 + 1)) + 0] }
      .animate {
        marginLeft: ( 150 * ( index / 600 ) ) * Math.sin( index / 10 ) + 700
      }, 3000