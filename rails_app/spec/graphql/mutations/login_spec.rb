require 'rails_helper'

def query
  <<~GQL
    mutation Login($input: LoginInput!) {
      login(input: $input) {
        errors
        token
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

RSpec.describe Mutations::Login, type: :request do
  describe '.resolve' do
    it 'should return a token and user' do
      user = create(:user)

      post '/graphql', params: {
        query: query,
        variables: {
          input: {
            email: user.email,
            password: user.password
          }
        }
      }

      json = JSON.parse(response.body, object_class: OpenStruct)
      data = json.data.login
      expect(data.success).to eq(true)

      logged_in_user = data.user

      expect(data.user.id.to_i).to eq(user.id)
    end

    it 'should return an error' do
      user = create(:user)

      post '/graphql', params: {
        query: query,
        variables: {
          input: {
            email: user.email,
            password: "wrong password"
          }
        }
      }

      json = JSON.parse(response.body, object_class: OpenStruct)
      data = json.data.login

      expect(data.success).to eq(false)
      expect(data.user).to eq(nil)
      expect(data.errors.length > 0).to eq(true)
    end
  end
end