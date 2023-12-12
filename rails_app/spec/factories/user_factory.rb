FactoryBot.define do
  factory :user do
    sequence(:email) { |n| "john_#{n}@foobar.com" }
    sequence(:full_name) { |n| "John Smith (#{n})" }
    sequence(:password) { |n| "1" }
  end
end