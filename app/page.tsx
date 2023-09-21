import Header from '@/components/header/Header';
import React from 'react';
import RootLayout from './layout';

export default function Home() {
  return (
    <RootLayout>
      <div>main page</div>
      <Header />
    </RootLayout>
  );
}
