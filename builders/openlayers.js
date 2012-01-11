Gina.layerBuilders = {
  tile: function(params) {
    return new OpenLayers.Layer.XYZ(params.name, params.url, params.layerOptions);
  },
  wms: function(params) {
    return new OpenLayers.Layer.WMS(
      params.name, params.url, params.wmsOptions, params.layerOptions
    );
  }
};