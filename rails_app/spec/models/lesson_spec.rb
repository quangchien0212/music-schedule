require 'rails_helper'

RSpec.describe Lesson, type: :model do
  before(:each) do
    Role.create!(name: 'teacher')
    User::Teacher.create!(
      full_name: 'Foo bar',
      email: 'foo.bar@example.com',
      password: '1',
      grade: 'grade_1',
    )

    Course.create!(
      name: 'Course name',
      level: 'beginner',
      status: 'active',
      lessons_to_complete: 1,
      price: 0,
    )
  end


  describe "create" do
    it 'should create a lesson' do
      teacher = User::Teacher.first
      course = Course.first
      expect(teacher.present?).to eq(true)
      expect(course.present?).to eq(true)

      now = DateTime.now

      lesson = Lesson.create(
        teacher: teacher,
        course: course,
        start_at: now,
        end_at: now + 3.hours,
      )

      expect(lesson.present?).to eq(true)
      expect(lesson.valid?).to eq(true)
    end
  end
end