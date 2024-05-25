import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { handleDeleteLecture, handleGetLectureDetails } from "../Redux/Lecture/action";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import {
  MdEditDocument,
  MdOutlineDateRange,
  MdOutlinePersonAddAlt,
} from "react-icons/md";
import { GoTag } from "react-icons/go";
import { RiDeleteBin6Fill } from "react-icons/ri";
import EditLecture from "../Components/EditLecture";

function LectureDetailsInstructor() {
  const params = useParams();

  const navigate=useNavigate()
  const dispatch = useDispatch();
  const { getLectureDetailsData } = useSelector(
    (store) => store.lectureReducer
  );

  useEffect(() => {
    document.title = "Lecture-Details | Edusphere";
  }, []);

  useEffect(() => {
    dispatch(handleGetLectureDetails(params.id));
  }, []);

  const handleDelete=(id)=>{
    dispatch(handleDeleteLecture(id, navigate))
  }

  const handleDateTime = (date) => {
    const localDate = new Date(date);

    const formattedDate = localDate.toLocaleString();
    return formattedDate;
  };

  console.log("getlecturedetails", getLectureDetailsData);

  return (
    <Box position={"relative"}>
      <Box w={"100%"} position={"fixed"} top={0} zIndex={500}>
        <Navbar />
      </Box>
      <Box w={"70%"} m={"auto"} mt={"100px"}>
        <Heading fontFamily={"serif"} color={"rgba(0, 212, 255, 1)"}>
          Lecture Details
        </Heading>
        <Box
          p={"20px"}
          mt={"20px"}
          boxShadow={
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
          }
          borderRadius={"10px"}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box>
              <Box
                display={"flex"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                gap={"20px"}
              >
                <Heading fontSize={"2xl"}>
                  {getLectureDetailsData && getLectureDetailsData?.title}
                </Heading>
                <Box
                  backgroundColor={"green.100"}
                  p={"3px 8px"}
                  borderRadius={"5px"}
                >
                  <Text fontSize={"12px"} color={"green"} fontWeight={"bold"}>
                    {getLectureDetailsData &&
                      getLectureDetailsData?.lectureType}
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
                  <Text>
                    {getLectureDetailsData &&
                      getLectureDetailsData.instructorName}
                  </Text>
                </Box>
                <Box display={"flex"} alignItems={"center"} gap={"7px"}>
                  <Box>
                    <MdOutlineDateRange size={"20px"} />
                  </Box>
                  <Text>
                    {handleDateTime(
                      getLectureDetailsData &&
                        getLectureDetailsData?.lectureTimeDate
                    )}
                  </Text>
                </Box>
                <Box display={"flex"} alignItems={"center"} gap={"7px"}>
                  <Box>
                    <GoTag size={"20px"} />
                  </Box>
                  <Text>
                    {getLectureDetailsData && getLectureDetailsData?.subject}
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"flex-end"}
              alignItems={"flex-start"}
              gap={"15px"}
            >
              <EditLecture data={getLectureDetailsData}/>
              <Button
                color={"red"}
                border={"1px solid red"}
                display={"flex"}
                alignItems={"center"}
                gap={"7px"}
                fontWeight={"bold"}
                onClick={()=>handleDelete(getLectureDetailsData?._id)}
              >
                <span>
                <RiDeleteBin6Fill />
                </span>
                <span>Delete</span>
              </Button>
              
            </Box>
          </Box>

          <hr style={{ border: "1px solid #ccc", marginTop: "10px" }} />
          {getLectureDetailsData && getLectureDetailsData?.videoUrl && (
            <Box w={"90%"} m={"auto"} mt={"20px"}>
              <Heading size={"lg"}>Lecture</Heading>

              <Box mt={"20px"}>
                <video margin="auto" controls>
                  <source
                    src={
                      getLectureDetailsData && getLectureDetailsData?.videoUrl
                    }
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </Box>
              <hr style={{ border: "1px solid #ccc", marginTop: "30px" }} />
            </Box>
          )}
          <Box w={"90%"} m={"auto"} mt={"20px"}>
            <Heading size={"lg"}>Notes</Heading>
            <Box mt={"20px"} textAlign={"left"}>
              <div
                className="note"
                dangerouslySetInnerHTML={{
                  __html: getLectureDetailsData && getLectureDetailsData?.notes,
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box mt={"50px"}>
        <Footer />
      </Box>
    </Box>
  );
}
export default LectureDetailsInstructor;
