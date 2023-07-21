import React from 'react';
import LoginForm from '~/components/LoginForm';
import './Login.scss'
import { useMutation } from '@apollo/client';
import { LOGIN } from '~/gql/mutations/login';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate()
  const [login] = useMutation(LOGIN)

  const onFinish = (values: any) => {
    login({
      variables: {
        input: {
          email: values.email,
          password: values.password,
        }
      },
      onCompleted: (data) => {
        const token = data.login.token
        if (token) {
          sessionStorage.setItem('token', token)
          navigate('/')
        }
      }
    })
  };

  return (
    <LoginForm
      name="normal_login"
      className="login-form mx-auto p-5"
      onFinish={onFinish}
      initialValues={{
        email: 'quangchien0212@gmail.com',
        password: '1'
      }}
    />
  );
};

export default Login;