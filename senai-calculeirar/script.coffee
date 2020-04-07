$ ->

  $ "input[ type='text' ]"
    .each ->
      $ this
        .attr
          onKeyup: "this.setAttribute('value', this.value )"
          value: ""
        .after "<label for='#{$( this ).attr('id')}' >\
                #{$( this ).attr 'floatPlaceholder'}\
                </label>"

  rooms = []
  textFile =
    "Nome | Largura | Comprimento | Area | Perimetro | TUGs | Iluminação\n"

  tableReload = ->

    $ "#table .tableLine"
      .not("#tableHeader")
      .remove()

    textFile =
      "Nome | Largura | Comprimento | &Aacute;rea | Perimetro | TUGs | Iluminação\n"

    for room in rooms
      source = "
            <div class='tableLine'>
              <div class='tableCell col-xs-3'>#{room.nome}</div>
              <div class='tableCell col-xs-2'>#{room.area.toFixed(2)}m²</div>
              <div class='tableCell col-xs-2'>#{room.peri.toFixed(2)}m</div>
              <div class='tableCell col-xs-2'>#{room.tugs}</div>
              <div class='tableCell col-xs-2'>#{room.lumn}va</div>
              <div class='tableCell col-xs-1'><div class='listItem-remove'></div></div>
            </div>"
      sufix = "\n"
      if rooms.indexOf( room ) == rooms.length - 1
        sufix = ""
      textFile +=
        "#{room.nome} | #{room.larg} | #{room.comp} | #{room.area} | #{room.peri} | #{room.tugs} | #{room.lumn + sufix}"

      $ "#table"
        .append source

    console.log textFile

  read = ( data ) ->
    data = data.split /\n/
    data.splice( 0, 1 )
    rooms = []
    for index in data
      room = index.split " | "
      rooms.push
        nome: room[0]
        larg: Number room[1]
        comp: Number room[2]
        area: Number room[3]
        peri: Number room[4]
        tugs: Number room[5]
        lumn: Number room[6]

  $("#mainContent #createMode .actionButton").on "click", ->
    getNameVal = $("#mainContent.createMode #nome").val()
    nome = if getNameVal then getNameVal else "Indefinido"
    larg = Number $("#mainContent.createMode #largura").val().replace ",", "."
    comp = Number $("#mainContent.createMode #comprimento").val().replace ",", "."
    area = larg * comp
    peri = larg * 2 + comp * 2
    tugs = 1 + Math.floor( ( area - 6 ) / 5 )
    tugs = if tugs < 1 then 1 else 1 + tugs
    lumn = Math.floor( ( area - 6 ) / 4 ) * 60
    lumn = if lumn <= 1 then 100 else 100 + lumn

    rooms.push
      nome: nome
      larg: larg
      comp: comp
      area: area
      peri: peri
      tugs: tugs
      lumn: lumn

    tableReload()

    $ "#mainContent.createMode #nome, #mainContent.createMode #largura, #mainContent.createMode #comprimento"
      .val ""
      .attr
        value: ""

  $("body").on "click", ".listItem-remove", ->
    rooms.splice $( this ).parent().parent().index() - 1, 1
    tableReload()

    if rooms.length == 0
      $ "#table"
        .append "
          <div class='tableLine'>
            <div class='tableCell col-xs-12 empty'>Nenhum item para mostrar</div>
          </div>"

  $("#tabMenuOpen").on "click", ->
    $ ".icon", this
      .toggleClass "opened"

    exportFile = URL.createObjectURL new Blob [textFile],
      type: "text/plain"

    $ "a#save", this
      .attr "href", exportFile

  $("#tabMenuOpen #load").on "click", ->
    $("#tabMenuOpen .icon").trigger "click"

    $ this
      .one "change", ->
        $.ajax
          type: "GET"
          url: URL.createObjectURL this.files[0]
          success: ( data ) ->
            read data
            tableReload()

            $ "#mainContent"
              .removeClass "editMode"
              .addClass "createMode"

  $("#tabMenuOpen #edit").on "click", ->
    $ "#mainContent"
      .removeClass "createMode"
      .addClass "editMode"

    $ "#mainContent #editMode #textFile"
      .empty()
      .prepend textFile

  $("#mainContent #editMode .actionButton").on "click", ->
    $ "#mainContent"
      .removeClass "editMode"
      .addClass "createMode"

    read $("#mainContent #editMode #textFile").val()
    tableReload()