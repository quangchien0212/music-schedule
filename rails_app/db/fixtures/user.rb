User.seed(:email,
  {
    :email => 'teacher@gmail.com',
    :password => '1',
    :full_name => 'Teacher',
    :role => Role.find_by(name: 'teacher'),
  },
  {
    :email => 'teacher2@gmail.com',
    :password => '1',
    :full_name => 'Teacher 2',
    :role => Role.find_by(name: 'teacher'),
  }
)