import { Flex, Image, Text } from "@chakra-ui/react";
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
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        maxWidth={"100vw"}
      >
        <Flex alignItems={"center"} width={"30%"} pl={"2rem"} gap={2}>
          <Image src={logo} boxSize={"20%"} />
          <Text fontSize={"sm"} fontWeight={"700"}>
            BITS Goa Innovation, Incubation & Entrepreneurship Society
          </Text>
        </Flex>
        <Flex
          justifyContent={"space-between"}
          flex={2}
          fontFamily={"Roboto"}
          pl={"2rem"}
          pr={"2rem"}
        >
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
