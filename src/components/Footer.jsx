import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Flex flexDir="column" bgColor={"#084F83"} color={"white"} justifyContent={"center"} alignItems={"center"} p={"4rem"}>
        For collaboration or to learn more about BGIIES please connect with us at:
        <Flex mt={"2rem"} justifyContent={"space-around"}>
          <Flex flexDir={"column"} justifyContent={"space-around"} maxW={"25%"}>
            <Text>With over 2 decades of a strong legacy behind us, we boast of global grade facilities for impeccable solutions</Text>
            <Text>
              Call Toll free no:
              <br />
              +91 22XXXXXXXX
            </Text>
          </Flex>
          <Flex maxW={"25%"}>
            <Text>
              Address:
              <br />
              BITS PILANI K.K. BIRLA GOA CAMPUS,
              <br />
              ZUARINAGAR, GOA - 403712
            </Text>
          </Flex>
          <Flex flexDir={"column"} maxW={"25%"}>
            Important Links:
            <ul>
              <li>About Us</li>
              <li>Our Experts</li>
              <li>Services</li>
              <li>Investment</li>
              <li>Contact Us</li>
              <li>Career</li>
            </ul>
          </Flex>
        </Flex>
      </Flex>
      <Flex bgColor={"#F17400"} color={"white"} alignItems={"center"} justifyContent={"center"}>
        Copyright @bgiies, All rights reserved
      </Flex>
    </>
  );
};

export default Footer;