$ ->

  $ ".menuitem"
    .mouseover ->
      $this = $( this )
      $ "#menuItem-hover"
        .addClass "visible"
        .css
          left: ( $this.offset().left + $this.innerWidth() / 2 ) - $("#menuItem-hover").width() / 2
    .mouseout ->
      $ "#menuItem-hover"
        .removeClass "visible"

  $( document ).scroll ->
    if $( this ).scrollTop() > $("#header").height() / 3
      $("#mainMenu").addClass "scroll"
    else
      $("#mainMenu").removeClass "scroll"

  $(".square").each ->
    $this = $( this )
    $this.css
      width: $this.height()
    $( window ).resize ->
      $this.css
        width: $this.height()