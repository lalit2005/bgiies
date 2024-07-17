import React from "react";
import person from "../assets/person.png";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
const Team = () => {
  return (
    <div>
      <Box marginTop={30}>
        <Box textAlign={"center"}>
          <p>Meet Our</p>
          <Text fontSize={"2xl"} textAlign={"center"} fontWeight={500}>
            <span
              style={{
                borderBottom: "4px solid #00D03A",
                paddingBottom: "3px",
                marginRight: "-6px",
              }}
            >
              Me
            </span>{" "}
            ntors
          </Text>
        </Box>
        <Box>
          <Flex
            maxWidth={"85%"}
            marginY={10}
            marginX={"auto"}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <Box textAlign={"center"}>
              <Image src={person} display="block" />
              <Text marginTop={2}>Prof. Suman Kundu</Text>
              <Text>BGIIES President</Text>
            </Box>
            <Box textAlign={"center"}>
              <Image src={person} display="block" />
              <Text marginTop={2}>Prof. Sunil Bhand</Text>
              <Text>BGIIES President</Text>
            </Box>
            <Box textAlign={"center"}>
              <Image src={person} display="block" />
              <Text marginTop={2}>Prof. D. M. Kulkarni</Text>
              <Text>BGIIES President</Text>
            </Box>
            <Box textAlign={"center"}>
              <Image src={person} display="block" />
              <Text marginTop={2}>Prof. Mridula Goel</Text>
              <Text>BGIIES President</Text>
            </Box>
            <Box textAlign={"center"}>
              <Image src={person} display="block" />
              <Text marginTop={2}>Prof. Ian Francis Sardinha</Text>
              <Text>BGIIES President</Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default Team;
