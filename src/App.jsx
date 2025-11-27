import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

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

function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        {/* V2 is the new default */}
        <Route path="/" element={<V2App />} />
        
        {/* V1 preserved at /v1 */}
        <Route path="/v1" element={<V1App />} />
        
        {/* Catch-all redirects to V2 */}
        <Route path="*" element={<V2App />} />
      </Routes>
    </Suspense>
  );
}

export default App;
