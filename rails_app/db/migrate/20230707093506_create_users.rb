class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string  :email, null: false
      t.string  :email_candidate, null: true
      t.datetime  :email_change_requested_at, null: true
      t.string  :password_digest, null: false
      t.string  :full_name, null: false

      t.boolean  :is_deleted, null: false, default: false
      t.boolean  :enabled, null: false, default: true
      t.boolean  :locked, null: false, default: false

      t.timestamps
    end
  end
end
