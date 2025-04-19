"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/contexts/AuthContext'


const Header: React.FC = () => {
  const router = useRouter()
  const { user, login, logout, isAuthenticated } = useAuth()
  const handleAuth = async () => {
    if (isAuthenticated) {
      router.push('/dashboard');
    } else {
      await login();
      router.push('/dashboard');
    }
  };
  const pathname = usePathname()

  return (
    <header className="">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-xl font-bold text-brand-600">
              CRUD Library
            </Link>
          </div>

          <nav className="hidden md:flex space-x-4">
            {isAuthenticated && (
              <>
                <Link href="/dashboard"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === '/dashboard' ? 'text-white-600 bg-white-50' : 'text-white-600 hover:text-black hover:bg-gray-200'
                  }`}
                >
                  Dashboard
                </Link>
                {/* <Link href="/todo"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === '/todo' ? 'text-white-600 bg-white-50' : 'text-white-600 hover:text-black hover:bg-gray-200'
                  }`}
                >
                  Todo App
                </Link> */}
              </>
            )}
          </nav>

          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <div className="hidden md:flex flex-col items-end">
                  <span className="text-sm font-medium">{user?.name}</span>
                  <span className="text-xs text-gray-400">{user?.email}</span>
                </div>
                <Button 
                  variant="outline" 
                  onClick={logout} 
                  className="border-gray-300"
                >
                  Log out
                </Button>
              </div>
            ) : (
              <Link href="/" passHref>
                <Button 
                  variant="outline" 
                  className="border-gray-300"
                  onClick={handleAuth}  
                >
                    Sign In 
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
