class AddDisplayNameToUsers < ActiveRecord::Migration[7.1]
  def up
    add_column :users, :display_name, :string

    query = <<~SQL
      UPDATE users
      SET display_name = username
      WHERE display_name is null
    SQL
    ActiveRecord::Base.connection.execute(query)
  end

  def down 
    remove_column :users, :display_name
  end
end
