# This migration comes from spree_contact_us (originally 20140710202506)
class AddContacUs < ActiveRecord::Migration
  def change
  	create_table :spree_contact_us do |t|
      t.string :topic
      t.string :email

      t.timestamps
    end   
  end
end
