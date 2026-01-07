import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { StoreProvider, useStore } from "./context/StoreContext";
import { Navbar } from "./components/Navbar";
import { LoginModal } from "./components/LoginModal";

import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { CartPage } from "./pages/CartPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { LoginPage } from "./pages/LoginPage";
import { AdminPage } from "./pages/AdminPage";

import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentCancel from "./pages/PaymentCancel";
import MyOrders from "./pages/MyOrders";

const App = () => {
  const AppRoutes = () => {
    const { user } = useStore();
    const location = useLocation();

    useEffect(() => {
      if (location.pathname === '/admin' && user && !user.isAdmin) {
        // Admin access only - no alert
      }
    }, [location.pathname, user]);

    return (
      <AnimatePresence mode="wait">
        <Routes location={location}>
          <Route path="/" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <HomePage />
            </motion.div>
          } />
          <Route path="/products" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <ProductsPage />
            </motion.div>
          } />
          <Route path="/cart" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {user ? <CartPage /> : <Navigate to="/login" />}
            </motion.div>
          } />
          <Route path="/checkout" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {user ? <CheckoutPage /> : <Navigate to="/login" />}
            </motion.div>
          } />
          <Route path="/login" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <LoginPage />
            </motion.div>
          } />
          <Route path="/admin" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {user?.isAdmin ? <AdminPage /> : <Navigate to="/login" />}
            </motion.div>
          } />
          <Route path="/my-orders" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {user && !user.isAdmin ? <MyOrders /> : <Navigate to="/" />}
            </motion.div>
          } />

          {/* ✅ STRIPE CALLBACK ROUTES */}
          <Route path="/success" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <PaymentSuccess />
            </motion.div>
          } />
          <Route path="/cancel" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <PaymentCancel />
            </motion.div>
          } />
        </Routes>
      </AnimatePresence>
    );
  };

  return (
    <StoreProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-dark-bg text-gray-200">
          <Navbar />
          <AppRoutes />
          <LoginModal />
        </div>
      </Router>
    </StoreProvider>
  );
};

export default App;
