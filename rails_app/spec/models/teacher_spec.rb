require 'rails_helper'

RSpec.describe Teacher, type: :model do
  before(:each) do
    Role.create(name: 'teacher')
  end

  describe "create" do
    it 'user should have a teacher role' do
      teacher = Teacher.create(
        full_name: 'Teacher',
        email: 'teacher@example.com',
        password: '1',
        grade: 'grade_1',
      )
      expect(teacher.valid?).to eq true
      expect(teacher.teacher?).to eq true
    end
  end
end
