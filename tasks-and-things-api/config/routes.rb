Rails.application.routes.draw do
  resources :habits
  resources :hobbies
  resources :tasks
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
