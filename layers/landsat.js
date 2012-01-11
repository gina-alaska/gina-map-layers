/**
 * Name: TILE.EPSG:3857.LANDSAT_PAN
 * Projection: EPSG:3857 Google Mercator Projection
 * Landsat Panchromatic Layer
 */
Gina.Layers.define('TILE.EPSG:3857.LANDSAT_PAN', {
  name: 'Landsat - Panchromatic',
  type: Gina.Layers.Types.TILE,
  url: 'http://swmha.gina.alaska.edu/tilesrv/landsat_pan/tile/',
  layerOptions: {
    type: 'jpeg',
    transitionEffect: 'resize',
    wrapDateLine: false,
    visibility: true,
    isBaseLayer: true
  }
});