import { Box, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneSquareAlt, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <Box
      background="linear-gradient(
              90deg,
              rgba(2, 0, 36, 1) 0%,
              rgba(9, 9, 121, 1) 35%,
              rgba(0, 212, 255, 1) 100%
            )"
    >
      <Box w={"90%"} m={"auto"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"flex-start"}
          p={"50px"}
          textAlign={"left"}
        >
          <Box w={"30%"} color={"white"}>
            <Heading
              fontSize={"30px"}
              fontWeight={"bold"}
              fontFamily={"cursive"}
              color={"white"}
            >
              EduSphere
            </Heading>
            <Text mt={"10px"}>
              EduSphere is an advanced educational management platform designed
              to enhance the learning experience for students, instructors
              within educational institutions.
            </Text>
          </Box>
          <Box
            w={"60%"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"flex-start"}
          >
            <Box color={"white"}>
              <Text fontWeight={"Bold"}>COMPANY</Text>
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={"5px"}
                mt={"10px"}
              >
                <Link to={"#"}>About Us</Link>
                <Link to={"#"}>Compliance</Link>
                <Link to={"#"}>Careers</Link>
                <Link to={"#"}>Privacy Policies</Link>
                <Link to={"#"}>Terms & Conditions</Link>
              </Box>
            </Box>
            <Box color={"white"}>
              <Text fontWeight={"Bold"}>CLASSES</Text>
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={"5px"}
                mt={"10px"}
              >
                <Link to={"#"}>Class 1st - 3rd</Link>
                <Link to={"#"}>Class 4th - 5th</Link>
                <Link to={"#"}>Class 6th - 10th</Link>
                <Link to={"#"}>Class 11th - 12th</Link>
                <Link to={"#"}>Tuition Centre</Link>
              </Box>
            </Box>
            <Box color={"white"}>
              <Text fontWeight={"Bold"}>HELP & SUPPORT</Text>
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={"5px"}
                mt={"10px"}
              >
                <Link to={"#"}>User Guidelines</Link>
                <Link to={"#"}>Site Map</Link>
                <Link to={"#"}>Refund Policy</Link>
                <Link to={"#"}>Takedown Policy</Link>
                <Link to={"#"}>Grievance Redressal</Link>
              </Box>
            </Box>
            <Box color={"white"}>
              <Text fontWeight={"Bold"}>FOLLOW US</Text>
              <Box
                display={"flex"}
                flexDirection={"row"}
                gap={"10px"}
                mt={"10px"}
              >
                <Link to={"#"}>
                  <FaFacebook size={"20px"} />
                </Link>
                <Link to={"#"}>
                  <FaLinkedin size={"20px"} />
                </Link>
                <Link to={"#"}>
                  <FaTwitter size={"20px"} />
                </Link>
                <Link to={"#"}>
                  <FaInstagram size={"20px"} />
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
        <hr />
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"flex-start"}
          p={"10px 50px 10px 50px"}
          color={"white"}
        >
            <Box display={"flex"} justifyContent={"flex-start"} alignItems={"center"} gap={"5px"}>
                <Text><FaPhoneSquareAlt size={"18px"}/></Text>
                <Text>+91 8933783783</Text>
            </Box>
            <Box>
                <Text>&copy; {new Date().getFullYear()} Edusphere, All Rights Reserved.</Text>
            </Box>
            <Box display={"flex"} justifyContent={"flex-start"} alignItems={"center"} gap={"5px"}>
                <Text><MdEmail size={"18px"}/></Text>
                <Text>contact@edusphere.com</Text>
            </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default Footer;
