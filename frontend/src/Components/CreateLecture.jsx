import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch } from "react-redux";
import { handleAddLecture } from "../Redux/Lecture/action";

function CreateLecture() {
  const [formData, setFormData] = useState({
    title: "",
    notes: "",
    videoUrl: null,
    lectureType: "",
    lectureTimeDate: "",
  });

  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, videoUrl: e.target.files[0] });
  };

  const handleNotesChange = (value) => {
    setFormData({ ...formData, notes: value });
  };

  const handleSubmit = () => {
    const utcDateTime = new Date(formData.lectureTimeDate).toISOString();

    const uploadData = new FormData();
    uploadData.append("file", formData.videoUrl);
    uploadData.append("title", formData.title);
    uploadData.append("notes", formData.notes);
    uploadData.append("lectureType", formData.lectureType);
    uploadData.append("lectureTimeDate", utcDateTime);

    dispatch(handleAddLecture(uploadData));

    setFormData({
      title: "",
      notes: "",
      videoUrl: null,
      lectureType: "",
      lectureTimeDate: "",
    });
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="green">
        Create Lecture
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent minW="35%">
          <ModalHeader>Create Lecture</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb={4}>
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Lecture Type</FormLabel>
              <Select
                placeholder="Select types"
                name="lectureType"
                onChange={handleChange}
              >
                <option value="Live">Live</option>
                <option value="Video">Video</option>
                <option value="Reading">Reading</option>
              </Select>
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Lecture Date and Time</FormLabel>
              <Input
                type="datetime-local"
                name="lectureTimeDate"
                value={formData.lectureTimeDate}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Notes</FormLabel>
              <ReactQuill value={formData.notes} onChange={handleNotesChange} />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Video</FormLabel>
              <Input pt={"5px"} type="file" onChange={handleFileChange} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="green" onClick={handleSubmit}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreateLecture;
