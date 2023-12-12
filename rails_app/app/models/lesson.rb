class Lesson < ApplicationRecord
  belongs_to :teacher, class_name: "User::Teacher", foreign_key: :teacher_id
  belongs_to :course

  has_many :learner_lessons
  has_many :learners, through: :learner_lessons
end