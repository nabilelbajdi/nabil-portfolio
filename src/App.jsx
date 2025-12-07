import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { NotFound } from './components/NotFound';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load both versions for better performance
const V1App = lazy(() => import('./v1/V1App'));
const V2App = lazy(() => import('./v2/V2App'));

// Loading fallback component
function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
        <span className="text-zinc-400 text-sm font-mono">Loading...</span>
      </div>
    </div>
  );
}

// Check if we're on the v1 subdomain
const isV1Subdomain = typeof window !== 'undefined' &&
  window.location.hostname.startsWith('v1.');

function App() {
  // If on v1 subdomain, render V1App directly
  if (isV1Subdomain) {
    return (
      <Suspense fallback={<LoadingFallback />}>
        <V1App />
      </Suspense>
    );
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          {/* Main portfolio (terminal theme) */}
          <Route path="/" element={<V2App />} />

          {/* V1 classic version */}
          <Route path="/v1" element={<V1App />} />

          {/* 404 for all other routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
