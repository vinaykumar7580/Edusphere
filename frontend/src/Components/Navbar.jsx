import { Box, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      p={"10px 50px"}
      boxShadow={"md"}
      // background="linear-gradient(
      //   90deg,
      //   rgba(2, 0, 36, 1) 0%,
      //   rgba(9, 9, 121, 1) 35%,
      //   rgba(0, 212, 255, 1) 100%
      // )"
      backgroundColor={"transparent"}
    >
      <Box fontSize={"30px"} fontWeight={"bold"} fontFamily={"cursive"} color={"white"}>
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
          <Text _hover={{borderBottom:"3px solid blue", color:"blue"}}>
            <Link to={"#"}>Features</Link>
          </Text>
          <Text _hover={{borderBottom:"3px solid blue", color:"blue"}}>
            <Link to={"#"}>Pricing</Link>
          </Text>
          <Text _hover={{borderBottom:"3px solid blue", color:"blue"}}>
            <Link to={"#"}>Community</Link>
          </Text>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={"20px"}
        >
          <Text _hover={{borderBottom:"3px solid blue", color:"blue"}}>
            <Link to={"/signup"}>SignUp</Link>
          </Text>
          <Text p={"5px 10px"} backgroundColor="rgba(0, 212, 255, 1)" borderRadius={"5px"}  _hover={{backgroundColor:"rgba(9, 9, 121, 1)"}}>
            <Link to={"/login"}>Login</Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
export default Navbar;
