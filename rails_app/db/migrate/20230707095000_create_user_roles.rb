class CreateUserRoles < ActiveRecord::Migration[7.0]
  def change
    create_table :user_roles do |t|
      t.references :user, :foreign_key => true, null: false
      t.references :role, :foreign_key => true, null: false

      t.timestamps
    end
  end
end
