require 'rails_helper'

RSpec.describe Lesson, type: :model do
  before(:each) do
    Role.create!(name: 'teacher')
    Role.create!(name: 'leaner')

    User::Teacher.create!(
      full_name: 'Foo bar',
      email: 'foo.bar@teacher.com',
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

    User::Leaner.create!(
      full_name: 'Leaner foo bar',
      email: 'foo.bar@leaner.com',
      password: '1',
    )
  end


  describe "create" do
    it 'should create a lesson' do
      teacher = User::Teacher.first
      course = Course.first
      leaner = User::Leaner.first
      expect(teacher.present?).to eq true
      expect(course.present?).to eq true

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

  it 'should add leaner to lesson' do
    teacher = User::Teacher.first
    course = Course.first
    leaner = User::Leaner.first
    expect(teacher.present?).to eq true
    expect(leaner.present?).to eq true
    expect(course.present?).to eq true
    now = DateTime.now

    lesson = Lesson.create!(
      teacher: teacher,
      course: course,
      start_at: now,
      end_at: now + 3.hours,
    )
    lesson.leaners.push(leaner)
    lesson.save!

    expect(lesson.valid?).to eq(true)
    expect(lesson.leaners.length).to eq(1)
    expect(lesson.leaners.first.id).to eq(leaner.id)
    expect(leaner.lessons.first.id).to eq(lesson.id)
  end
end
