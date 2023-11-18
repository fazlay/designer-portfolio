import {
  Button,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface CustomModalProps {
  children: ReactNode;
  buttonText?: string;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  buttonColorScheme?: string;
}

const CustomModal: React.FC<CustomModalProps> = ({
  children,
  buttonText,
  buttonColorScheme,
  isModalOpen,
  setIsModalOpen,
}) => {
  const modalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <Button
        colorScheme={buttonColorScheme}
        onClick={() => {
          setIsModalOpen(!isModalOpen);
        }}
      >
        {buttonText}
      </Button>

      <Modal isOpen={isModalOpen} onClose={modalToggle} size={"xl"}>
        <ModalOverlay />
        <ModalContent maxW="56rem">
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          <ModalCloseButton />
          {/* <ModalBody>sdfsdfsdffdfdfdf</ModalBody> */}
          {children}

          {/* <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CustomModal;
