module Spree
  module Admin
    class ContactUsController < Spree::Admin::BaseController
      before_action :find_contact, except: [:index]

      def index
      	@contacts = Spree::ContactUs.all
      end 
      def show
      end 
      def destroy
        @contact.destroy
        redirect_to admin_contact_us_path
      end 	
      
      private
        
        def find_contact
          @contact = Spree::ContactUs.find(params[:id])
        end
    end
  end
end

