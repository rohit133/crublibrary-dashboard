import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className=" py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} CRUD Library. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link href="/" className="hover:text-gray-600 text-sm">
              Home
            </Link>
            <Link href="/dashboard" className="hover:text-gray-600 text-sm">
              Dashboard
            </Link>
            <a 
              href="mailto:hirings@formpilot.org" 
              className="hover:text-gray-600 text-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer