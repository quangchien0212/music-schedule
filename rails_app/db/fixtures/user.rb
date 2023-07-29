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
  },
  {
    :email => 'normal_user@gmail.com',
    :password => '1',
    :full_name => 'Anh Quốc Đặng',
    :role => Role.find_by(name: 'guest'),
  },
  {
    :email => 'normal_user2@gmail.com',
    :password => '1',
    :full_name => 'Nguyễn Trọng Tuấn',
    :role => Role.find_by(name: 'guest'),
  },
)