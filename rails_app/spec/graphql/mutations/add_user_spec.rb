require 'rails_helper'

def query
  <<~GQL
    mutation AddUser($input: AddUserInput!) {
      addUser(input: $input) {
        errors
        success
        user {
          id
          fullName
          email
        }
      }
    }
  GQL
end

RSpec.describe Mutations::AddUser, type: :request do
  describe '.resolve' do
    it 'should add a new user' do
      post '/graphql', params: {
        query: query,
        variables: {
          input: {
            email: "foo@bar.com",
            password: "1",
            fullName: "Foo Bar",
          }
        }
      }

      json = JSON.parse(response.body, object_class: OpenStruct)
      data = json.data.addUser

      expect(data.success).to eq(true)
      expect(data.user.present?).to eq(true)
    end

    it 'should raise an error when user exists' do
      user = create(:user)

      post '/graphql', params: {
        query: query,
        variables: {
          input: {
            email: user.email,
            password: "1",
            fullName: "Foo Bar",
          }
        }
      }

      json = JSON.parse(response.body, object_class: OpenStruct)
      data = json.data.addUser

      expect(data.success).to eq(false)
      expect(data.user.present?).to eq(false)
      expect(data.errors.first).to eq("This user already exists")
    end
  end
end
