class LeanerLesson < ApplicationRecord
  belongs_to :leaner, class_name: "User::Leaner", foreign_key: :leaner_id
  belongs_to :lesson
end