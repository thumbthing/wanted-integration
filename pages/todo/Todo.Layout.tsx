import { todoStore } from '@/store/todoStore';
import { Provider } from 'react-redux';

export default function TodoLayout({ children }: { children: React.ReactNode }) {
  return <Provider store={todoStore}>{children}</Provider>;
}
