require "rubygems"
require "bundler/setup"

# require your gems as usual
require "uglifier"

class Build < Thor
  include Thor::Actions
  include Thor::Shell
  
  ADAPTERS = %w{ google openlayers leaflet mapbox }
  
  desc 'all', 'Build all files'
  def all
    invoke :projections
    invoke :layers
    invoke :gina
  end
  
  desc 'layers', 'Build all.js file for layers'
  def layers
    layers = ""    
    each_layer do |file, projection| 
      layers << <<-EOJSON
Gina.Layers.define('TILE.#{projection}.#{File.basename(file, '.*').upcase}', #{File.read(file)});
      EOJSON
    end
    
    create_file 'layers/all.js', file_header + layers 
  end
  
  desc 'gina', 'Build various gina-all.js files'
  def gina
    `coffee --compile --output build/ src/`
    
    build_base_adapter()
    ADAPTERS.each do |adapter|
      build_gina_blob(adapter)
    end
  end
  
  desc 'projections', 'Build all.js for projections'
  def projections
    output = ""    
    each_projection { |file| output += File.read(file) }
    
    create_file 'projections/all.js', file_header + output     
  end
  
  def self.source_root
    File.join(File.dirname(__FILE__), '..')
  end

  no_tasks do
    def build_base_adapter()
      create_file "dist/base-adapter.js", file_header + File.read('build/base.js') + File.read('layers/all.js')
      create_file "dist/base-adapter.min.js", Uglifier.compile(File.read("dist/base-adapter.js"))
    end
    
    def build_gina_blob(builder)      
      create_file "dist/#{builder}-adapter.js", file_header + File.read('build/base.js') + File.read("build/#{builder}.js") + File.read('layers/all.js')
      create_file "dist/#{builder}-adapter.min.js", Uglifier.compile(File.read("dist/#{builder}-adapter.js"))
    end
    
    def each_projection(&block)
      path = File.join(File.dirname(__FILE__), '../projections')
      
      Dir.glob(File.join(path, '*.js')).each do |file|
        next if file =~ /all.js$/
        yield file
      end
    end
     
    def each_layer(&block)
      projections = { "EPSG::3857" => "epsg3857" }
      
      path = File.join(File.dirname(__FILE__), '../layers')
      
      projections.each do |name,dir|
        Dir.glob(File.join(path, dir, '*.tilejson')).each do |file|
          next if file =~ /all.js$/
          yield file, name
        end
      end
    end
         
    def file_header
<<-EOF
/** 
 *  Autogenerated, do not modify this file directly
 * 
 *  Copyright (c) 2011 University of Alaska. All rights reserved.
 * 
 *  Developed by: Will Fisher and Scott Macfarlane
 *                Geographic Information Network of Alaska
 *                University of Alaska Fairbanks
 *                http://www.gina.alaska.edu
 * 
 *  Permission is hereby granted, free of charge, to any person obtaining
 *  a copy of this software and associated documentation files (the
 *  'Software'), to deal in the Software without restriction, including
 *  without limitation the rights to use, copy, modify, merge, publish,
 *  distribute, sublicense, and/or sell copies of the Software, and to
 *  permit persons to whom the Software is furnished to do so, subject to
 *  the following conditions:
 * 
 *  The above copyright notice and this permission notice shall be
 *  included in all copies or substantial portions of the Software.
 * 
 *  THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 *  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 *  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 *  CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 *  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 *  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 **/

EOF
    end
  end
end
