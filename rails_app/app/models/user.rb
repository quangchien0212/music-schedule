class User < ApplicationRecord
  include BCrypt

  has_one :user_role
  has_one :role, through: :user_role

  has_secure_password

  def admin?
    role.name == 'admin'
  end
end