import { Button } from "../ui/button";
import Modal from "react-bootstrap/Modal";
import { Input } from "../ui/input";
import clsx from "clsx";
import { useState } from "react";
import axios from "axios";
import { toast } from "@/hooks/use-toast";

interface Props {
  show: boolean;
  setIsModalOpen: (value: boolean) => void;
  uploadedFiles: File[];
}

const DocumentUploadModal = ({
  show,
  setIsModalOpen,
  uploadedFiles,
}: Props) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  function resetState() {
    setSelectedFiles([]);
    setIsModalOpen(false);
  }

  const handleFileUpload = async () => {
    if (selectedFiles.length === 0) {
      console.error("No files selected for upload");
      return;
    }

    const token = localStorage.getItem("authToken");

    if (!token) {
      return;
    }

    try {
      for (const file of selectedFiles) {
        const formData = new FormData();
        formData.append("file", file);

        const response = await axios.post(
          "http://localhost:3000/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              "Authorization":`Bearer ${token}`
            },
          }
        );
        const filePath = response.data.filePath.split("\\")
        const fileName = filePath[filePath.length - 1];
        
        toast({ title: "Success", description: `${fileName} has been uploaded` });
      }
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  const toggleFileSelection = (file: File) => {
    setSelectedFiles((prev) =>
      prev.includes(file) ? prev.filter((f) => f !== file) : [...prev, file]
    );
  };

  return (
    <div>
      <Modal
        show={show}
        onHide={resetState}
        dialogClassName=""
        aria-labelledby="document-modal-title"
        className="fixed inset-0 flex items-center py-24 justify-center"
      >
        <div className="relative w-[75%] mx-auto h-[500px] overflow-y-auto bg-white rounded-lg shadow-lg">
          <Modal.Header
            closeButton
            className="border-b border-gray-200 px-6 py-4"
          >
            <Modal.Title
              id="document-modal-title"
              className="text-lg font-semibold"
            >
              <p className="text-gray-800">Document</p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-6">
            <div>
              {uploadedFiles.map((singleFile) => (
                <div
                  key={singleFile.name}
                  onClick={() => toggleFileSelection(singleFile)}
                  className={clsx(
                    "flex items-center p-4 rounded-lg border border-gray-200 mb-2 cursor-pointer",
                    { "bg-gray-200": selectedFiles.includes(singleFile) }
                  )}
                >
                  <div className="w-10 h-10 bg-gray-300 flex items-center justify-center rounded-lg mr-4">
                    <span className="text-gray-600">📄</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800 font-medium">
                      {singleFile.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Modal.Body>
          <Modal.Footer className="flex justify-end px-6">
            <Button
              onClick={resetState}
              variant="outline"
              className="bg-white text-blue-600 border-0 rounded-md shadow-md px-4 py-2 font-medium mr-4"
            >
              Cancel
            </Button>
            <Button
              onClick={handleFileUpload}
              disabled={selectedFiles.length === 0}
              className="bg-blue-600 text-white rounded-md px-4 py-2 font-medium"
            >
              Start Conversation
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </div>
  );
};

export default DocumentUploadModal;
