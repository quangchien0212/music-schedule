class Lesson < ApplicationRecord
  belongs_to :teacher, class_name: "User::Teacher", foreign_key: :teacher_id
  belongs_to :course

  has_many :leaner_lessons
  has_many :leaners, through: :leaner_lessons
end