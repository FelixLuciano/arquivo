$ ->

  obstacles = [
    "5 3"
  ]

  getMap = ( info ) ->
    if info
      return $("#warzone").data( info )
    else
      return $("#warzone")

  $.each obstacles, ( i ) ->
    createObstacle = ( x, y ) ->
      return "<div class='obstacle' style='margin-left: #{x}px;margin-top: #{y}px;'></div>"
    getObstaclePos = obstacles[i].split(" ")
    getMap()
      .prepend createObstacle( Number( getObstaclePos[0] ) * 50, Number( getObstaclePos[1] ) * 50 )
    $ ".obstacle:nth-child(1)"
      .data "location", {
        x: Number( getObstaclePos[0] )
        y: Number( getObstaclePos[1] ) }

  getPlayer = ( info ) ->
    if info
      return $("#player").data( info )
    else
      return $("#player")

  locationUpdate = ->
    getPlayer()
      .css {
        marginLeft: getPlayer("location").x * 50
        marginTop: getPlayer("location").y * 50 }

  createMap = ( width, height ) ->
    getMap()
      .css {
        width: width * 50
        height: height * 50 }
      .data "mapSize", { x: width, y: height }
    getPlayer()
      .data "location", { x: 0, y: 0 }

  createMap( 11, 7 )

  $( document ).keypress ( e ) ->

    key = e.which
    getIfObstacle = ( action )->
      $("*.obstacle").each ->
        if getPlayer("location").y == $( this ).data("location").y && getPlayer("location").x == $( this ).data("location").x
          action()
          locationUpdate()
          return false

    if key == 119 && getPlayer("location").y > 0
      getPlayer("location").y -=1
      locationUpdate()
      getIfObstacle( -> getPlayer("location").y +=1 )

    if key == 97 && getPlayer("location").x > 0
      getPlayer("location").x -=1
      locationUpdate()
      getIfObstacle( -> getPlayer("location").x +=1 )

    if key == 115 && getPlayer("location").y < getMap("mapSize").y - 1
      getPlayer("location").y +=1
      locationUpdate()
      getIfObstacle( -> getPlayer("location").y -=1 )

    if key == 100 && getPlayer("location").x < getMap("mapSize").x - 1
      getPlayer("location").x +=1
      locationUpdate()
      getIfObstacle( -> getPlayer("location").x -=1 )