Gina.Projections.define('EPSG:3857', {
  defaultLayers: [
    'TILE.EPSG:3857.BDL', 'TILE.EPSG:3857.OSM', 'TILE.EPSG:3857.TOPO', 'TILE.EPSG:3857.CHARTS', 
    'TILE.EPSG:3857.SHADED_RELIEF', 'TILE.EPSG:3857.OSM_OVERLAY'
  ],
  projection: "EPSG:3857",
  maxResolution: 156543.0339,
  maxExtent: new OpenLayers.Bounds(-20037508, -20037508, 20037508, 20037508),
  units: 'm'
});