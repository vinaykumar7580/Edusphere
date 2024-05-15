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
import { updateProfileInstructor } from "../Redux/InstructorProfile/action";

const InstructorModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [data, setData] = useState({
    class: "",
    subject: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = () => {
    console.log("update", data);

    dispatch(updateProfileInstructor(data));

    setData({
      class: "",
      subject: "",
    });
  };

  return (
    <Modal isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color={"orange"}>Select Class & Subject</ModalHeader>
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
            placeholder="Select Subject"
            name="subject"
            onChange={handleChange}
            mt={"20px"}
          >
            <option value="Math">Math</option>
            <option value="English">English</option>
            <option value="Science">Science</option>
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Biology">Biology</option>
            <option value="History">History</option>
            <option value="Geography">Geography</option>
            <option value="Political Science">Political Science</option>
            <option value="Accountancy">Accountancy</option>
            <option value="Business Studies">Business Studies</option>
            <option value="Economics">Economics</option>
          </Select>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleSubmit} colorScheme="orange">
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default InstructorModal;
