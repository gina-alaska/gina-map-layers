Gina.Projections.define('EPSG:3338', {
  defaultLayers: [
    'TILE.EPSG:3338.BDL', 'TILE.EPSG:3338.OSM', 'TILE.EPSG:3338.TOPO', 'TILE.EPSG:3338.CHARTS', 
    'TILE.EPSG:3338.SHADED_RELIEF', 'TILE.EPSG:3338.OSM_OVERLAY'
  ],
  maxExtent: new OpenLayers.Bounds(-3500000, -3500000, 3500000, 3500000),
  maxResolution: (3500000 * 2.0 / 256.0),
  units: 'm',
  projection: "EPSG:3338"
});