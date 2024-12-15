import Navbar from "./components/Navbar";
import Signup from "./Pages/Sign-Up-Page/Signup";
// import UploadArea from "./components/upload/UploadArea";
import Login from "./Pages/Login-page/Login";


function App() {
  return (
    <div className="flex flex-col ">
      <div className="text-white p-6">
        <Navbar />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <Signup/>
      </div>
    </div>
  );
}

export default App;
