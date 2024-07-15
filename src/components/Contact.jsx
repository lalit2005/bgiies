import { Flex } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import React from "react";

function Contact() {
  const colouredCircle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "orange",
    padding: "15px",
    boxSizing: "border-box",
  };
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-evenly"}
      padding={"0.2rem"}
      backgroundColor={"#0a2351"}
      gap={600}
      color={"white"}
    >
      <Flex gap={3} alignItems={"center"} justifyContent={"center"}>
        <span style={colouredCircle}>
          <EmailIcon color={"white"} />
        </span>
        <p>bionest@goa.bits-pilani.ac.in</p>
      </Flex>
      <Flex
        gap={3}
        alignItems={"center"}
        justifyContent={"center"}
        padding={"0.2rem"}
      >
        <p style={{ marginRight: "3px" }}>Follow Us: </p>
        <span style={colouredCircle}>
          <EmailIcon color={"white"} />
        </span>
        <span style={colouredCircle}>
          <EmailIcon color={"white"} />
        </span>
        <span style={colouredCircle}>
          <EmailIcon color={"white"} />
        </span>
        <span style={colouredCircle}>
          <EmailIcon color={"white"} />
        </span>
        <span style={colouredCircle}>
          <EmailIcon color={"white"} />
        </span>
      </Flex>
    </Flex>
  );
}
export default Contact;
