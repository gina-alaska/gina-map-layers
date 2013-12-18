require('./leaflet-stub.js');
require('../src/gina.js');
require('../builders/leaflet.js');
require('../layers/all.js');

console.log(Gina.Layers.find('TILE.EPSG:3857.*'));