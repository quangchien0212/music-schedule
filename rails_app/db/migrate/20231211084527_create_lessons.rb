class CreateLessons < ActiveRecord::Migration[7.0]
  def change
    create_table :lessons do |t|
      t.references :teacher, null: false, foreign_key: {to_table: :users}
      t.references :course, null: false, foreign_key: true
      t.datetime :start_at, null: false
      t.datetime :end_at, null: false
      t.integer :size, default: 1, null: false

      t.timestamps
    end
  end
end
