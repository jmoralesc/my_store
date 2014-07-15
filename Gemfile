source 'https://rubygems.org'

gem 'rails', '4.1.2'
gem 'sass-rails', '~> 4.0.3'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.0.0'
gem 'jquery-rails'
gem 'turbolinks'
gem 'jbuilder', '~> 2.0'
gem 'sdoc', '~> 0.4.0',          group: :doc
gem 'spring',        group: :development


gem 'spree','2.3.1'
gem 'spree_gateway', :git => 'https://github.com/spree/spree_gateway.git', :branch => '2-3-stable'
gem 'spree_auth_devise', :git => 'https://github.com/spree/spree_auth_devise.git', :branch => '2-3-stable'
gem 'spree_paypal_express', :github => "radar/better_spree_paypal_express", :branch => "2-3-stable"
gem 'spree_social', github: 'spree/spree_social', branch: '2-3-stable'
gem 'spree_simple_sales', :path => 'lib/spree_simple_sales'
gem 'spree_contact_us', path: 'lib/spree_contact_us'
gem 'rack-cors', :require => 'rack/cors'

group :development, :test do
  gem 'sqlite3'
  gem 'pry-rails'
end  

group :production do
  gem 'pg'
  gem 'rails_12factor'
end 