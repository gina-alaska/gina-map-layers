GINA Map Layers Javascript Library
==================================

This project is a library used to inject GINA Map layers into various web map apis.


Supported Web Map APIs
----------------------

* OpenLayers v2.11


Usage
-----

Include the base library and layer definitions to the html of your website

    <script src="gina-map-layers/gina.js" type="text/javascript"></script>
    <script src="gina-map-layers/layers/bdl.js" type="text/javascript"></script>
    <script src="gina-map-layers/layers/chart.js" type="text/javascript"></script>
    <script src="gina-map-layers/layers/landsat.js" type="text/javascript"></script>
    <script src="gina-map-layers/layers/osm.js" type="text/javascript"></script>
    <script src="gina-map-layers/layers/shaded_relief.js" type="text/javascript"></script>
    <script src="gina-map-layers/layers/topo.js" type="text/javascript"></script>
    
Include the builder for you desired web api,

  OpenLayers: 

    <script src="gina-map-layers/builders/openlayers.js" type="text/javascript"></script>