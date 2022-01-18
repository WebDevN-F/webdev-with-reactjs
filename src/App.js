import React from 'react';
import {
  Routes, Route
} from "react-router-dom";
import Layout from './pages/layout/layout';

const HomePage = React.lazy(() => import('./pages/home/home'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={
          <React.Suspense fallback={<>loading...</>}>
            <HomePage />
          </React.Suspense>}
        />
        {/* append more routes here */}
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  );
}

export default App;

const Notfound = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}