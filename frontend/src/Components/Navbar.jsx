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
import { Link, useNavigate } from "react-router-dom";
import { IoNotifications } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Navbar() {
  const [token, setToken] = useState(null);
  const [role, setRole]=useState(null)
  

  const navigate = useNavigate();
 
  useEffect(() => {
    let tokenData = localStorage.getItem("token") || null;
    setToken(tokenData);

    let roleData= localStorage.getItem("role") || null;
    setRole(roleData)
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role")

    setToken(null);
    setRole(null)

    navigate("/");
  };

 

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      p={"10px 80px"}
      boxShadow={"md"}
      // backgroundColor={"rgba(0, 0, 0, 0.3)"}
      // backgroundColor={"black"}
      background="linear-gradient(
        90deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(9, 9, 121, 1) 35%,
        rgba(0, 212, 255, 1) 100%
      )"
      zIndex={2000}
    >
      <Box
        fontSize={"30px"}
        fontWeight={"bold"}
        fontFamily={"cursive"}
        color={"rgba(0, 212, 255, 1)"}
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
          {role == "student" && (
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={"20px"}
            >
              <Text _hover={{ borderBottom: "3px solid blue", color: "blue" }}>
                <Link to={"#"}>Lectures</Link>
              </Text>
              <Text _hover={{ borderBottom: "3px solid blue", color: "blue" }}>
                <Link to={"#"}>Assignments</Link>
              </Text>
              <Text _hover={{ borderBottom: "3px solid blue", color: "blue" }}>
                <Link to={"#"}>Tests</Link>
              </Text>
            </Box>
          )}

          {role == "instructor" && (
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={"20px"}
            >
              <Text _hover={{ borderBottom: "3px solid blue", color: "blue" }}>
                <Link to={"/instructor/lecture"}>Lectures</Link>
              </Text>
              <Text _hover={{ borderBottom: "3px solid blue", color: "blue" }}>
                <Link to={"#"}>Assignments</Link>
              </Text>
              <Text _hover={{ borderBottom: "3px solid blue", color: "blue" }}>
                <Link to={"#"}>Tests</Link>
              </Text>
              <Text _hover={{ borderBottom: "3px solid blue", color: "blue" }}>
                <Link to={"#"}>Announcement</Link>
              </Text>
            </Box>
          )}
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
            {role == "student" && (
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
            )}
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
                  <MenuItem>Change Profile</MenuItem>
                  <MenuItem>Change Password</MenuItem>
                  <MenuItem>Privacy Policy</MenuItem>
                  <MenuItem>Settings</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
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
