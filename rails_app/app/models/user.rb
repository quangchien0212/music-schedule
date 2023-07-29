class User < ApplicationRecord
  include BCrypt

  has_one :user_role
  has_one :role, through: :user_role
  scope :can_be_teacher, -> { joins(:role).where(role: { name: 'guest' } ) }
  scope :with_name, -> (keyword) {
    tokenized = "%#{Tokenizer.get_ascii(keyword.downcase)}%"
    where('full_name LIKE ?', tokenized)
  }

  has_secure_password

  def admin?
    role.name == 'admin'
  end

  def teacher?
    role.name == 'teacher'
  end
end