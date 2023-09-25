'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import TodoLayout from './Todo.Layout';

export default function TodoPage() {
  const router = useRouter();
  const pathName = usePathname();

  const signInUrl = `${pathName}/signin`;

  useEffect(() => {
    const accessToken = localStorage.getItem('ACCESS_TOKEN');
    if (!accessToken) {
      router.push(signInUrl);
    }
  }, [router, signInUrl]);

  return (
    <TodoLayout>
      <div>todo list</div>
    </TodoLayout>
  );
}
