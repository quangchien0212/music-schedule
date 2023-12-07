require 'rails_helper'

RSpec.describe User::Teacher, type: :model do
  before(:each) do
    Role.create(name: 'teacher')
  end

  describe "create" do
    it 'user should have a teacher role' do
      teacher = User::Teacher.create(
        full_name: 'Foo bar',
        email: 'foo.bar@example.com',
        password: '1',
        grade: 'grade_1',
      )
      expect(teacher.valid?).to eq true

      user = User.find(teacher.id)

      expect(user.present?).to eq true
      expect(user.teacher?).to eq true
    end
  end
end
