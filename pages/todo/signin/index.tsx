import React from 'react';
import SignForm from '@/components/todo/sign/SignForm';
import TodoProvider from '../Todo.Provider';

function SignInPage() {
  return (
    <TodoProvider>
      <SignForm />
    </TodoProvider>
  );
}

export default SignInPage;
