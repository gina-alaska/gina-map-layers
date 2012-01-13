//= require_self
//= require_tree ./layers

(function() {
  var global = this;
  
  if(typeof Gina === 'undefined') {
    global.Gina = {};
  }
  Gina.global = global;
  
  Gina.Projections = {
    define: function(name, options){
      Gina.Projections[name] = options;
    },
    get: function(name) {
      return Gina.Projections[name];
    }
  }
  
  Gina.layerHandlers = {};
  
  Gina.Layers = {
    Types: { TILE: 'tile', WMS: 'wms' },
    
    /**
    * Get the map layer object, create it if needed
    **/
    get: function(name){
      var components = name.split('.'), index;
      var layer = Gina.Layers;
      var item;
      
      for(index = 0; index < components.length; index++) {
        item = components[index];
        
        if(!layer[item]) { return null; }
        layer = layer[item];
      }
      
      /* If layer def has a type then run it through the layer builder */
      if(layer && layer.type && Gina.layerHandlers[layer.type]) {
        return (Gina.layerHandlers[layer.type])(layer);
      } else {
        return layer;        
      }
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
      return Gina.Layers.get(name) !== null;
    },
    
    inject: function(map, layers){
      for(var ii = 0; ii < layers.length; ii++) {
        if(Gina.Layers.exists(layers[ii])) {
          Gina.layerHandlers.inject(map, Gina.Layers.get(layers[ii]));         
        }
      }
    }
  };
})();