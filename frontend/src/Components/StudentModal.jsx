import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Select,
  Button,
  ModalFooter,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { updateProfileStudent } from "../Redux/StudentProfile/action";

const StudentModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [data, setData] = useState({
    class: "",
    stream: "",
  });

  const dispatch=useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = () => {
    console.log("update", data);

    dispatch(updateProfileStudent(data))

    setData({
      class: "",
      stream: "",
    });
  };

  return (
    <Modal isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color={"orange"}>Select Class & Stream</ModalHeader>
        <ModalBody>
          <Select
            placeholder="Select Class"
            name="class"
            onChange={handleChange}
          >
            <option value="1st">Class 1st</option>
            <option value="2nd">Class 2nd</option>
            <option value="3rd">Class 3rd</option>
            <option value="4th">Class 4th</option>
            <option value="5th">Class 5th</option>
            <option value="6th">Class 6th</option>
            <option value="7th">Class 7th</option>
            <option value="8th">Class 8th</option>
            <option value="9th">Class 9th</option>
            <option value="10th">Class 10th</option>
            <option value="11th">Class 11th</option>
            <option value="12th">Class 12th</option>
          </Select>
          <Select
            placeholder="Select Stream"
            name="stream"
            onChange={handleChange}
            mt={"20px"}
          >
            <option value="Science">Science</option>
            <option value="Art">Art</option>
            {data.class === "11th" || data.class === "12th" ? (
              <option value="Commerce">Commerce</option>
            ) : null}
          </Select>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleSubmit} colorScheme="orange">Submit</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default StudentModal;
