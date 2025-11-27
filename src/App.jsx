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
        {/* V1 remains the default until V2 is ready */}
        <Route path="/" element={<V1App />} />
        
        {/* V2 in development at /v2 */}
        <Route path="/v2/*" element={<V2App />} />
        
        {/* Catch-all stays on V1 */}
        <Route path="*" element={<V1App />} />
      </Routes>
    </Suspense>
  );
}

export default App;
