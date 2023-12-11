class User::Leaner < User
  self.table_name = 'users'

  default_scope { joins(:role).where(role: { name: 'leaner' } ) }
  before_create :add_role

  private

  def add_role
    self.role = Role.find_by_name('leaner')
  end
end