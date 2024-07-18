import {
  Button,
  ButtonGroup,
  Flex,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import home from "../assets/home_bg.png";
import logo from "../assets/logo.png";
import tags from "../assets/5 tags.png";
import icon1 from "../assets/icon 1.png";
import icon2 from "../assets/icon 2.png";
import icon3 from "../assets/icon 3.png";
import Impact from "../components/Impact";
import { PortfolioStartups } from "../components/PortfolioStartups";
import WhyChooseUs from "../components/WhyChooseUs";
import Investors from "../components/Investors";
import Partners from "../components/Partners";
import Team from "../components/Team";

const Home = () => {
  return (
    <>
      <Stack
        backgroundImage={`linear-gradient(to left, rgba(2, 204, 222, 0.4), rgba(2, 108, 222, 0.6)), url(${home})`}
        backgroundSize={"cover"}
        alignItems={"center"}
        justifyContent={"center"}
        color={"white"}
        spacing={4}
      >
        <Image src={logo} />
        <Text
          fontSize={"5xl"}
          width={"50%"}
          textAlign={"center"}
          fontWeight={"700"}
        >
          <span
            style={{ borderBottom: "6px solid #3FFF00", paddingBottom: "5px" }}
          >
            Bu
          </span>
          ilding the Next Generation of Startups
        </Text>
        <Text width={"50%"} textAlign={"center"} letterSpacing={"1.1px"}>
          The BITS Goa Innovation Incubation Entrepreneurship Society (BGIIES)
          fosters innovation and entrepreneurship by providing mentorship,
          funding, and resources to help turn ideas into successful ventures.
        </Text>
        <ButtonGroup gap="7" alignItems={"Center"}>
          <Button
            style={{
              backgroundColor: "#13274F",
              color: "white",
              borderRadius: "90px",
              marginTop: "25px",
              marginBottom: "45px",
              padding: "1.5rem 2rem",
              fontSize: "1em",
              fontWeight: "300",
            }}
            size="md"
          >
            DISCOVER MORE
          </Button>
          <Button
            style={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "90px",
              marginTop: "25px",
              marginBottom: "45px",
              padding: "1.3rem 2rem",
              fontSize: "1em",
              fontWeight: "300",
            }}
            size="md"
          >
            CONTACT US
          </Button>
        </ButtonGroup>
        <Flex width={"100%"}>
          <Image src={tags} />
        </Flex>
      </Stack>
      <Flex flexDir="column" alignItems={"center"} mt={"4rem"} mb={"4rem"}>
        <Text
          fontSize={"2xl"}
          width={"50%"}
          textAlign={"center"}
          fontWeight={500}
        >
          <span
            style={{ borderBottom: "4px solid #FFAF18", paddingBottom: "3px" }}
          >
            We
          </span>{" "}
          work with Government bodies and Corporates to propel early-stage
          startups to success.
        </Text>
        <Flex justifyContent={"space-evenly"} width={"100%"} mt={"3rem"}>
          <Flex width={"25%"} alignItems={"center"}>
            <Image
              src={icon1}
              borderRight={"3px solid #FFAF18"}
              pr={"1rem"}
              mr={"1rem"}
            />
            <Text>
              Connect startups with mentors, investors, and business service
              providers
            </Text>
          </Flex>
          <Flex width={"25%"} alignItems={"center"}>
            <Image
              src={icon2}
              borderRight={"3px solid #FFAF18"}
              pr={"1rem"}
              mr={"1rem"}
            />
            <Text>
              Connect startups with mentors, investors, and business service
              providers
            </Text>
          </Flex>
          <Flex width={"25%"} alignItems={"center"}>
            <Image
              src={icon3}
              borderRight={"3px solid #FFAF18"}
              pr={"1rem"}
              mr={"1rem"}
            />
            <Text>
              Connect startups with mentors, investors, and business service
              providers
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <PortfolioStartups />
      <Team />
      <WhyChooseUs />
      <Investors />
      <Partners />
      <Impact />
    </>
  );
};

export default Home;
