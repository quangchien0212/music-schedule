module Mutations
  class AddUser < Mutations::BaseMutation
    argument :email, String, :required => true
    argument :full_name, String, :required => true
    argument :password, String, :required => true
    argument :role, String, :required => false, validates: { inclusion: { in: ::Role::NAMES } }, default_value: 'guest'

    field :user, Types::UserType, :null => true

    def resolve(email:, full_name:, password:, role:)
      if ::User.where(email: email).first.present?
        return {
          user: nil,
          success: false,
          errors: ["This user already exists"],
        }
      end

      user = User.create_user_by_role(
        email: email,
        full_name: full_name,
        password: password,
        role: role
      )

      if user.save
        return {
          user: user,
          success: true,
          errors: [],
        }
      else
        return {
          errors: user.errors.full_messages,
          success: false,
        }
      end
    end
  end
end