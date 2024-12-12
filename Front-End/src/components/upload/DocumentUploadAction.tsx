import { Button } from "../ui/button";
import Modal from "react-bootstrap/Modal";

interface Props {
  show: boolean;
  setIsModalOpen: (value: boolean) => void;
}

const DocumentUploadModal = ({ show, setIsModalOpen }: Props) => {
  return (
    <>
      <Modal
        show={show}
        onHide={() => setIsModalOpen(false)}
        dialogClassName=""
        aria-labelledby="example-custom-modal-styling-title"
        className="fixed inset-0 flex items-center justify-center"
      >
        <div className="relative w-[70%] max-h-[70vh] overflow-y-auto bg-white rounded-lg shadow-lg">
          <Modal.Header closeButton className="border-b border-gray-200">
            <Modal.Title
              id="example-custom-modal-styling-title"
              className="text-lg font-semibold"
            >
              Custom Modal Styling
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-4">
            <p className="text-sm text-gray-600">
              Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
              unde commodi aspernatur enim, consectetur. Cumque deleniti
              temporibus ipsam atque a dolores quisquam quisquam adipisci
              possimus laboriosam. Quibusdam facilis doloribus debitis! Sit
              quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem!
              Mollitia reiciendis porro quo magni incidunt dolore amet atque
              facilis ipsum deleniti rem!
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => {
                setIsModalOpen(false);
              }}
              variant="outline"
              className="bg-white text-blue-600 border-0 rounded-md shadow-md px-4 py-2 font-medium"
            >
              Close
            </Button>
            <Button variant="outline">Start Asking</Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};

export default DocumentUploadModal;
