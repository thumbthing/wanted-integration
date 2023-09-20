'use client';

import SignForm from '@/components/todo/sign/SignForm';
import TodoLayout from './Todo.Layout';

export default function TodoPage() {
  return (
    <TodoLayout>
      <div>
        <SignForm />
      </div>
    </TodoLayout>
  );
}
