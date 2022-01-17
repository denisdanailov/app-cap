import { makeStyles } from '@material-ui/core';
import React from 'react';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login';
import NavBar from './components/NavBar/NavBar';
import Register from './components/Register/Register';
import Checkout from './components/Checkout/Checkout';
import ViewProduct from './components/ViewProduct/ViewProduct';
import { AuthProvider } from './contexts/AuthContext';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundColor: 'black',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },

}));

export default function App() {

  const classes = useStyles();

  return (
    <AuthProvider>
    <div className={classes.root}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products/:id" element={<ViewProduct />} />
      </ Routes >
      <Footer />
    </div>
    </AuthProvider>
  );
}


