import React from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import bg from "../assets/impact_bg.png";

const ImpactItem = ({ number, text, hasBox }) => (
  <GridItem position="relative" my={5}>
    <VStack spacing={1} textAlign="center">
      <Text fontSize={["3xl", "4xl", "5xl"]} fontWeight="bold">
        {number}
      </Text>
      <Text fontSize={["xs", "sm"]} maxWidth="150px">
        {text}
      </Text>
    </VStack>
    {hasBox && (
      <Box
        position="absolute"
        top="-10px"
        left="-10px"
        right="-10px"
        bottom="-10px"
        borderRight={["", "", "1px solid red"]}
        zIndex="1"
      />
    )}
  </GridItem>
);

const Impact = () => {
  const columns = useBreakpointValue({ base: 2, md: 4 });

  const impactData = [
    { number: "31+", text: "Startups Incubated" },
    { number: "72%", text: "Startups Funded" },
    { number: "6 Cr", text: "Incubator Grants" },
    { number: "200+", text: "Jobs Created" },
    { number: "21+", text: "Collaborations" },
    { number: "24+", text: "Investors" },
    { number: "30+", text: "Mentors & Advisors" },
    { number: "120+", text: "Outreach & Trainings" },
  ];

  const boxPositions = [0, 1, 2, 4, 5, 6];

  return (
    <Box
      backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bg})`}
      backgroundSize="cover"
      backgroundPosition="center"
      p={["4", "6", "8"]}
      color="white"
    >
      <Flex direction="column" alignItems="center">
        <Text
          fontSize={"2xl"}
          width={"50%"}
          textAlign={"center"}
          fontWeight={500}
          mb={10}
        >
          <span
            style={{ borderBottom: "4px solid #F21A28", paddingBottom: "3px" }}
          >
            Our
          </span>{" "}
          impact
        </Text>
        <Grid templateColumns={`repeat(${columns}, 1fr)`} gap={6} width="full">
          {impactData.map((item, index) => (
            <ImpactItem
              key={index}
              number={item.number}
              text={item.text}
              hasBox={boxPositions.includes(index)}
            />
          ))}
        </Grid>
      </Flex>
    </Box>
  );
};

export default Impact;
