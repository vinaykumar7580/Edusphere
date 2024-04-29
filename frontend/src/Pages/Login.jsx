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

function Login() {
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
        w={"30%"}
        p={"2%"}
        boxShadow={"md"}
        bg={"white"}
        position={"absolute"}
        top={"10%"}
        left={"35%"}
        borderRadius={"10px"}
      >
        <Heading fontFamily={"serif"}>Login</Heading>
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
                  <Box>
                    <FormControl>
                      <FormLabel>Mobile Number</FormLabel>
                      <Input type="tel" placeholder="Enter number" isRequired />
                    </FormControl>
                    <FormControl mt={"10px"}>
                      <FormLabel>Password</FormLabel>
                      <Input
                        type="password"
                        placeholder="Enter password"
                        isRequired
                      />
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
                  <Box>
                    <FormControl>
                      <FormLabel>Mobile Number</FormLabel>
                      <Input type="tel" placeholder="Enter number" isRequired />
                    </FormControl>
                    <FormControl mt={"10px"}>
                      <FormLabel>Password</FormLabel>
                      <Input
                        type="password"
                        placeholder="Enter password"
                        isRequired
                      />
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
export default Login;
