import {
  Box,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IoNotifications } from "react-icons/io5";

function Navbar() {
  const token = false;
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      p={"10px 80px"}
      boxShadow={"md"}
      // background="linear-gradient(
      //   90deg,
      //   rgba(2, 0, 36, 1) 0%,
      //   rgba(9, 9, 121, 1) 35%,
      //   rgba(0, 212, 255, 1) 100%
      // )"
      // backgroundColor={"transparent"}
      backgroundColor={"rgba(0, 0, 0, 0.3)"}
      zIndex={2000}
      
    >
      <Box
        fontSize={"30px"}
        fontWeight={"bold"}
        fontFamily={"cursive"}
        color={"white"}
      >
        <Link to={"/"}>EduSphere</Link>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={"50px"}
        color={"white"}
        fontWeight={"bold"}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={"20px"}
        >
          <Text _hover={{ borderBottom: "3px solid blue", color: "blue" }}>
            <Link to={"#"}>Features</Link>
          </Text>
          <Text _hover={{ borderBottom: "3px solid blue", color: "blue" }}>
            <Link to={"#"}>Pricing</Link>
          </Text>
          <Text _hover={{ borderBottom: "3px solid blue", color: "blue" }}>
            <Link to={"#"}>Community</Link>
          </Text>
        </Box>
        {token ? (
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={"20px"}
          >
            <Box>
              <Menu>
                <MenuButton mt={"10px"}>
                  <IoNotifications size={"20px"} />
                </MenuButton>
                <MenuList color={"black"}>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>
                  <MenuItem>Delete</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Box>
              <Menu>
                <MenuButton mt={"10px"}>
                  <Image
                    borderRadius="full"
                    boxSize="30px"
                    src="https://bit.ly/dan-abramov"
                    alt="Dan Abramov"
                  />
                </MenuButton>
                <MenuList color={"black"}>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>
                  <MenuItem>Delete</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        ) : (
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={"20px"}
          >
            <Text _hover={{ borderBottom: "3px solid blue", color: "blue" }}>
              <Link to={"/signup"}>SignUp</Link>
            </Text>
            <Text
              p={"5px 10px"}
              backgroundColor="rgba(0, 212, 255, 1)"
              borderRadius={"5px"}
              _hover={{ backgroundColor: "rgba(9, 9, 121, 1)" }}
            >
              <Link to={"/login"}>Login</Link>
            </Text>
          </Box>
        )}
      </Box>
    </Box>
  );
}
export default Navbar;
