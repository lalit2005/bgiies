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
          fontSize: "small",
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
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Flex alignItems={"center"} width={"30%"}>
          <Image src={logo} boxSize={"15%"} />
          <Text fontSize={"sm"} mr={"1px"}>
            BITS Goa Innovation, Incubation & Entrepreneurship Society
          </Text>
        </Flex>
        <Flex justifyContent={"space-evenly"} flex={2} pl={"5%"}>
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
