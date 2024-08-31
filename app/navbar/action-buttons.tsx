import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { AlignJustify } from 'lucide-react';
import Link from 'next/link';

type Page = {
  label: string;
  href: string;
};

const pages: Page[] = [
  {
    label: 'Sign in',
    href: '/',
  },
  {
    label: 'About',
    href: '/',
  },
  {
    label: 'Contact',
    href: '/',
  },
];

const ActionButtons = () => {
  return (
    <div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <AlignJustify></AlignJustify>
            <SheetContent>
              <SheetHeader>
                <SheetDescription>
                  <div className="flex flex-col space-y-4 items-start w-full text-lg text-black mt-10">
                    {pages.map(({ label, href }) => {
                      return (
                        <Link key={label} href={href}>
                          {label}
                        </Link>
                      );
                    })}
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </SheetTrigger>
        </Sheet>
      </div>
      <div className="hidden md:flex md:space-x-4">
        <Button className="text-md" variant="ghost">
          Sign in
        </Button>
        <Button className="text-md bg-blue-500">Get Started</Button>
      </div>
    </div>
  );
};

export default ActionButtons;
