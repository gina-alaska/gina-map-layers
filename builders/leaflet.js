Gina.layerHandlers = {
  inject: function(map, layer) {
    return map.addLayer(layer, true);
  },
  tile: function(params) {
    var url = params.url.replace("${x}", "{x}").replace("${y}", "{y}").replace("${z}", "{z}").replace("${s}", "{s}");
    return L.tileLayer(url, params.layerOptions);
  },
  wms: function(params) {
    return L.tileLayer.wms(
      params.url, params.wmsOptions
    );
  }
};

Gina.Projections.build = function(epsg) {
  var config = Gina.Projections.get('EPSG:3857');
  if(config) {
    var from = new OpenLayers.Projection(config.projection);
    var to = new OpenLayers.Projection(epsg);

    config.projection = epsg;
    config.maxExtent.transform(from, to);
    config.maxResolution = (config.maxExtent.getSize().w * 2 / 256.0);  
    
    return config;        
  }
  
  return null;
};
