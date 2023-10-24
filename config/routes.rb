Rails.application.routes.draw do
  get 'root/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      get 'random_greeting', to: 'greetings#random_greeting'
    end
  end
  # Defines the root path route ("/")
   root 'root#index'
end
