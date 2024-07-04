import { Flex, Image, Text, textDecoration } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Link = ({ to, text }) => {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => {
        return {
          textDecoration: isActive ? "underline" : "none",
          fontSize: "medium",
        };
      }}
    >
      {text}
    </NavLink>
  );
};

const Navbar = () => {
  return (
    <>
      {/* <Flex bgColor={"#084F83"} color={"white"}>
        bionest@goa.bits-pilani.ac.in
      </Flex> */}
      <Flex alignItems={"center"} justifyContent={"space-around"}>
        <Flex alignItems={"center"} width={"20%"} pl={"2rem"} gap={2}>
          <Image src={logo} boxSize={"15%"} />
          <Text fontSize={"sm"} mr={"1px"} fontWeight={"700"}>
            BITS Goa Innovation, Incubation{"\n"} & Entrepreneurship Society
          </Text>
        </Flex>
        <Flex justifyContent={"space-evenly"} flex={2} pl={"5%"} width={"70%"} mr={"50px"} fontFamily={"Roboto"}>
          <Link to={"/"} text={"Home"} />
          <Link to={"/facilities"} text={"Facilities"} />
          <Link to={"/incubation"} text={"Incubation"} />
          <Link to={"/services"} text={"Services"} />
          <Link to={"/cohort"} text={"Cohort"} />
          <Link to={"/apply"} text={"Apply"} />
          <Link to={"/gallery"} text={"Gallery"} />
          <Link to={"/tillnow"} text={"BGIIES Till Now"} />
          <Link to={"/sisfs"} text={"SISFS"} />
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
