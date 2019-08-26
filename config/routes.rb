Rails.application.routes.draw do
  root to: 'static_pages#roadmap'

  namespace :admin do
    root to: 'boards#index'

    resources :boards
    resources :post_statuses
    resources :users
  end
  
  devise_for :users

  resources :boards, only: [:show]
end
