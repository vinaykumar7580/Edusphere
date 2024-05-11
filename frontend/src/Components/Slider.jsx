import React from "react";
import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const testimonialData = [
  { 
    img1: 'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=600', 
    img2: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600', 
    img3: 'https://images.pexels.com/photos/1326947/pexels-photo-1326947.jpeg?auto=compress&cs=tinysrgb&w=600', 
    img4: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=600', 
    text1: 'I love the interactive lessons!', 
    text2: 'Great instructors, very helpful!', 
    text3: 'I have learned so much from this platform!', 
    text4: 'Highly recommended for anyone looking to learn.' 
  },
  { 
    img1: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600', 
    img2: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=600', 
    img3: 'https://images.pexels.com/photos/19954774/pexels-photo-19954774/free-photo-of-pupil-writing-down-at-school.jpeg?auto=compress&cs=tinysrgb&w=600', 
    img4: 'https://images.pexels.com/photos/4145197/pexels-photo-4145197.jpeg?auto=compress&cs=tinysrgb&w=600', 
    text1: 'The courses are well-structured and easy to follow.', 
    text2: 'I appreciate the variety of topics covered.', 
    text3: 'The quizzes and assignments help reinforce learning.', 
    text4: 'Excellent support team, always responsive to queries.' 
  },
];

const TestimonialCarousel = () => {
  return (
    <Box m={"4%"} >
      <Carousel
        autoPlay={true}
        showArrows={false}
        infiniteLoop={true}
        interval={5000}
        stopOnHover={true}
        showThumbs={false}
       
      >
        {testimonialData.map((testimonial, index) => (
          <Box key={index}>
            <SimpleGrid columns={[2, 2, 4]} gap={"1%"}>
              <div>
                <Image src={testimonial.img1} borderRadius={"20px"} />
                <Text mt={"5px"}>{testimonial.text1}</Text>
              </div>
              <div>
                <Image src={testimonial.img2} borderRadius={"20px"} />
                <Text mt={"5px"}>{testimonial.text2}</Text>
              </div>
              <div>
                <Image src={testimonial.img3} borderRadius={"20px"} />
                <Text mt={"5px"}>{testimonial.text3}</Text>
              </div>
              <div>
                <Image src={testimonial.img4} borderRadius={"20px"} />
                <Text mt={"5px"}>{testimonial.text4}</Text>
              </div>
            </SimpleGrid>
          </Box>
        ))}
      </Carousel>
      <hr
        style={{
          width: "100%",
          fontWeight: "800",
          border: "2px solid #d5dde0",
        }}
      />
    </Box>
  );
};

export default TestimonialCarousel;
