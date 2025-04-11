export function Footer() {
  return (
    <footer className="mt-20 pb-24 text-sm text-stone-500 dark:text-slate-500 sm:pb-16 flex justify-center">
      <p className="max-w-md text-center">
        Built in{' '}
        <a 
          href="https://code.visualstudio.com/" 
          className="font-bold hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200" 
          target="_blank" 
          rel="noreferrer noopener" 
          aria-label="Visual Studio Code (opens in a new tab)"
        >
          Visual Studio Code
        </a>{' '}
        with a steady dose of caffeine and{' '}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 inline-block text-red-500 animate-heartbeat"
        >
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>
        {' '}Powered by{' '}
        <a 
          href="https://react.dev" 
          className="font-bold hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200" 
          target="_blank" 
          rel="noreferrer noopener" 
          aria-label="React (opens in a new tab)"
        >
          React
        </a>, {' '}
        <a 
          href="https://vitejs.dev" 
          className="font-bold hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200" 
          target="_blank" 
          rel="noreferrer noopener" 
          aria-label="Vite (opens in a new tab)"
        >
          Vite
        </a>, {' '}
        and{' '}
        <a 
          href="https://tailwindcss.com" 
          className="font-bold hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200" 
          target="_blank" 
          rel="noreferrer noopener" 
          aria-label="Tailwind CSS (opens in a new tab)"
        >
          Tailwind
        </a>, and deployed into the ether with{' '}
        <a 
          href="https://vercel.com" 
          className="font-bold hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200" 
          target="_blank" 
          rel="noreferrer noopener" 
          aria-label="Vercel (opens in a new tab)"
        >
          Vercel
        </a>. {' '}
        Set in the{' '}
        <a 
          href="https://rsms.me/inter/" 
          className="font-bold hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200" 
          target="_blank" 
          rel="noreferrer noopener" 
          aria-label="Inter (opens in a new tab)"
        >
          Inter
        </a>{' '}
        typeface. {' '}
        It simply looks right.
      </p>
    </footer>
  );
} 