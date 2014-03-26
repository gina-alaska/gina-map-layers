var L = require('./mapbox-stub').L;
console.log(L);
var Gina = require('../dist/mapbox-adapter').Gina;

console.log(Gina.Layers.find('TILE.EPSG:3857.*'));