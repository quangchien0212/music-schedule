module Mutations
  class Login < Mutations::BaseMutation
    argument :email, String, :required => true
    argument :password, String, :required => true

    field :user, Types::UserType, :null => true
    field :token, String, :null => true

    def resolve(email:, password:)
      command = AuthenticateUser.call(email, password)

      if command.success?
        return {
          token: command.result,
          user: User.find_by_email(email),
          success: true,
          errors: [],
        }
      else
        return {
          errors: command.errors,
          success: false,
        }
      end
    end
  end
end