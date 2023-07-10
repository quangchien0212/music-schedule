class CreateRolePermissions < ActiveRecord::Migration[7.0]
  def change
    create_table :role_permissions do |t|
      t.references :role, :foreign_key => true, null: false
      t.references :permission, :foreign_key => true, null: false

      t.timestamps
    end
  end
end
