Spree::Core::Engine.routes.draw do
 
  resources :contact_us, only: [:new, :create]
  namespace :admin do
    resources :contact_us, only: [:index, :show, :destroy]
  end 	

end
