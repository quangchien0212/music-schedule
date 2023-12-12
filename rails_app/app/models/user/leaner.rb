class User::Learner < User
  self.table_name = 'users'

  has_many :learner_lessons
  has_many :lessons, through: :learner_lessons

  default_scope { joins(:role).where(role: { name: 'learner' } ) }
  before_create :add_role

  private

  def add_role
    self.role = Role.find_by_name('learner')
  end
end