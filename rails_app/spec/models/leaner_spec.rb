require 'rails_helper'

RSpec.describe User::Teacher, type: :model do
  before(:each) do
    Role.create(name: 'leaner')
  end

  describe "create" do
    it 'user should have a leaner role' do
      leaner = User::Leaner.create(
        full_name: 'Foo bar',
        email: 'foo.bar@example.com',
        password: '1',
      )
      expect(leaner.valid?).to eq true

      user = User.find(leaner.id)

      expect(user.present?).to eq true
      expect(user.leaner?).to eq true
    end
  end
end