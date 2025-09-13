Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up", to: "rails/health#show", as: :rails_health_check

  root 'home#index'

  devise_for :users, controllers: { sessions: 'api/v1/sessions' }

  namespace :api do
    namespace :v1 do
      resources :users
      resources :time_zones
    end
  end

  match '*path', to: 'application#options', via: :options
  match '*path', to: 'home#index', via: [:get]

end
