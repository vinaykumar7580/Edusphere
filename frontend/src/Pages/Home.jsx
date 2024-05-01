import { Box, Image, Text, Heading, Button } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate=useNavigate()

  return (
    <Box>
      <Box>
        <Box h={"100vh"} position={"relative"}>
          <Image
            w={"100%"}
            h={"100%"}
            src="https://cdn.pixabay.com/photo/2018/03/21/07/16/learning-3245793_1280.jpg"
            alt="image-poster"
          />
          <Box w={"100%"} position={"fixed"} top={0}>
            <Navbar />
          </Box>
          <Box
            p={"25px"}
            textAlign={"left"}
            backgroundColor={"rgba(0, 0, 0, 0.3)"}
            color={"white"}
            borderRadius={"10px"}
            zIndex={"1"}
            fontWeight={"bold"}
            position={"absolute"}
            top={"200px"}
            left={"170px"}
          >
            <Text color={"orange"}>ADVANCE YOUR CAREER</Text>
            <Heading fontFamily={"serif"} mt={"5px"}>
              The more you learn.
            </Heading>
            <Heading fontFamily={"serif"}>The faster you build.</Heading>
            <Text mt={"5px"} color="#959595">
              Are you ready to develop your professional skills?
            </Text>
            <Text color={"#959595"}>You are in the right place.</Text>
            <Box mt={"20px"} display={"flex"} justifyContent={"flex-start"} alignItems={"center"} gap={"20px"}>
              <Button onClick={()=>navigate("/signup")} colorScheme="orange">SIGN UP NOW</Button>
              <Button onClick={()=>navigate("/login")} colorScheme="orange">LOGIN HERE</Button>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box></Box>
          <Box></Box>
        </Box>
      </Box>
    </Box>
  );
}
export default Home;
