import Navbar from "./components/Navbar";
import UploadArea from "./components/upload/UploadArea";

function App() {
  return (
    <div className="flex flex-col ">
      {/* Navbar */}
      <div className="text-white p-6">
        <Navbar />
      </div>

      {/* Upload Area */}
      <div className="flex-1 flex items-center justify-center">
        <UploadArea />
      </div>
    </div>
  );
}

export default App;
