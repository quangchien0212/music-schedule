require 'rails_helper'

RSpec.describe Lesson, type: :model do
  before(:each) do
    Role.create!(name: 'teacher')
    Role.create!(name: 'learner')

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

    User::Learner.create!(
      full_name: 'Learner foo bar',
      email: 'foo.bar@learner.com',
      password: '1',
    )
  end


  describe "create" do
    it 'should create a lesson' do
      teacher = User::Teacher.first
      course = Course.first
      learner = User::Learner.first
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

  it 'should add learner to lesson' do
    teacher = User::Teacher.first
    course = Course.first
    learner = User::Learner.first
    expect(teacher.present?).to eq true
    expect(learner.present?).to eq true
    expect(course.present?).to eq true
    now = DateTime.now

    lesson = Lesson.create!(
      teacher: teacher,
      course: course,
      start_at: now,
      end_at: now + 3.hours,
    )
    lesson.learners.push(learner)
    lesson.save!

    expect(lesson.valid?).to eq(true)
    expect(lesson.learners.length).to eq(1)
    expect(lesson.learners.first.id).to eq(learner.id)
    expect(learner.lessons.first.id).to eq(lesson.id)
  end
end
