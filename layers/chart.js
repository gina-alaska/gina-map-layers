/**
 * Name: TILE.EPSG:3857.CHARTS
 * Projection: EPSG:3857 Google Mercator Projection
 * Nautical Charts in Google Mercator Projection, NOT FOR NAVIGATION
 */
Gina.Layers.define('TILE.EPSG:3857.CHARTS', {
  name: 'Nautical Charts',
  type: Gina.Layers.Types.TILE,
  url: 'http://swmha.gina.alaska.edu/tilesrv/charts/tile/',
  layerOptions: {
    type: 'jpeg',
    transitionEffect: 'resize',
    wrapDateLine: false,
    visibility: true,
    isBaseLayer: true
  }
});