import React from "react";
import { Flex, Text, Image } from "@chakra-ui/react";
import partners from "../assets/partner.png";
import bg from "../assets/bg.png";

const Partners = () => {
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
          }}
        >
          Our
        </span>{" "}
        Partners
      </Text>
      <Image src={partners} py={55} />
    </Flex>
  );
};

export default Partners;
