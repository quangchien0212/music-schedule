require 'rails_helper'

RSpec.describe User::Teacher, type: :model do
  before(:each) do
    Role.create(name: 'learner')
  end

  describe "create" do
    it 'user should have a learner role' do
      learner = User::Learner.create(
        full_name: 'Foo bar',
        email: 'foo.bar@example.com',
        password: '1',
      )
      expect(learner.valid?).to eq true

      user = User.find(learner.id)

      expect(user.present?).to eq true
      expect(user.learner?).to eq true
    end
  end
end