import { useState } from "react";
import { useDropzone } from "React-dropzone";
import { Button } from "../ui/button";
import { FaRegFilePdf } from "react-icons/fa6";

function Dropzone({ open }: any) {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleDrop = (acceptedFiles: File[]) => {
    setUploadedFiles(acceptedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: {
      "application/pdf": [".pdf"],
    },
    multiple: true,
  });

  return (
    <div>
      <div
        {...getRootProps({
          className: `border-2 border-dashed border-white rounded-lg bg-blue-600 p-8 flex flex-col items-center justify-center text-center space-y-4`,
        })}
      >
        <input {...getInputProps()} />
        <FaRegFilePdf className="text-white text-5xl" />
        <Button
          variant="outline"
          className="bg-white text-blue-600 border-0 rounded-md shadow-md px-4 py-2 font-medium"
        >
          Choose Files
        </Button>
        <p className="text-white text-sm font-medium">or drop files here</p>
      </div>
    </div>
  );
}

export default Dropzone;
