GINA Map Layers Javascript Library
==================================

This project is a library used to inject GINA Map layers into various web map apis.

Examples can be found at http://github.com/gina-alaska/gina-map-layers-examples

Supported Web Map APIs
----------------------

* OpenLayers 2.11
* Google Maps 3
* Bing Maps 6.3, 7.0
* ArcGIS JS API 2.6
* Leaflet 0.6+

Downloading the library
-----------------------

Using bower:

    bower install https://github.com/gina-alaska/gina-map-layers.git
    
Download zip:

    https://github.com/gina-alaska/gina-map-layers/releases/tag/1.0.2
    
Clone from github

    git clone https://github.com/gina-alaska/gina-map-layers.git

Include the adapter for your map library
-------------------

The adapter file includes the base library and layer definitions for the specified map api.

  Leaflet

    <script src="gina-map-layers/adapters/leaflet.js" type="text/javascript"></script>   

  OpenLayers: 

    <script src="gina-map-layers/adapters/openlayers.js" type="text/javascript"></script>
    
  Google Maps: 

    <script src="gina-map-layers/adapters/googlemaps3.js" type="text/javascript"></script>
  
  Bing Maps 6.3
  
    <script src="gina-map-layers/adapters/bingmaps63.js" type="text/javascript"></script>
    
  Bing Maps 7.0

    <script src="gina-map-layers/adapters/bingmaps7.js" type="text/javascript"></script>
 
  ArcGIS JS API 2.6 

    <script src="gina-map-layers/adapters/arcgis26.js" type="text/javascript"></script>

Adding layers into your map object
--------------------------------------

Using the Gina.Layers.inject method you can add one or more layers to a map object at the same time:

This will inject the Spherical Mercator tile projection into your map object  
  
    Gina.Layers.inject(map, 'TILE.EPSG:3857.BDL');
  
You can also inject multiple layers by providing an array with each layer to add
  
    Gina.Layers.inject(map, ['TILE.EPSG:3857.BDL', 'TILE.EPSG:3857.OSM']);
    
Limited wildcard support is also available, include all tiles for the spherical mercator projection
  
    Gina.Layers.inject(map, 'TILE.EPSG:3857.*');
    
Leaflet Example:
  
    <script type="text/javascript" charset="utf-8">
        var map = L.map('map').setView([64.8595627003585, -147.84934364372472], 4)
        map.addLayer(Gina.Layers.get('TILE.EPSG:3857.BDL'));
    </script>

OpenLayers Example:

    <script type="text/javascript" charset="utf-8">
      var map;
      function initialize() {
        map = new OpenLayers.Map("map");

        /* Inject all spherical mercator tile layers into the map */
        Gina.Layers.inject(map, 'TILE.EPSG:3857.*');

        map.addControl(new OpenLayers.Control.LayerSwitcher());
        map.zoomToMaxExtent();        
      }
    </script>
    
Getting a layer object
----------------------

  It is possible to get an object for a specific layer calling the Gina.Layers.get method,
    
  Example getting a reference to the BDL layer:
  
    // Fetch the BDL tile layer object
    var bdl = Gina.Layers.get('TILE.EPSG:3857.BDL');
    // Now manually at the layer to the map
    map.addLayer(bdl);
    
  To find multiple layer objects you can also use the find method
  
    // Find all the layer objects for EPSG:3857 (Spherical Mercator)
    var layers =  Gina.Layers.find('TILE.EPSG:3857.*');
    
    
Available Tile Layers
---------------------

  Projection EPSG:3857 - Spherical Mercator (Google, Bing, OpenLayers)

    Layer ID                        Name
    ------------------------------  ---------------------------------
    TILE.EPSG:3857.BDL              GINA Best Data Layer
    TILE.EPSG:3857.TOPO             USGS Topographic DRG
    TILE.EPSG:3857.CHARTS           NOAA Nautical Charts DRG
    TILE.EPSG:3857.SHADED_RELIEF    GINA Shaded Relief (NED)
    TILE.EPSG:3857.LANDSAT_PAN      Panchromatic Landsat
    TILE.EPSG:3857.ORTHO_RGB        Alaska Ortho Project Natural Color (Overlay)
    TILE.EPSG:3857.ORTHO_CIR        Alaska Ortho Project Color Infrared (Overlay)
    TILE.EPSG:3857.ORTHO_GS         Alaska Ortho Project Grayscale (Overlay)
    
  Projection EPSG:3338 - Alaskan Albers (OpenLayers)

    Layer ID                        Name
    ------------------------------  ---------------------------------
    TILE.EPSG:3338.BDL              GINA Best Data Layer
    TILE.EPSG:3338.TOPO             USGS Topographic DRG
    TILE.EPSG:3338.SHADED_RELIEF    GINA Shaded Relief (NED)
    TILE.EPSG:3338.OSM              OpenStreetMaps Base Layer
    TILE.EPSG:3338.OSM_OVERLAY      OpenStreetMaps Roads & Cities (Overlay)
    TILE.EPSG:3338.ORTHO_RGB        Alaska Ortho Project Natural Color (Overlay)
    TILE.EPSG:3338.ORTHO_CIR        Alaska Ortho Project Color Infrared (Overlay)
    TILE.EPSG:3338.ORTHO_GS         Alaska Ortho Project Grayscale (Overlay)
    
  Projection EPSG:3572 - Alaskan Centric Polar Projection (OpenLayers)

    Layer ID                        Name
    ------------------------------  ---------------------------------
    TILE.EPSG:3572.BDL              GINA Best Data Layer
    TILE.EPSG:3572.OSM              OpenStreetMaps Base Layer
    TILE.EPSG:3572.OSM_OVERLAY      OpenStreetMaps Roads & Cities (Overlay)


License
-------

See LICENSE file for licensing and credits.  Think BSD/MIT.
