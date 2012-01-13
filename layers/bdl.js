/** Alaska Albers **/
Gina.Layers.define('TILE.EPSG:3338.BDL', {
  name: 'Best Data Layer',
  type: Gina.Layers.Types.TILE, 
  url: 'http://swmha.gina.alaska.edu/tilesrv/bdl_esri_test/tile/${x}/${y}/${z}',
  layerOptions: {
    type: 'jpeg',
    transitionEffect: 'resize',
    wrapDateLine: false,
    visibility: true,
    isBaseLayer: true
  }
});

/** Polar Projection **/
Gina.Layers.define('TILE.EPSG:3572.BDL', {
  name: 'Best Data Layer',
  type: Gina.Layers.Types.TILE, 
  url: 'http://tiles.gina.alaska.edu/test/tilesrv/bdl_polar/tile/${x}/${y}/${z}',
  layerOptions: {
    type: 'jpeg',
    transitionEffect: 'resize',
    wrapDateLine: false,
    visibility: true,
    isBaseLayer: true
  }
});

/** Google Projection **/
Gina.Layers.define('TILE.EPSG:3857.BDL', {
  name: 'Best Data Layer',
  type: Gina.Layers.Types.TILE, 
  url: 'http://swmha.gina.alaska.edu/tilesrv/bdl/tile/${x}/${y}/${z}',
  layerOptions: {
    type: 'jpeg',
    transitionEffect: 'resize',
    wrapDateLine: true,
    visibility: true,
    isBaseLayer: true
  }
});

Gina.Layers.define('WMS.BDL', {
  name: 'Best Data Layer',
  type: Gina.Layers.Types.WMS, 
  url: 'http://wms.alaskamapped.org/cgi-bin/bdl.cgi?',
  wmsOptions: {
    layers: "bdl_low_full,bdl_low_overview,bdl_mid_res_overview,bdl_mid_res_full,bdl_high_res_full,bdl_high_res_overview",
    transparent: false
  },
  layerOptions: {
    wrapDateLine: false,
    isBaseLayer: true
  }
});
