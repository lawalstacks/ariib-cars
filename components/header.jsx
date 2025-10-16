import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button';
import { ArrowLeft, CarFront, Heart, Layout } from 'lucide-react';
import { checkUser } from '@/lib/checkUser';

const Header = async ({ isAdminPage = false }) => {
  const user = await checkUser();
  console.log(user)

  const isAdmin = user?.role === 'ADMIN';
  return (
    <header className='fixed top-0 w-full bg-white/80 backdrop:blur z-50 border-b'>
      <nav className='max-auto px-4 py-4 flex items-center justify-between'>
        <Link href={isAdminPage ? '/admin' : '/'} className='flex'>
          <Image src={"/logo1.png"}
            alt="ariib-logo"
            width={200}
            height={60}
            className='h-12 w-auto object-contain'
          />
          {isAdminPage && (
            <span className='text-xs font-extralight'>Admin</span>
          )}
        </Link>

        <div className='flex items-center space-x-4'>

          {
            isAdminPage ?
              (
                <Link href='/'>
                  <Button>
                    <ArrowLeft size={18} />
                    <span className='hidden md:inline'>Back to App</span>
                  </Button>
                </Link>
              ) :
              (
                <SignedIn>

                  <Link href='/saved-cars'>
                    <Button >
                      <Heart size={18} className='mr-2' />
                      <span className='hidden sm:inline'>Saved Cars</span>
                    </Button>
                  </Link>

                  {
                    !isAdmin ?

                      (<Link href='/reservations'>
                        <Button variant='outline'>
                          <CarFront size={18} className='mr-2' />
                          <span className='hidden sm:inline'>My Reservations</span>
                        </Button>
                      </Link>)
                      :

                      (<Link href='/admin'>
                        <Button variant='outline'>
                          <Layout size={18} className='mr-2' />
                          <span className='hidden sm:inline'>Admin Portal</span>
                        </Button>
                      </Link>)
                  }

                </SignedIn>
              )
          }

          <SignedOut>
            <SignInButton forceRedirectUrl='/'>
              <Button variant='outline'>
                Login
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: 'w-10 h-10'
                }
              }}
            />
          </SignedIn>

        </div>
      </nav>
    </header>
  )
}

export default Header