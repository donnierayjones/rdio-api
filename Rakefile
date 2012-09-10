task :launch do
  %x{sleep 1}
  %x{open http://localhost:8000}
end

task :specrunner do
  %x{sleep 1}
  %x{open http://localhost:8000/specrunner.html}
end

task :server do
  puts "starting server..."
  %x{python -m SimpleHTTPServer}
end

multitask :test => [:server, :specrunner]

task :default => :test
