import React from "react";
import { Flex, Text, Image } from "@chakra-ui/react";
import investors from "../assets/investors.png";
import bg from "../assets/bg.png";

const Investors = () => {
  return (
    <Flex
      backgroundImage={bg}
      backgroundPosition="center"
      backgroundRepeat={"no-repeat"}
      my={45}
      pt={10}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection="column"
    >
      <Text
        fontSize={"2xl"}
        mb={35}
        width={"50%"}
        textAlign={"center"}
        fontWeight={500}
      >
        <span
          style={{
            borderBottom: "4px solid #FFAF18",
            paddingBottom: "3px",
            marginRight: "-6.7px",
          }}
        >
          BGI
        </span>{" "}
        IES investors
      </Text>
      <Image src={investors} py={55} pb={100} />
    </Flex>
  );
};

export default Investors;
