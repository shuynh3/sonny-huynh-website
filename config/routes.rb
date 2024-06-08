Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.

  # Defines the root path route ("/")
  # root "posts#index"
  root "home#index"

  resources :home, only: [:index]

  get :about, to: 'home#about', as: :about
  get :career, to: 'home#career', as: :career
  get :contact, to: 'home#contact', as: :contact
  get :projects, to: 'home#projects', as: :projects
  get :skills, to: 'home#skills', as: :skills
end
