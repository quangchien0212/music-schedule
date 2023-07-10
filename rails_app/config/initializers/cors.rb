Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins Rails.application.secrets.allowed_origins
    resource '*',
      headers: :any,
      methods: [:get, :head, :options, :post, :delete]
  end
end
