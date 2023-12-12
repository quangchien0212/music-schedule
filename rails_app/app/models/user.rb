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

  class << self
    def create_user_by_role(email:, full_name:, password:, role:)
      create(email: email, full_name: full_name, password: password, role: Role.find_by_name(role))
    end
  end

  def admin?
    role.name == 'admin'
  end

  def teacher?
    role.name == 'teacher'
  end

  def learner?
    role.name == 'learner'
  end
end