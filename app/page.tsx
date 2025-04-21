"use client";
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { ArrowRight, Code, Database, RefreshCw } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';

export default function Home() {
  const { isAuthenticated, login, loading } = useAuth();
  const router = useRouter();

  const handleAuth = async () => {
    if (isAuthenticated) {
      router.push('/dashboard');
    } else {
      login();
    }
  };

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center py-12">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 ">
            CRUD Library Platform
          </h1>
          <p className="text-xl mb-8">
            A lightweight API service for storing and retrieving data with a simple interface.
            Get started with just a few clicks.
          </p>

          <Button
            onClick={handleAuth}
            disabled={loading}
            className=" px-8 py-6 text-lg bg-brand-600 hover:bg-brand-700 dark:bg-brand-500 dark:hover:bg-brand-600 border"
          >
            {loading ? 'Loading...' : isAuthenticated ? 'Go to Dashboard' : 'Sign in with Google'}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl w-full">
          {/* Card 1 */}
          <div className="p-6 rounded-lg shadow-md border">
            <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Code className="text-blue-600 dark:text-blue-300" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Simple API</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Our library provides simple one-liner methods for all your CRUD operations.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-lg shadow-md border">
            <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Database className="text-purple-600 dark:text-purple-300" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Secure Storage</h3>
            <p className="text-gray-700 dark:text-gray-300">
              All your data is securely stored and can only be accessed with your unique API key.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-lg shadow-md border ">
            <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <RefreshCw className="text-green-600 dark:text-green-300" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Credit System</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Start with 4 free credits and request more via email when you need them.
            </p>
          </div>
        </div>

        <div className="mt-16 p-8 rounded-lg max-w-3xl w-full border">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">How It Works</h2>
          <div className="space-y-4">
            {[ 
              { step: 1, title: 'Sign in with Google', desc: 'Create an account using your Google credentials.' },
              { step: 2, title: 'Get Your API Key & URL', desc: 'Receive unique credentials to access the CRUD Library.' },
              { step: 3, title: 'Install the Library', desc: 'Install our npm package and configure it with your credentials.' },
              { step: 4, title: 'Start Building', desc: 'Use the library\'s simple methods in your application.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4 items-start">
                <div className="bg-purple-100 dark:bg-blue-400 text-white-800 dark:text-gray-200 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  {step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
