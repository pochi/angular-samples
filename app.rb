require 'sinatra/base'

class Hello < Sinatra::Base
  get '/' do
    'Hello, world'
  end
end
