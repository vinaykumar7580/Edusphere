import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { handleSudentRegister } from "../Redux/StudentAuth/action";
import { useNavigate } from "react-router-dom";
import { handleInstructorRegister } from "../Redux/InstructorAuth/action";

function Signup() {
  const [studentForm, setStudentForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    gender: "",
    birth: "",
    age: "",
    address: "",
    city: "",
    state: "",
    
  });

  const [instructorForm, setInstructorForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    gender: "",
    birth: "",
    age: "",
    address: "",
    city: "",
    state: "",
    
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChangeStudent = (e) => {
    const { name, value } = e.target;
    setStudentForm({ ...studentForm, [name]: value });
  };

  const handleChangeInstructor = (e) => {
    const { name, value } = e.target;
    setInstructorForm({ ...instructorForm, [name]: value });
  };

  const handleSubmitStudent = () => {
    dispatch(handleSudentRegister(studentForm, navigate));

    setStudentForm({
      name: "",
      email: "",
      mobile: "",
      password: "",
      gender: "",
      birth: "",
      age: "",
      address: "",
      city: "",
      state: "",

    });
  };

  const handleSubmitInstructor = () => {
    console.log("ints", instructorForm);

    dispatch(handleInstructorRegister(instructorForm, navigate))

    setInstructorForm({
      name: "",
      email: "",
      mobile: "",
      password: "",
      gender: "",
      birth: "",
      age: "",
      address: "",
      city: "",
      state: "",
    });
  };

  useEffect(() => {
    document.title = "SignUp | Edusphere";
  }, []);

  return (
    <Box
      // h={"100vh"}
      background="linear-gradient(
            90deg,
            rgba(2, 0, 36, 1) 0%,
            rgba(9, 9, 121, 1) 35%,
            rgba(0, 212, 255, 1) 100%
          )"
      // position={"relative"}
      p={"30px"}
    >
      <Box
        w={"40%"}
        p={"1%"}
        boxShadow={"md"}
        bg={"white"}
        // position={"absolute"}
        // top={"4%"}
        // left={"30%"}
        borderRadius={"10px"}
        m={"auto"}
       
      >
        <Heading fontFamily={"serif"}>SignUp</Heading>
        <Box mt={"10px"}>
          <Tabs variant="soft-rounded" colorScheme="blue">
            <TabList
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              p={"10px"}
              borderRadius={"10px"}
              boxShadow={"2xl"}
            >
              <Tab>Student</Tab>
              <Tab>Instructor</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Box boxShadow={"2xl"} p={"10px 20px"} borderRadius={"5px"}>
                  <Box
                    display={"grid"}
                    gridTemplateColumns={"repeat(2, 1fr)"}
                    gap={"10px"}
                  >
                    <FormControl>
                      <FormLabel>Name</FormLabel>
                      <Input
                        type="text"
                        placeholder="Enter name"
                        name="name"
                        value={studentForm.name}
                        onChange={handleChangeStudent}
                        isRequired
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Email</FormLabel>
                      <Input
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={studentForm.email}
                        onChange={handleChangeStudent}
                        isRequired
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Mobile Number</FormLabel>
                      <Input
                        type="tel"
                        placeholder="Enter number"
                        name="mobile"
                        value={studentForm.mobile}
                        onChange={handleChangeStudent}
                        isRequired
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Password</FormLabel>
                      <Input
                        type="password"
                        placeholder="Enter password"
                        name="password"
                        value={studentForm.password}
                        onChange={handleChangeStudent}
                        isRequired
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Gender</FormLabel>
                      <Select
                        placeholder="Select gender"
                        name="gender"
                        onChange={handleChangeStudent}
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </Select>
                    </FormControl>
                    <FormControl>
                      <FormLabel>Date of Birth</FormLabel>
                      <Input
                        type="date"
                        name="birth"
                        value={studentForm.birth}
                        onChange={handleChangeStudent}
                        isRequired
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Age</FormLabel>
                      <Input
                        type="text"
                        placeholder="Enter age"
                        name="age"
                        value={studentForm.age}
                        onChange={handleChangeStudent}
                        isRequired
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Address</FormLabel>
                      <Input
                        type="text"
                        placeholder="Enter address"
                        name="address"
                        value={studentForm.address}
                        onChange={handleChangeStudent}
                        isRequired
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>City</FormLabel>
                      <Input
                        type="text"
                        placeholder="Enter city"
                        name="city"
                        value={studentForm.city}
                        onChange={handleChangeStudent}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>State</FormLabel>
                      <Input
                        type="text"
                        placeholder="Enter state"
                        name="state"
                        value={studentForm.state}
                        onChange={handleChangeStudent}
                      />
                    </FormControl>
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent={"flex-end"}
                    alignItems={"center"}
                    mt={"20px"}
                  >
                    <Button colorScheme="blue" onClick={handleSubmitStudent}>
                      Submit
                    </Button>
                  </Box>
                </Box>
              </TabPanel>
              <TabPanel>
                <Box boxShadow={"2xl"} p={"10px 20px"} borderRadius={"5px"}>
                  <Box
                    display={"grid"}
                    gridTemplateColumns={"repeat(2, 1fr)"}
                    gap={"10px"}
                  >
                    <FormControl>
                      <FormLabel>Name</FormLabel>
                      <Input
                        type="text"
                        placeholder="Enter name"
                        name="name"
                        value={instructorForm.name}
                        onChange={handleChangeInstructor}
                        isRequired
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Email</FormLabel>
                      <Input
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={instructorForm.email}
                        onChange={handleChangeInstructor}
                        isRequired
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Mobile Number</FormLabel>
                      <Input
                        type="tel"
                        placeholder="Enter number"
                        name="mobile"
                        value={instructorForm.mobile}
                        onChange={handleChangeInstructor}
                        isRequired
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Password</FormLabel>
                      <Input
                        type="password"
                        placeholder="Enter password"
                        name="password"
                        value={instructorForm.password}
                        onChange={handleChangeInstructor}
                        isRequired
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Gender</FormLabel>
                      <Select
                        placeholder="Select gender"
                        name="gender"
                        onChange={handleChangeInstructor}
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </Select>
                    </FormControl>
                    <FormControl>
                      <FormLabel>Date of Birth</FormLabel>
                      <Input
                        type="date"
                        name="birth"
                        value={instructorForm.birth}
                        onChange={handleChangeInstructor}
                        isRequired
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Age</FormLabel>
                      <Input
                        type="text"
                        placeholder="Enter age"
                        name="age"
                        value={instructorForm.age}
                        onChange={handleChangeInstructor}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Address</FormLabel>
                      <Input
                        type="text"
                        placeholder="Enter address"
                        name="address"
                        value={instructorForm.address}
                        onChange={handleChangeInstructor}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>City</FormLabel>
                      <Input type="text" placeholder="Enter city" name="city" value={instructorForm.city} onChange={handleChangeInstructor} />
                    </FormControl>
                    <FormControl>
                      <FormLabel>State</FormLabel>
                      <Input type="text" placeholder="Enter state" name="state" value={instructorForm.state} onChange={handleChangeInstructor} />
                    </FormControl>
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent={"flex-end"}
                    alignItems={"center"}
                    mt={"20px"}
                  >
                    <Button onClick={handleSubmitInstructor} colorScheme="blue">Submit</Button>
                  </Box>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
}
export default Signup;
