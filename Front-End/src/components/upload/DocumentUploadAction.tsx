import { Button } from "../ui/button";
import Modal from "react-bootstrap/Modal";
import { Input } from "../ui/input";

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
  return (
    <div>
      <Modal
        show={show}
        onHide={() => setIsModalOpen(false)}
        dialogClassName=""
        aria-labelledby="document-modal-title"
        className="fixed inset-0 flex items-center py-24 justify-center"
      >
        <div className="relative w-[75%] mx-auto h-[500px] overflow-y-auto bg-white rounded-lg shadow-lg">
          <Modal.Header
            closeButton
            className="border-b border-gray-200 px-6 py-4"
          >
            <div className="w-full">
              <Modal.Title
                id="document-modal-title"
                className="flex justify-between items-center text-lg font-semibold"
              >
                <p className="text-gray-800">Document</p>
                <Input
                  className="w-[30%] px-3 py-2 border border-gray-300 rounded-md"
                  type="text"
                  placeholder="Search"
                />
              </Modal.Title>
            </div>
          </Modal.Header>
          <Modal.Body className="p-6">
            <div>
              {uploadedFiles.map((singleFile) => {
                return (
                  <div
                    key={singleFile.name}
                    className="flex items-center p-4 bg-gray-100 rounded-lg border border-gray-200 mb-2"
                  >
                    <div className="w-10 h-10 bg-gray-300 flex items-center justify-center rounded-lg mr-4">
                      <span className="text-gray-600">📄</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800 font-medium">
                        {singleFile.name}
                      </p>
                      {/* <p className="text-gray-500 text-sm">
                        {singleFile.uploadTime || "Just now"}
                      </p> */}
                    </div>
                  </div>
                );
              })}
            </div>
          </Modal.Body>
          <Modal.Footer className="flex justify-end px-6 mt-40">
            <Button
              onClick={() => {
                setIsModalOpen(false);
              }}
              variant="outline"
              className="bg-white text-blue-600 border-0 rounded-md shadow-md px-4 py-2 font-medium mr-4"
            >
              Cancel
            </Button>
            <Button className="bg-blue-600 text-white rounded-md px-4 py-2 font-medium">
              Start Conversation
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </div>
  );
};

export default DocumentUploadModal;
