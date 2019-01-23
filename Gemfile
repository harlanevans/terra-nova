source 'https://rubygems.org'

ruby '2.5.1'
# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.2.2'
# Use postgresql as the database for Active Record
gem 'pg', '>= 0.18', '< 2.0'
# Use Puma as the app server
gem 'puma', '~> 3.11'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'bootsnap', '>= 1.1.0', require: false
#Authentication
gem 'devise_token_auth'
gem 'cloudinary'

group :development, :test do
  #Call binding.pry anywhere in teh code to stop execution and get a debugger console
  gem 'pry'
  #Seed Databases
  gem 'faker'
  gem 'dotenv-rails'
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end
