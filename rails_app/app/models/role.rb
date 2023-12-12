class Role < ApplicationRecord 
  NAMES = %w(
    guest
    teacher
    leaner
    admin
  )

  has_many :role_permissions
  has_many :permissions, through: :role_permissions

  validates :name, inclusion: { in: NAMES }
end