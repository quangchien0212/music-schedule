class UserPolicy < ApplicationPolicy
  attr_reader :user, :record

  def initialize(user, record)
    @user = user
    @record = record
  end

  def update?
    user.admin? || user.id == record.id
  end

  def create?
    user.admin?
  end

  def delete?
    user.admin?
  end

  def show?
    user.admin? || user.id == record.id
  end
end