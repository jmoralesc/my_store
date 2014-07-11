class AddContacUs < ActiveRecord::Migration
  def change
  	create_table :spree_contact_us do |t|
      t.string :topic
      t.string :email

      t.timestamps
    end   
  end
end
