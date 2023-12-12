class LearnerLesson < ApplicationRecord
  belongs_to :learner, class_name: "User::Learner", foreign_key: :learner_id
  belongs_to :lesson
end