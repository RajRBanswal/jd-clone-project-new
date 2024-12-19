import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/website/layouts/Layout";
import Home from "./components/website/Home";
import About from "./components/website/About";
import Contact from "./components/website/Contact";

import Signup from "./components/website/Signup";
import Login from "./components/website/Login";
import AdminLogin from "./components/adminpanel/AdminLogin";
import AdminLayout from "./components/adminpanel/layouts/AdminLayout";
import AdminDashboard from "./components/adminpanel/AdminDashboard";
import Vendorlogin from "./components/Vendorpanel/Vendorlogin";
import VendorLayout from "./components/Vendorpanel/layout/VendorLayout";
import VendorDashboard from "./components/Vendorpanel/layout/VendorDashboard";
import VRegister from "./components/Vendorpanel/layout/VRegister";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Layout}>
          <Route index Component={Home} />
          <Route path="about" Component={About} />
          <Route path="contact" Component={Contact} />
          <Route path="signup" Component={Signup} />
          <Route path="login" Component={Login} />

        </Route>

        <Route path="/admin-login" Component={AdminLogin} />
        <Route path="/admins" Component={AdminLayout}>         
          <Route index Component={AdminDashboard} />

        </Route>
        <Route path="/vendor-login" Component={Vendorlogin} />
        <Route path="/vender-signup" Component={VRegister} />
        <Route path="/vendor" Component={VendorLayout}>
          <Route index Component={VendorDashboard} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
