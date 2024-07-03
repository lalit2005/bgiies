import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import home from "../assets/home_bg.png";
import logo from "../assets/logo.png";
import tags from "../assets/5 tags.png";

const Home = () => {
  return (
    <Stack background={`linear-gradient(to left, rgba(2, 204, 222, 0.4), rgba(2, 108, 222, 0.6)), url(${home})`} alignItems={"center"} justifyContent={"center"} color={"white"} spacing={3}>
      <Image src={logo} mt={"5%"} />
      <Text fontSize={"5xl"} width={"40%"} textAlign={"center"}>
        Building the Next Generation of Startups
      </Text>
      <Text width={"45%"} textAlign={"center"}>
        The BITS Goa Innovation Incubation Entrepreneurship Society (BIIES) fosters innovation and entrepreneurship by providing mentorship, funding, and resources to help turn ideas into successful
        ventures.
      </Text>
      <Flex width={"100%"} mt={"4rem"}>
        <Image src={tags} />
      </Flex>
    </Stack>
    // <Flex background={`linear-gradient(to left, rgba(2, 204, 222, 0.4), rgba(2, 108, 222, 0.6)), url(${home})`} alignItems={"center"} justifyContent={"center"} direction={"column"} color={"white"}>

    // </Flex>
  );
};

export default Home;
