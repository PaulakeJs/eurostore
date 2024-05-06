import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NotFoundPage from "./Components/404";
import Register from "./Pages/Registar";
import Verify from "./Pages/Verify";
import Secure from "./Components/Secure";
import Shop from "./Pages/Shop";
import AddCategory from "./Admin/Add-category";
import AdminSecure from "./Admin/AdminSecure";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="w-full">
      <BrowserRouter>
        <Header />
        <Routes>
          {" "}
          <Route path="/" element={<Home />} />
          <Route path="/shop/:category" element={<Shop />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/new" element={<Register />} />
          <Route
            path="/admin/add-category"
            element={
              <Secure>
                <AdminSecure>
                  <AddCategory />
                </AdminSecure>
              </Secure>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
