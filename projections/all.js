/** 
 *  Autogenerated, do not modify this file directly
 *  Created: 2012-01-17 15:15:10 -0900 
 **/

Gina.Projections.define('EPSG:3338', {
  defaultLayers: [
    'TILE.EPSG:3338.BDL', 'TILE.EPSG:3338.OSM', 'TILE.EPSG:3338.TOPO', 'TILE.EPSG:3338.CHARTS', 
    'TILE.EPSG:3338.SHADED_RELIEF', 'TILE.EPSG:3338.OSM_OVERLAY', 
    'TILE.EPSG:3338.SDMI_ORTHO_RGB','TILE.EPSG:3338.SDMI_ORTHO_CIR','TILE.EPSG:3338.SDMI_ORTHO_GS'
  ],
  maxExtent: new OpenLayers.Bounds(-3500000, -3500000, 3500000, 3500000),
  maxResolution: (3500000 * 2.0 / 256.0),
  units: 'm',
  projection: "EPSG:3338"
});/**
 * Name: Polar Projection
 * EPSG: 3572
 **/
Gina.Projections.define('EPSG:3572', {
  defaultLayers: [
    'TILE.EPSG:3572.BDL', 'TILE.EPSG:3572.OSM', 'TILE.EPSG:3572.TOPO', 'TILE.EPSG:3572.CHARTS', 
    'TILE.EPSG:3572.SHADED_RELIEF', 'TILE.EPSG:3572.OSM_OVERLAY'
  ],
  projection: "EPSG:3572",
  maxResolution: (20037508.34278405 / 256.0),
  maxExtent: new OpenLayers.Bounds(-12742200.0, -7295308.34278405, 7295308.34278405, 12742200.0),
  units: 'm'
});Gina.Projections.define('EPSG:3857', {
  defaultLayers: [
    'TILE.EPSG:3857.BDL', 'TILE.EPSG:3857.OSM', 'TILE.EPSG:3857.TOPO', 'TILE.EPSG:3857.CHARTS', 
    'TILE.EPSG:3857.SHADED_RELIEF', 'TILE.EPSG:3857.OSM_OVERLAY',
    'TILE.EPSG:3857.SDMI_ORTHO_RGB','TILE.EPSG:3857.SDMI_ORTHO_CIR','TILE.EPSG:3857.SDMI_ORTHO_GS'
  ],
  projection: "EPSG:3857",
  maxResolution: 156543.0339,
  maxExtent: new OpenLayers.Bounds(-20037508, -20037508, 20037508, 20037508),
  units: 'm'
});