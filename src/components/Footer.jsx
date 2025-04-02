import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600 dark:text-teal-300">
          <svg className="h-8" viewBox="0 0 118 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* ... (Your SVG content remains the same) ... */}
          </svg>
        </div>
        <h2 className='text-center text-4xl font-bold'>LowBall Motors</h2>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400">
           Your destination for quality pre-owned vehicles. We pride ourselves on offering a wide selection of reliable cars,
          trucks, and SUVs at competitive prices. Our commitment to customer satisfaction ensures a smooth and transparent buying experience.
          Explore our inventory and find your perfect ride today!
        </p>

        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <li>
            <a
              className="text-gray-700 font-semibold transition hover:text-gray-900 dark:text-white dark:hover:text-gray-200 text-lg"
              href="#"
            >
              About
            </a>
          </li>

          <li>
            <a
              className="text-gray-700 font-semibold transition hover:text-gray-900 dark:text-white dark:hover:text-gray-200 text-lg"
              href="#"
            >
              Careers
            </a>
          </li>

          <li>
            <a
              className="text-gray-700 font-semibold transition hover:text-gray-900 dark:text-white dark:hover:text-gray-200 text-lg"
              href="#"
            >
              History
            </a>
          </li>

          <li>
            <a
              className="text-gray-700 font-semibold transition hover:text-gray-900 dark:text-white dark:hover:text-gray-200 text-lg"
              href="#"
            >
              Services
            </a>
          </li>

          <li>
            <a
              className="text-gray-700 font-semibold transition hover:text-gray-900 dark:text-white dark:hover:text-gray-200 text-lg"
              href="#"
            >
              Inventory
            </a>
          </li>

          <li>
            <a
              className="text-gray-700 font-semibold transition hover:text-gray-900 dark:text-white dark:hover:text-gray-200 text-lg"
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          {/* ... (Your social media links remain the same) ... */}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;