// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import RegisterForm from './components/Register';
import LoginForm from './components/Login';
import CreateProductForm from './components/CreateProductForm'; 
import AddressList from './components/BAddressListUser';
import Products from './components/Products';
import UpdateProductForm from './components/UpdateProductForm'; 
import CreateCategoryForm from './components/CreateCategoryForm'; 
import Categories from './components/Categories'; 
import UpdateCategoryForm from './components/UpdateCategoryForm'; 
import ProfilePage from './components/Profile';
import SellerRegistrationPage from './components/SellerRegistrationPage';
import ProductDetailPage from './components/ProductDetailPage';
import CartPage from './components/CartPage';
import SellerPage from './components/SellerPage';
import OrderPage from './components/OrderPage';
import Supplier from './components/pages/supplier/Supplier';
import CreateSupplier from './components/pages/supplier/CreateSupplierForm'
import UpdateSupplier from './components/pages/supplier/UpdateSupplierForm'

import { AuthProvider } from './components/AuthContext';


const App = () => {
  return (
    <AuthProvider> {/* Wrap Routes with AuthProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/create-product" element={<CreateProductForm />} />
          <Route path="/products" element={<Products />} />
          <Route path="/update-product/:productId" element={<UpdateProductForm />} />
          <Route path="/create-category" element={<CreateCategoryForm />} /> 
          <Route path="/categories" element={<Categories />} /> 
          <Route path="/addressListe" element={<AddressList />} />
          <Route path="/profile" element={<ProfilePage />} /> 
          <Route path="/update-category/:categoryId" element={<UpdateCategoryForm />} />
          <Route path="/sellerRegistration" element={<SellerRegistrationPage/>}   />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/sellerpage" element={<SellerPage />} />
          <Route path="/orderpage" element={<OrderPage />} />
          <Route path="/suppliers" element={<Supplier />} />
          <Route path="/create-supplier" element={<CreateSupplier />} />
          <Route path="/update-supplier/:supplierId" element={<UpdateSupplier />} />





        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
