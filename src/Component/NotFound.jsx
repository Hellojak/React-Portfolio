import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-50 to-white p-6">
      <div className="text-center max-w-md">
        {/* Illustration */}
        <div className="mx-auto w-48 h-48 mb-6 text-purple-400">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M40,-74.4C52.5,-69.2,63.8,-58.2,71.3,-44.8C78.8,-31.4,82.5,-15.7,81.5,-0.6C80.5,14.5,74.8,29,65.1,41.2C55.4,53.4,41.7,63.3,26.6,70.1C11.5,76.9,-5,80.6,-20.1,76.7C-35.2,72.8,-48.9,61.3,-60.1,48.2C-71.3,35.1,-80,20.4,-81.8,4.6C-83.5,-11.3,-78.3,-28.2,-68.3,-41.7C-58.3,-55.2,-43.5,-65.3,-28.9,-69.5C-14.3,-73.7,0.1,-72.1,14.1,-68.3C28.1,-64.5,41.7,-58.6,40,-74.4Z" transform="translate(100 100)" />
          </svg>
        </div>

        <h1 className="text-9xl font-bold text-purple-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Lost in Space?</h2>
        <p className="text-lg text-gray-600 mb-8">
          The page you're looking for isn't here. Maybe it was moved or never existed.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="flex-1 flex items-center justify-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg shadow-md transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home Page
          </Link>
          <Link
            to="/contact"
            className="flex-1 flex items-center justify-center px-6 py-3 border border-purple-600 text-purple-600 hover:bg-purple-50 font-medium rounded-lg transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}