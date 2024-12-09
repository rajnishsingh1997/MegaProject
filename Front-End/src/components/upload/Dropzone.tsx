import { useState } from "react";
import { useDropzone } from "React-dropzone";

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
    <div className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here</p>
      </div>
    </div>
  );
}

export default Dropzone;
