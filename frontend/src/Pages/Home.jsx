import { Box, Image, Text, Heading, Button } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import TestimonialSlider from "../Components/Slider";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";

function Home() {
  const [token, setToken]=useState(null)
  const [role, setRole]=useState(null)
  const navigate = useNavigate();

  useEffect(()=>{
    document.title="Home | Edusphere"
  },[])

  useEffect(()=>{
    let tokenData = localStorage.getItem("token") || null;
    setToken(tokenData);

    let roleData = localStorage.getItem("role") || null;
    setRole(roleData);
  },[])

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
            p={"50px"}
            textAlign={"center"}
            backgroundColor={"rgba(0, 0, 0, 0.3)"}
            color={"white"}
            borderRadius={"5%"}
            zIndex={1}
            fontWeight={"bold"}
            position={"absolute"}
            top={"180px"}
            left={"540px"}
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

            <Box mt={"20px"}>
              <Heading fontFamily={"cursive"} color={"orange"} fontSize={"23px"}>WelCome To Edusphere</Heading>
            </Box>
            {/* <Box
              mt={"20px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"20px"}
            >
              <Button onClick={() => navigate("/signup")} colorScheme="orange">
                SIGN UP NOW
              </Button>
              <Button onClick={() => navigate("/login")} colorScheme="orange">
                LOGIN HERE
              </Button>
            </Box> */}
          </Box>
        </Box>
        <Box w={"70%"} m={"auto"} mt={"50px"}>
          <Heading fontFamily={"serif"} color={"rgba(0, 212, 255, 1)"}>
            Get the EduSphere advantage
          </Heading>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={"30px"}
            mt={"20px"}
          >
            <Box>
              <Image
                w={"100%"}
                h={"100%"}
                src="https://cdn1.byjus.com/wp-content/uploads/2022/04/concept-clarity.png"
                alt="box-images"
              />
              <Text fontWeight={"bold"}>
                Conceptual clarity through visualisation
              </Text>
            </Box>
            <Box></Box>
            <Box>
              <Image
                w={"100%"}
                h={"100%"}
                src="https://cdn1.byjus.com/wp-content/uploads/2022/04/personalised-learning.png"
                alt="box-images"
              />
              <Text fontWeight={"bold"}>Personalised learning programs</Text>
            </Box>
            <Box></Box>
            <Box>
              <Image
                w={"100%"}
                h={"100%"}
                src="https://cdn1.byjus.com/wp-content/uploads/2022/04/unmatched-attention.png"
                alt="box-images"
              />
              <Text fontWeight={"bold"}>Unmatched individual attention</Text>
            </Box>
          </Box>
        </Box>

        <Box w={"70%"} m={"auto"} mt={"50px"}>
          <Heading fontFamily={"serif"} color={"rgba(0, 212, 255, 1)"}>
            Learning Through Classes
          </Heading>
          <Box
            display={"grid"}
            gridTemplateColumns={"repeat(3, 1fr)"}
            alignItems={"center"}
            gap="20px"
            mt={"20px"}
          >
            <Box textAlign={"left"}>
              <Image
                w={"100%"}
                h={"100%"}
                src="https://media.gettyimages.com/id/1214466192/photo/sister-doing-homework-at-home-stock-photo.jpg?s=612x612&w=0&k=20&c=pgMeZePZ-J4HDLcnqQ7M33vsBTVn9oFPd7kzs6kpmnw="
                alt="box-images"
              />
              <Text fontWeight={"bold"} fontSize={"20px"} mt={"10px"}>
                Daily live classes
              </Text>
              <Text mt={"20px"}>
                Chat with educators, ask questions, answer live polls, and get
                your doubts cleared - all while the class is going on
              </Text>
            </Box>

            <Box textAlign={"left"}>
              <Image
                w={"100%"}
                h={"100%"}
                src="https://media.gettyimages.com/id/1222965055/photo/kolkata-west-bengal-india-a-school-student-attending-an-online-class-from-home-in-kolkata-due.jpg?s=612x612&w=0&k=20&c=yxB0pmizCeDV7KB_SHMCy_QsKel-MqdW64AD4PtL-Yg="
                alt="box-images"
              />
              <Text fontWeight={"bold"} fontSize={"20px"} mt={"10px"}>
                Practice and revise
              </Text>
              <Text mt={"20px"}>
                Learning isn't just limited to classes with our practice
                section, mock tests and lecture notes shared as PDFs for your
                revision
              </Text>
            </Box>

            <Box textAlign={"left"}>
              <Image
                w={"100%"}
                h={"100%"}
                src="https://media.gettyimages.com/id/1243496783/photo/women-attending-business-video-call-from-home.jpg?s=612x612&w=0&k=20&c=pjEBkR7jM_r-avYneF3ql3Xfg1C9BHpwhYYdVDBu7tI="
                alt="box-images"
              />
              <Text fontWeight={"bold"} fontSize={"20px"} mt={"10px"}>
                Learn anytime, anywhere
              </Text>
              <Text mt={"20px"}>
                One subscription gets you access to all our live and recorded
                classes to watch from the comfort of any of your devices
              </Text>
            </Box>
          </Box>
        </Box>

        <Box w={"77%"} m={"auto"} mt={"50px"}>
          <Heading fontFamily={"serif"} color={"rgba(0, 212, 255, 1)"}>
            What our students say's
          </Heading>
          <Box>
            <TestimonialSlider/>
          </Box>
        </Box>

        <Box mt={"30px"}>
          <Footer/>
        </Box>
      </Box>
    </Box>
  );
}
export default Home;
