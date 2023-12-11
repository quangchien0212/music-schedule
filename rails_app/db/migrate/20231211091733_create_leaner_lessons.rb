class CreateLeanerLessons < ActiveRecord::Migration[7.0]
  def change
    create_table :leaner_lessons do |t|
      t.references :leaner, null: false, foreign_key: {to_table: :users}
      t.references :lesson, null: false, foreign_key: true

      t.timestamps
    end
  end
end
