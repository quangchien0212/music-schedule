module Contexts
  module User
    def ensure_user_session
      raise ::RailsAppSchema::UserSessionRequiredError unless context[:current_user]
    end

    def authorize(record, method)
      context[:pundit].pundit_authorize record, method
    end
  end
end