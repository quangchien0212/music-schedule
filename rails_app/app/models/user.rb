class User < ApplicationRecord
  include BCrypt

  has_one :user_role
  has_one :role, through: :user_role
  scope :with_teacher_role, -> { joins(:role).where(role: { name: 'teacher' } ) }

  has_secure_password

  def admin?
    role.name == 'admin'
  end

  def teacher?
    role.name == 'teacher'
  end
end