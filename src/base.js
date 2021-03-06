/**
 * Geographic Information Network of Alaska
 * GINA Web Layers Javascript Library
 * @author Will Fisher
 **/

(function() {
  var global = this;
  
  if(typeof Gina === 'undefined') {
    global.Gina = {
      "isArray": ('isArray' in Array) ? Array.isArray : function(value) {
        return Object.prototype.toString.call(value) === '[object Array]';
      },
      "isString": function(value) {
        return ((typeof value) === 'string');
      }
    };
  }
  Gina.global = global;
  
  Gina.Projections = {
    define: function(name, options){
      Gina.Projections[name] = options;
    },
    get: function(name) {
      if(Gina.Projections[name]) {
        return Gina.Projections[name];        
      } else {
        return Gina.Projections.build(name);
      }
    },
    build: function(name) {
      return false;
    }
  };
  
  Gina.layerHandlers = {};
  
  Gina.Layers = {
    Types: { TILE: 'tile', WMS: 'wms' },
    
    /**
    * Cache of layer objects
    **/
    cache: {},
    
    /**
    * Get the map layer object, create it if needed
    **/
    get: function(name, raw){
      if (!raw && Gina.Layers.cache[name]) {
        return Gina.Layers.cache[name];
      }
      var components = name.split('.'), index;
      var layer = Gina.Layers;
      var item;
      
      for(index = 0; index < components.length; index++) {
        item = components[index];
        
        if(!layer[item]) { return null; }
        layer = layer[item];
      }
      
      /* If layer def has a type then run it through the layer builder */
      Gina.Layers.build(layer);
      
      if(raw) {
        return layer;        
      } else {
        return layer.instance;
      }
    },
    
    build: function(def) {
      // remove caching for now since it isn't compatabile with turbolinks (leaflet issue)
      def.instance = (Gina.layerHandlers[def.type])(def, name);            
    },
    
    getIDs: function(wild) {
      var components = wild.split('.'), index;
      var layer = Gina.Layers;
      var item, path = [];
      var layerNames = [];
      
      for(index = 0; index < components.length; index++) {
        item = components[index];
        
        if(Gina.Layers.isWildcard(item)) { 
          var baseName = path.join('.');
          for(var name in layer) {
            layerNames.push(baseName + '.' + name);            
          }
        } else {
          path.push(item);
        }
        layer = layer[item];
      }
      
      return layerNames;
    },
    
    /**
    * Define the layer for later use, does not instantiate the apporpriate map layer object
    **/
    define: function(name, params){
      var components = name.split('.'),  
          last = (components.length - 1),
          layer = Gina.Layers,
          type, index;
      
      if(params && params.type) { type = params.type; }
      
      for(index = 0; index < (components.length - 1); index++) {
        var item = components[index];
        
        if(!layer[item]) { layer[item] = {}; }
        layer = layer[item];
      }
      
      layer[components[last]] = params;
      
      return layer;
    },
    
    exists: function(name) {
      return Gina.Layers[name] !== null;
    },
    
    isWildcard: function(name) {
      var re = /\*$/;
      return name.match(re);
    },
    
    inject: function(map, layer_names){
      if(Gina.isString(layer_names)) {
        layer_names = [layer_names];
      }
      
      if(Gina.isArray(layer_names)) {
        Gina.Layers.injectEachLayer(map, layer_names);
      } else {
        Gina.Layers.injectLayer(map, layer_names);
      }
    },
    
    find: function(names, raw) {
      var layers = [];
      
      if (Gina.isString(names)) {
        if (Gina.Layers.isWildcard(names)) {
          names = Gina.Layers.getIDs(names);
        } else {
          names = [names];
        }
      }
      
      for(var ii=0; ii<names.length; ii++) {
        layers.push(Gina.Layers.get(names[ii], raw));
      }
            
      return layers;
    },
    
    injectEachLayer: function(map, layers) {
      for(var ii = 0; ii < layers.length; ii++) {
        if (Gina.isString(layers[ii]) && Gina.Layers.isWildcard(layers[ii])) {
          Gina.Layers.inject(map, Gina.Layers.getIDs(layers[ii]));
        } else {
          Gina.Layers.injectLayer(map, layers[ii]);
        }  
      }
    },
    
    injectLayer: function(map, layer) {
      if(Gina.isString(layer) && Gina.Layers.exists(layer)) {
        Gina.layerHandlers.inject(map, Gina.Layers.get(layer), layer);
      } else {
        Gina.layerHandlers.inject(map, layer);
      }
    }
  };
})();
