require "rubygems"
require "bundler/setup"

# require your gems as usual
require "uglifier"

class Build < Thor
  include Thor::Actions
  include Thor::Shell
  
  desc 'layers', 'Build all.js file for layers'
  def layers
    layers = ""    
    each_layer { |file| layers += File.read(file) }
    
    create_file 'layers/all.js', file_header + layers 
  end
  
  desc 'gina', 'Build various gina-all.js files'
  def gina
    build_blob('openlayers')
    build_blob('googlemaps3')
    build_blob('bingmaps63')
    build_blob('bingmaps7')
  end
  
  def self.source_root
    File.join(File.dirname(__FILE__), '..')
  end

  no_tasks do
    def build_blob(builder)
      layers = ""    
      each_layer { |file| layers += File.read(file) }
      
      create_file "debug/gina-#{builder}.js", file_header + File.read('gina.js') + layers + File.read("builders/#{builder}.js")
      create_file "gina-#{builder}.js", Uglifier.compile(File.read("debug/gina-#{builder}.js"))
    end
     
    def each_layer(&block)
      path = File.join(File.dirname(__FILE__), '../layers')
      
      Dir.glob(File.join(path, '*.js')).each do |file|
        next if file =~ /all.js$/
        yield file
      end
    end
         
    def file_header
<<-EOF
/** 
 *  Autogenerated, do not modify this file directly
 *  Created: #{Time.now} 
 **/

EOF
    end
  end
end