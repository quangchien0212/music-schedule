class User::Teacher < User
  self.table_name = 'users'
  GRADES = %w(
    grade_1
    grade_2
    grade_3
    grade_4
    grade_5
  )

  default_scope { joins(:role).where(role: { name: 'teacher' } ) }
  validates :grade, inclusion: { in: GRADES }
  before_create :add_role

  private

  def add_role
    self.role = Role.find_by_name('teacher')
  end
end
