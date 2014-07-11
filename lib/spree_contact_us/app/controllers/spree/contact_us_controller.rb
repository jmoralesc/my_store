module Spree
  class ContactUsController < Spree::StoreController

    def new 
      @contact_us = ContactUs.new
    end

    def create
      @contact_us = ContactUs.new(contact_params)
      if @contact_us.save
        flash[:success] =  'Your topic has been sent, we will contact you'
        redirect_to root_path
      else
        render :new
      end
    end 

    private
      def contact_params
        params.require(:contact_us).permit(:topic, :email)
      end 
  end
end

