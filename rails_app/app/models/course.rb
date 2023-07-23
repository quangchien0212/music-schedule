class Course < ApplicationRecord 
  validates :name, presence: true
  validates :status, inclusion: { in: %w(active) }
  validates :level, inclusion: { in: %w(beginner) }
end