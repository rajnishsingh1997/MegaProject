import Navbar from "./components/Navbar";
import UploadArea from "./components/upload/UploadArea";
import Login from "./pages/Login-Page/Login";
import Signup from "./pages/Sign-Up-Page/Signup";

import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <div className="flex flex-col ">
      <BrowserRouter>
        <div className="text-white p-6">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<UploadArea />} />
          <Route path="/v1/auth/signup" element={<Signup />} />
          <Route path="/v1/auth/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
