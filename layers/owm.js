/* Layers from http://openweathermap.org/ */

/**
 * Name: TILE.EPSG:3857.OWM_CLOUDS
 * Projection: EPSG:3857 Web Mercator
 * OpenWeatherMap Clouds Overlay in web mercator
 */
Gina.Layers.define('TILE.EPSG:3857.OWM_CLOUDS', {
  name: 'OpenWeatherMap Clouds',
  type: Gina.Layers.Types.TILE,
  url: 'http://${s}.tile.openweathermap.org/map/clouds/${z}/${x}/${y}.png',
  layerOptions: {
    type: 'png',
    transitionEffect: 'resize',
    wrapDateLine: true,
    visibility: false,
    isBaseLayer: false,
    opacity: 0.7,
    attribution: '(c) <a href="http://www.openweathermap.org">Map data &copy; OpenWeatherMap</a>'
  }
});

/**
 * Name: TILE.EPSG:3857.OWM_PRECIP
 * Projection: EPSG:3857 Web Mercator
 * OpenWeatherMap Precipitation Overlay in web mercator
 */
Gina.Layers.define('TILE.EPSG:3857.OWM_PRECIP', {
  name: 'OpenWeatherMap Precipitation',
  type: Gina.Layers.Types.TILE,
  url: 'http://${s}.tile.openweathermap.org/map/precipitation/${z}/${x}/${y}.png',
  layerOptions: {
    type: 'png',
    transitionEffect: 'resize',
    wrapDateLine: true,
    visibility: false,
    isBaseLayer: false,
    opacity: 0.7,
    attribution: '(c) <a href="http://www.openweathermap.org">Map data &copy; OpenWeatherMap</a>'
  }
});
