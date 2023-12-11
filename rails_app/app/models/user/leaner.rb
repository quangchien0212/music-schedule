class User::Leaner < User
  self.table_name = 'users'

  has_many :leaner_lessons
  has_many :lessons, through: :leaner_lessons

  default_scope { joins(:role).where(role: { name: 'leaner' } ) }
  before_create :add_role

  private

  def add_role
    self.role = Role.find_by_name('leaner')
  end
end