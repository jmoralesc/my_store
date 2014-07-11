Deface::Override.new(:virtual_path => 'spree/shared/_footer',
  :name => 'add_link_to_contact_us',

  :insert_after => "erb[loud]:contains(\"link_to 'Spree'\")",
  :text => "
    <%= link_to 'Contact us', new_contact_u_path %>
  ")