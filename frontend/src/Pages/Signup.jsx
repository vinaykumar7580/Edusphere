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

function Signup() {
  return (
    <Box
      h={"100vh"}
      background="linear-gradient(
            90deg,
            rgba(2, 0, 36, 1) 0%,
            rgba(9, 9, 121, 1) 35%,
            rgba(0, 212, 255, 1) 100%
          )"
      position={"relative"}
    >
      <Box
        w={"40%"}
        p={"2%"}
        boxShadow={"md"}
        bg={"white"}
        position={"absolute"}
        top={"5%"}
        left={"30%"}
        borderRadius={"10px"}
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
                <Box boxShadow={"2xl"} p={"20px"} borderRadius={"5px"}>
                  <Box
                    display={"grid"}
                    gridTemplateColumns={"repeat(2, 1fr)"}
                    gap={"10px"}
                  >
                    <FormControl>
                      <FormLabel>Name</FormLabel>
                      <Input type="text" placeholder="Enter name" isRequired />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Email</FormLabel>
                      <Input
                        type="email"
                        placeholder="Enter email"
                        isRequired
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Mobile Number</FormLabel>
                      <Input type="tel" placeholder="Enter number" isRequired />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Password</FormLabel>
                      <Input
                        type="password"
                        placeholder="Enter password"
                        isRequired
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Gender</FormLabel>
                      <Select placeholder="Select gender">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </Select>
                    </FormControl>
                    <FormControl>
                      <FormLabel>Date of Birth</FormLabel>
                      <Input type="date" isRequired />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Class</FormLabel>
                      <Select placeholder="Select class">
                        <option value="Fifth">Fifth</option>
                        <option value="Sixth">Sixth</option>
                        <option value="Seventh">Seventh</option>
                        <option value="Eighth">Eighth</option>
                        <option value="Ninth">Ninth</option>
                        <option value="Tenth">Tenth</option>
                        <option value="Eleventh">Eleventh</option>
                        <option value="Twelfth">Twelfth</option>
                      </Select>
                    </FormControl>
                    <FormControl>
                      <FormLabel>Stream</FormLabel>
                      <Select placeholder="Select stream">
                        <option value="Science">Science</option>
                        <option value="Arts">Arts</option>
                      </Select>
                    </FormControl>
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent={"flex-end"}
                    alignItems={"center"}
                    mt={"20px"}
                  >
                    <Button colorScheme="blue">Submit</Button>
                  </Box>
                </Box>
              </TabPanel>
              <TabPanel>
                <Box boxShadow={"2xl"} p={"20px"} borderRadius={"5px"}>
                  <Box
                    display={"grid"}
                    gridTemplateColumns={"repeat(2, 1fr)"}
                    gap={"10px"}
                  >
                    <FormControl>
                      <FormLabel>Name</FormLabel>
                      <Input type="text" placeholder="Enter name" isRequired />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Email</FormLabel>
                      <Input
                        type="email"
                        placeholder="Enter email"
                        isRequired
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Mobile Number</FormLabel>
                      <Input type="tel" placeholder="Enter number" isRequired />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Password</FormLabel>
                      <Input
                        type="password"
                        placeholder="Enter password"
                        isRequired
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Gender</FormLabel>
                      <Select placeholder="Select gender">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </Select>
                    </FormControl>
                    <FormControl>
                      <FormLabel>Date of Birth</FormLabel>
                      <Input type="date" isRequired />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Subject</FormLabel>
                      <Select placeholder="Select subject">
                        <option value="Mathematics">Mathematics</option>
                        <option value="Physics">Physics</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Biology">Biology</option>
                        <option value="History">History</option>
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Marathi">Marathi</option>
                        <option value="Geography">Geography</option>
                        <option value="Computer Science">
                          Computer Science
                        </option>
                        <option value="Information Technology">
                          Information Technology
                        </option>
                        <option value="Physical Education">
                          Physical Education
                        </option>
                      </Select>
                    </FormControl>
                    <FormControl>
                      <FormLabel>Class</FormLabel>
                      <Select placeholder="Select class">
                        <option value="Fifth">Fifth</option>
                        <option value="Sixth">Sixth</option>
                        <option value="Seventh">Seventh</option>
                        <option value="Eighth">Eighth</option>
                        <option value="Ninth">Ninth</option>
                        <option value="Tenth">Tenth</option>
                        <option value="Eleventh">Eleventh</option>
                        <option value="Twelfth">Twelfth</option>
                      </Select>
                    </FormControl>
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent={"flex-end"}
                    alignItems={"center"}
                    mt={"20px"}
                  >
                    <Button colorScheme="blue">Submit</Button>
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
