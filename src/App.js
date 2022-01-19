import React from 'react';
import { Routes, Route } from "react-router-dom";
const Layout = React.lazy(() => import('./pages/layout/layout'));
const HomePage = React.lazy(() => import('./pages/home/home'));
const AboutPage = React.lazy(() => import('./pages/about/about'));
const LoginPage = React.lazy(() => import('./pages/login/login'));

function App() {
  console.log(process.env.PUBLIC_URL)
  return (
    <React.Suspense fallback={<Loading />}>
      <Routes>
        <Route path={process.env.PUBLIC_URL} element={<Layout />}>
          <Route index element={
            <React.Suspense fallback={<ProcessbarLoading />}>
              <HomePage />
            </React.Suspense>}
          />
          <Route path={process.env.PUBLIC_URL + '/about'} element={
            <React.Suspense fallback={<ProcessbarLoading />}>
              <AboutPage />
            </React.Suspense>}
          />
          <Route path="*" element={<Notfound />} />
        </Route>
        <Route path={process.env.PUBLIC_URL + '/login'} element={<LoginPage />} />
      </Routes>
    </React.Suspense>
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

const Loading = () => {
  return (
    <div className="loading">
      <h1>Loading...</h1>
    </div>
  );
}

const ProcessbarLoading = () => {
  return (
    <>
      <div className="processbar-loading"></div>
      <span>loading...</span>
    </>
  );
}