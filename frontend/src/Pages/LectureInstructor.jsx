import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import CreateLecture from "../Components/CreateLecture";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleGetLecture } from "../Redux/Lecture/action";
import { MdOutlineDateRange, MdOutlinePersonAddAlt } from "react-icons/md";
import { GoTag } from "react-icons/go";

function LectureInstructor() {
  const dispatch = useDispatch();
  const { getLectureData } = useSelector((store) => store.lectureReducer);

  useEffect(() => {
    document.title = "Lecture | Edusphere";
  }, []);

  useEffect(() => {
    dispatch(handleGetLecture);
  }, []);

  const handleDateTime = (date) => {
    const localDate = new Date(date);

    const formattedDate = localDate.toLocaleString();
    return formattedDate;
  };

  let data = getLectureData.reverse();

  console.log("getlecture", getLectureData);

  return (
    <Box>
      <Navbar />
      <Box w={"70%"} m={"auto"} mt={"30px"}>
        <Heading fontFamily={"serif"} color={"rgba(0, 212, 255, 1)"}>
          Lectures
        </Heading>
        <Box display={"flex"} justifyContent={"flex-end"} alignItems={"center"}>
          <CreateLecture />
        </Box>
        <Box
          p={"20px"}
          mt={"20px"}
          boxShadow={
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
          }
          borderRadius={"10px"}
        >
          {data &&
            data?.map((el) => (
              <Box key={el._id} p={"7px"} cursor={"pointer"}>
                <Box
                  display={"flex"}
                  justifyContent={"flex-start"}
                  alignItems={"center"}
                  gap={"20px"}
                >
                  <Heading fontSize={"2xl"}>{el.title}</Heading>
                  <Box
                    backgroundColor={"green.100"}
                    p={"3px 8px"}
                    borderRadius={"5px"}
                  >
                    <Text fontSize={"12px"} color={"green"} fontWeight={"bold"}>
                      {el.lectureType}
                    </Text>
                  </Box>
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"flex-start"}
                  alignItems={"center"}
                  gap={"20px"}
                  mt={"10px"}
                >
                  <Box display={"flex"} alignItems={"center"} gap={"7px"}>
                    <Box>
                      <MdOutlinePersonAddAlt size={"22px"} />
                    </Box>
                    <Text>{el.instructorName}</Text>
                  </Box>
                  <Box display={"flex"} alignItems={"center"} gap={"7px"}>
                    <Box>
                      <MdOutlineDateRange size={"20px"} />
                    </Box>
                    <Text>{handleDateTime(el.lectureTimeDate)}</Text>
                  </Box>
                  <Box display={"flex"} alignItems={"center"} gap={"7px"}>
                    <Box>
                      <GoTag size={"20px"} />
                    </Box>
                    <Text>{el.subject}</Text>
                  </Box>
                </Box>
                <hr style={{ border: "1px solid #ccc", marginTop: "10px" }} />
              </Box>
            ))}
        </Box>
      </Box>
    </Box>
  );
}

export default LectureInstructor;
