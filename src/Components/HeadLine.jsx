import { useState } from 'react';

export const HeadLine = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative z-10 text-white">
      {/* Main Header */}
      <div className="flex justify-between items-center px-4 py-2 md:px-6">
        <div className="flex items-center gap-4">
          <button
            className="font-bold text-xl text-white hover:cursor-pointer"
          >
            Web Name
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 ml-4">
            <a href="#" className="text-gray-400 hover:text-white">Credit Cards</a>
            <a href="#" className="text-gray-400 hover:text-white">How it works</a>
            <a href="#" className="text-gray-400 hover:text-white">About</a>
            <a href="#" className="text-gray-400 hover:text-white">Contact</a>
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-800"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-2">
          <button className="bg-transparent hover:bg-gray-700 text-gray-300 font-semibold py-2 px-4 rounded border border-gray-600 hover:border-gray-400">
            Login
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-gray-900 px-4 py-2">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-gray-400 hover:text-white">Credit Cards</a>
            <a href="#" className="text-gray-400 hover:text-white">How it works</a>
            <a href="#" className="text-gray-400 hover:text-white">About</a>
            <a href="#" className="text-gray-400 hover:text-white">Contact</a>
          </nav>
          
          <div className="flex flex-col space-y-2 mt-4">
            <button className="w-full bg-transparent hover:bg-gray-700 text-gray-300 font-semibold py-2 px-4 rounded border border-gray-600 hover:border-gray-400">
              Login
            </button>
            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  )
}