import SignForm from '@/components/todo/sign/SignForm';
import TodoProvider from '../Todo.Provider';

function SignUpPage() {
  return (
    <TodoProvider>
      <SignForm />
    </TodoProvider>
  );
}

export default SignUpPage;
