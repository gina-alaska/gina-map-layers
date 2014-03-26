Gina.Layers.tileLayer = (tilejson) ->
  L.tileLayer(tilejson['tiles'][0], {
    tilejson
  });