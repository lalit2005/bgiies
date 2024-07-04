import { Button, ButtonGroup, Center, Flex, Image, Stack, Text } from "@chakra-ui/react";
import home from "../assets/home_bg.png";
import logo from "../assets/logo.png";
import tags from "../assets/5 tags.png";

const Home = () => {
  return (
    <Stack backgroundImage={`linear-gradient(to left, rgba(2, 204, 222, 0.4), rgba(2, 108, 222, 0.6)), url(${home})`} backgroundSize={"cover"} alignItems={"center"} justifyContent={"center"} color={"white"} spacing={4}>
      <Image src={logo} mt={"45px"} />
      <Text fontFamily={"Roboto"} fontSize={"5xl"} width={"30%"} textAlign={"center"} fontWeight={"600"}>
        <span style={{borderBottom: '6px solid #3FFF00', paddingBottom: '5px'}} >Building</span> the Next {"\n"} Generation of Startups
      </Text>
      <Text width={"35%"} textAlign={"center"} letterSpacing={"1.1px"}>
        The BITS Goa Innovation Incubation Entrepreneurship Society (BIIES) fosters innovation and entrepreneurship by providing mentorship, funding, and resources to help turn ideas into successful
        ventures.
      </Text>
      <ButtonGroup gap = '7' alignItems={"Center"}>
        <Button style={{backgroundColor: "#13274F", color: "white", borderRadius: "90px", marginTop: "25px",marginBottom: "45px", padding: "1.5rem 2rem", fontSize: "1em", fontWeight: "300"}} size='md'>
          DISCOVER MORE
        </Button>
        <Button  style={{backgroundColor: "white", color: "black", borderRadius: "90px", marginTop: "25px",marginBottom: "45px", padding: "1.3rem 2rem", fontSize: "1em", fontWeight: "300"}} size='md'>
          CONTACT US
        </Button>
      </ButtonGroup>
      <Flex width={"100%"} mt={"4rem"}>
        <Image src={tags} />
      </Flex>
    </Stack>
  );
};

export default Home;
