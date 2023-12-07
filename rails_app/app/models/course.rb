class Course < ApplicationRecord 
  STATUSES = %w(
    active
    disabled
    deleted
  )

  LEVELS = %w(
    beginner
  )

  validates :name, presence: true
  validates :status, inclusion: { in: STATUSES }
  validates :level, inclusion: { in: LEVELS }
  validates :price, :numericality => { :greater_than_or_equal_to => 0 }
  validates :lessons_to_complete, :numericality => { :greater_than_or_equal_to => 0 }

  private

  def set_as_deleted!
    update!(status: 'deleted')
  end

  def active?
    status == 'active'
  end

  def disabled?
    status == 'disabled'
  end

  def deleted?
    status == 'deleted'
  end

  def deletable?
    !active?
  end
end