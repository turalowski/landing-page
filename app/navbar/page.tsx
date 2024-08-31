import React from 'react';
import Logo from './logo';
import NavigationBar from './navigation-bar';
import ActionButtons from './action-buttons';
import { cn } from '@/lib/utils';

const Navbar = () => {
  return (
    <div
      className={cn('flex justify-between items-center', 'px-10 border-b-2')}
    >
      <Logo />
      <NavigationBar />
      <ActionButtons />
    </div>
  );
};

export default Navbar;
