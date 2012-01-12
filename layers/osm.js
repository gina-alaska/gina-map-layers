/**
 * Name: TILE.EPSG:3338.OSM
 * Projection: EPSG:3338 Alaskan Albers
 * OpenStreetMap Baselayer in Alaskan Albers Projection
 */
Gina.Layers.define('TILE.EPSG:3338.OSM', {
  name: 'OpenStreetMap',
  type: Gina.Layers.Types.TILE,
  url: 'http://tiles.proto.gina.alaska.edu/test/tilesrv/osm/tile/${x}/${y}/${z}',
  layerOptions: {
    type: 'jpeg',
    transitionEffect: 'resize',
    wrapDateLine: false,
    visibility: true,
    isBaseLayer: true
  }
});

/**
 * Name: TILE.EPSG:3338.OSM_OVERLAY
 * Projection: EPSG:3338 Alaskan Albers
 * OpenStreetMap road and city overlay in Alaskan Albers projection
 */
Gina.Layers.define('TILE.EPSG:3338.OSM_OVERLAY', {
  name: 'OpenStreetMap - Roads & Cities',
  type: Gina.Layers.Types.TILE,
  url: 'http://tiles.proto.gina.alaska.edu/test/tilesrv/osm-google-ol/tile/${x}/${y}/${z}',
  layerOptions: {
    type: 'jpeg',
    transitionEffect: 'resize',
    wrapDateLine: false,
    visibility: true,
    isBaseLayer: false
  }
});