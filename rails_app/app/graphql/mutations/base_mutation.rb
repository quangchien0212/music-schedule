module Mutations
  class BaseMutation < GraphQL::Schema::RelayClassicMutation
    argument_class Types::BaseArgument
    field_class Types::BaseField
    input_object_class Types::BaseInputObject
    object_class Types::BaseObject


    field :success, Boolean, null: false, description: 'Flag indicating if the mutation was performed'
    field :errors, [String], null: false, description: 'List of errors (if any) that occurred during the mutation'

    def authorize(record, method)
      context[:pundit].pundit_authorize record, method
    end
  end
end
