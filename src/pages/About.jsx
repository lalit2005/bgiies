import {
  Box,
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
import handworkimg from "../assets/Hand-Work-1.png";
import sk from '../assets/Prof Suman Kundu.jpg';
import sb from '../assets/Prof Sunil Bhand.png';
import dmk from '../assets/Prof DM Kulkarni.jpg';
import mg from '../assets/Prof mridula goel.jpg';
import is from '../assets/Ian Sardinha.jpg';

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
        <Image src={logo} marginTop={12} />
        <Text
          fontSize={"5xl"}
          width={"50%"}
          textAlign={"center"}
          fontWeight={"600"}
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
            ABOUT US
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
            style={{
              borderBottom: "4px solid #FFAF18",
              paddingBottom: "3px",
              marginRight: "-6px",
            }}
          >
            Abo
          </span>{" "}
          ut BGIIES
        </Text>
        <Box maxWidth={["80%", "90%"]}>
          <Flex
            justifyContent={"space-evenly"}
            alignItems="center"
            marginTop={10}
            paddingX={15}
            flexDirection={["column", "column", "row"]}
          >
            <Box minWidth={"50%"} display="block" marginRight={5}>
              <Image src={handworkimg} />
            </Box>
            <Box>
              The BITS Goa Innovation, Incubation & Entrepreneurship Society
              (BGIIES) is a registered Society under the Societies Registration
              Act, 1860, in February 2020, having its first office in BITS
              Pilani, K. K. Birla Goa Campus, Zuarinagar, Goa, India. BGIIES is
              a sector agnostic Technology Business Incubator, which acts as a
              wormhole to startups, connecting them with technology and business
              resources, vendors, and channels to help first time entrepreneurs
              lean and get the best mentorship from the ecosystem.
              <Box>
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
                  READ MORE
                </Button>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Box marginTop={30}>
        <Box textAlign={"center"}>
          <p>Meet Our</p>
          <Text fontSize={"2xl"} textAlign={"center"} fontWeight={500}>
            <span
              style={{
                borderBottom: "4px solid #9747FF",
                paddingBottom: "3px",
                marginRight: "-6px",
              }}
            >
              TE
            </span>{" "}
            AM
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
              <Image src={sk} display="block" boxSize={'8rem'}/>
              <Text marginTop={2}>Prof. Suman Kundu</Text>
              <Text>BGIIES President</Text>
            </Box>
            <Box textAlign={"center"}>
              <Image src={sb} display="block" boxSize={'8rem'} />
              <Text marginTop={2}>Prof. Sunil Bhand</Text>
              <Text>BGIIES Vice President</Text>
            </Box>
            <Box textAlign={"center"}>
              <Image src={dmk} display="block" boxSize={'8rem'} />
              <Text marginTop={2}>Prof. D. M. Kulkarni</Text>
              <Text>BGIIES Secretary</Text>
            </Box>
            <Box textAlign={"center"}>
              <Image src={mg} display="block" boxSize={'8rem'} />
              <Text marginTop={2}>Prof. Mridula Goel</Text>
              <Text>BGIIES Joint Secretary</Text>
            </Box>
            <Box textAlign={"center"}>
              <Image src={is} display="block" boxSize={'8rem'} />
              <Text marginTop={2}>Prof. Ian Francis Sardinha</Text>
              <Text>BGIIES Treasurer</Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Home;
