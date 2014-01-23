/* Layers from http://openweathermap.org/ */

/**
 * Name: TILE.EPSG:3857.OWM_CLOUDS
 * Projection: EPSG:3857 Web Mercator
 * OpenWeatherMap Overlay in web mercator
 */
Gina.Layers.define('TILE.EPSG:3857.OWM_CLOUDS', {
  name: 'OpenWeatherMap Clouds',
  type: Gina.Layers.Types.TILE,
  url: 'http://tile.openweathermap.org/map/clouds/${z}/${x}/${y}.png',
  layerOptions: {
    type: 'png',
    transitionEffect: 'resize',
    wrapDateLine: true,
    visibility: false,
    isBaseLayer: false,
    attribution: '(c) <a href="http://www.openweathermap.org">Map data &copy; OpenWeatherMap</a>'
  }
});