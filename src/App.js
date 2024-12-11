import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/website/layouts/Layout";
import Home from "./components/website/Home";
import About from "./components/website/About";
import Contact from "./components/website/Contact";

import Signup from "./components/website/Signup";
import Login from "./components/website/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Layout}>
          <Route index Component={Home} />
          <Route path="about" Component={About}/>
          <Route path="contact" Component={Contact} />
          <Route path="signup" Component={Signup} />
          <Route path="login" Component={Login}/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
