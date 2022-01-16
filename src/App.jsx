import React from 'react';
import {
  Routes, Route
} from "react-router-dom";
import Loading from './components/Loading';
import NotFound from './pages/NotFound';
import Layout from './pages/Layout';

const HomePage = React.lazy(() => import('./pages/Home'))
const ProductList = React.lazy(() => import('./pages/ProductList'));
const Product = React.lazy(() => import('./pages/Product'));
const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register'));
const Cart = React.lazy(() => import('./pages/Cart'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={
          <React.Suspense fallback={<><Loading /></>}>
            <HomePage />
          </React.Suspense>} />
        <Route path="/products" element={
          <React.Suspense fallback={<>...</>}>
            <ProductList />
          </React.Suspense>}
        />
        <Route path="/product" element={
          <React.Suspense fallback={<>...</>}>
            <Product />
          </React.Suspense>}
        />
        <Route path="/cart" element={
          <React.Suspense fallback={<>...</>}>
            <Cart />
          </React.Suspense>}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/login" element={
        <React.Suspense fallback={<>...</>}>
          <Login />
        </React.Suspense>}
      />
      <Route path="/register" element={
        <React.Suspense fallback={<>...</>}>
          <Register />
        </React.Suspense>}
      />
    </Routes>
  )
}

export default App;
