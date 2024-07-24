import React from "react";
import sk from "../assets/Prof Suman Kundu.jpg";
import sb from "../assets/Prof Sunil Bhand.png";
import dmk from "../assets/Prof DM Kulkarni.jpg";
import mg from "../assets/Prof mridula goel.jpg";
import is from "../assets/Ian Sardinha.jpg";
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
              Te
            </span>{" "}
            am
          </Text>
        </Box>
        <Box>
          <Flex maxWidth={"85%"} marginY={10} marginX={"auto"} justifyContent={"space-around"} alignItems={"center"}>
            <Box textAlign={"center"}>
              <Image src={sk} display="block" boxSize={"8rem"} borderRadius={"16px"} />
              <Text marginTop={2}>Prof. Suman Kundu</Text>
              <Text>BGIIES President</Text>
            </Box>
            <Box textAlign={"center"}>
              <Image src={sb} display="block" boxSize={"8rem"} borderRadius={"16px"} />
              <Text marginTop={2}>Prof. Sunil Bhand</Text>
              <Text>BGIIES Vice President</Text>
            </Box>
            <Box textAlign={"center"}>
              <Image src={dmk} display="block" boxSize={"8rem"} borderRadius={"16px"} />
              <Text marginTop={2}>Prof. D. M. Kulkarni</Text>
              <Text>BGIIES Secretary</Text>
            </Box>
            <Box textAlign={"center"}>
              <Image src={mg} display="block" boxSize={"8rem"} borderRadius={"16px"} />
              <Text marginTop={2}>Prof. Mridula Goel</Text>
              <Text>BGIIES Joint Secretary</Text>
            </Box>
            <Box textAlign={"center"}>
              <Image src={is} display="block" boxSize={"8rem"} borderRadius={"16px"} />
              <Text marginTop={2}>Prof. Ian Francis Sardinha</Text>
              <Text>BGIIES Treasurer</Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default Team;
