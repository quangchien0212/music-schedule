class CreateCourses < ActiveRecord::Migration[7.0]
  def change
    create_table :courses do |t|
      t.string :name, null: false
      t.longtext :description, null: true
      t.string :status, null: false
      t.string :level, null: false
      t.integer :lessons_to_complete, null: false
      t.integer :price, null: true

      t.timestamps
    end
  end
end
