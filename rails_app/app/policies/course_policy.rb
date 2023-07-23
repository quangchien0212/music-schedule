class CoursePolicy
  attr_reader :user, :course

  def initialize(user, course)
    @user = user
    @course = course
  end

  def update?
    user.admin?
  end

  def create?
    user.admin?
  end

  def delete?
    user.admin?
  end
end