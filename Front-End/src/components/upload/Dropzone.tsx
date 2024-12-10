import { useState } from "react";
import { useDropzone } from "React-dropzone";
import { Button } from "../ui/button";

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
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here</p>
        <Button variant={"outline"}>Open File Explorer</Button>
      </div>
    </div>
  );
}

export default Dropzone;
