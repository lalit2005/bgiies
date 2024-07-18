import { Flex, Box, Image, Text } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import img from "../assets/why-choose-us.png";
import React from "react";

const WhyChooseUs = () => {
  return (
    <>
      <Flex alignItems={"center"} justifyContent="center" mb="2.5rem">
        <Text fontSize={"2xl"} textAlign={"center"} fontWeight={500}>
          <span
            style={{
              borderBottom: "4px solid #FFAF18",
              paddingBottom: "3px",
            }}
          >
            Why
          </span>{" "}
          choose us?
        </Text>
      </Flex>
      <Flex
        maxWidth={"90vw"}
        mx="auto"
        py="15px"
        width={"100%"}
        flexDirection={["column", "column", "row"]}
        alignItems={["center", "center", "start"]}
        justifyContent={"center"}
      >
        <Box>
          <Image src={img} width={"100%"} />
        </Box>
        <Box maxWidth={["90%", "90%", "60%"]} mt={[10, 10, 0]} px={"10px"}>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem
              borderRadius={"22px"}
              backgroundColor="white"
              color={"black"}
              border="2px solid #FFAF18"
              _expanded={{
                bg: "#FFAF18",
                color: "white",
              }}
            >
              <h2>
                <AccordionButton
                  borderRadius={"20px"}
                  _expanded={{
                    bg: "#FFAF18",
                    color: "white",
                    borderBottomRadius: "0px",
                  }}
                >
                  <Box as="span" flex="1" textAlign="left" fontWeight={"700"}>
                    Complete Ecosystem
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} bg="#FFAF18" color={"white"}>
              With over 2 decades of a strong legacy behind us, we boast of global grade facilities for impeccable solutions
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              borderRadius={"22px"}
              backgroundColor="white"
              color={"black"}
              border="2px solid #FFAF18"
              _expanded={{
                bg: "#FFAF18",
                color: "white",
              }}
            >
              <h2>
                <AccordionButton
                  borderRadius={"20px"}
                  _expanded={{
                    bg: "#FFAF18",
                    color: "white",
                    borderBottomRadius: "0px",
                  }}
                >
                  <Box as="span" flex="1" textAlign="left" fontWeight={"700"}>
                    Mentoring Expertise
                  </Box>
                  {/* <AccordionIcon /> */}
                </AccordionButton>
              </h2>
              {/* <AccordionPanel pb={4} bg="#FFAF18" color={"white"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel> */}
            </AccordionItem>
            <AccordionItem
              borderRadius={"22px"}
              backgroundColor="white"
              color={"black"}
              border="2px solid #FFAF18"
              _expanded={{
                bg: "#FFAF18",
                color: "white",
              }}
            >
              <h2>
                <AccordionButton
                  borderRadius={"20px"}
                  _expanded={{
                    bg: "#FFAF18",
                    color: "white",
                    borderBottomRadius: "0px",
                  }}
                >
                  <Box as="span" flex="1" textAlign="left" fontWeight={"700"}>
                    Track Record
                  </Box>
                  {/* <AccordionIcon /> */}
                </AccordionButton>
              </h2>
              {/* <AccordionPanel pb={4} bg="#FFAF18" color={"white"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel> */}
            </AccordionItem>
            <AccordionItem
              borderRadius={"22px"}
              backgroundColor="white"
              color={"black"}
              border="2px solid #FFAF18"
              _expanded={{
                bg: "#FFAF18",
                color: "white",
              }}
            >
              <h2>
                <AccordionButton
                  borderRadius={"20px"}
                  _expanded={{
                    bg: "#FFAF18",
                    color: "white",
                    borderBottomRadius: "0px",
                  }}
                >
                  <Box as="span" flex="1" textAlign="left" fontWeight={"700"}>
                    Stimulating Environment
                  </Box>
                  {/* <AccordionIcon /> */}
                </AccordionButton>
              </h2>
              {/* <AccordionPanel pb={4} bg="#FFAF18" color={"white"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel> */}
            </AccordionItem>
          </Accordion>
        </Box>
      </Flex>
    </>
  );
};

export default WhyChooseUs;
