# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


Ruby install

Brew:
postgresql
brew services start postgresql

Ruby

rails new open-flights --webpack=react --database=postgresql
bundle exec rails db:create
rails g model Airline name slug image_url
rails g model Review title description score:integer airline:belongs_to

rails db:migrate
rails db:seed

gem "active_model_serializers", require: true

rails server