import { Box, Text, Flex, Image, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";

export const PortfolioStartups = () => {
  return (
    <Box paddingY={12}>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Text fontSize={"2xl"} width={"50%"} textAlign={"center"} fontWeight={500}>
          <span
            style={{
              borderBottom: "4px solid #FFAF18",
              paddingBottom: "3px",
              marginRight: "-6.7px",
            }}
          >
            Por
          </span>{" "}
          tfolio Startups
        </Text>
      </Flex>
      <Box maxWidth={"100vw"} overflow={"hidden"}>
        <Carousel />
      </Box>
    </Box>
  );
};

const Carousel = () => {
  //const [focusIndex, setfocusIndex] = useState(3);
  const [images, setimages] = useState([img1, img2, img3, img4, img5]);
  const urls = {};
  urls[img1] = "https://www.linkedin.com/company/bionic-imprints-private-limited/?originalSubdomain=in";
  urls[img2] = "https://caare.in/";
  urls[img3] = "https://www.cognixai.com/";
  urls[img4] = "https://www.greenshiftnrg.com/";
  urls[img5] = "https://www.bluelearn.in/";

  const MotionImage = motion(Image);
  const zTable = {
    0: 5,
    1: 10,
    2: 15,
    3: 10,
    4: 5,
  };
  return (
    <Flex mt={10} maxWidth={"95vw"} mx={"auto"} minHeight={"30vh"} alignItems={"center"} justifyContent={"space-between"}>
      <IconButton
        icon={<ChevronLeftIcon />}
        onClick={() => {
          setimages(rotateArrBackWard(images));
        }}
      />
      <Flex maxWidth={["95vw", "95vw", "85vw"]} mx={"auto"}>
        <AnimatePresence>
          {images.map((img, index) => (
            <MotionImage
              key={img}
              cursor={"pointer"}
              onClick={() => {
                window.open(urls[img]);
              }}
              zIndex={zTable[index]}
              width={["20vw", "20vw", "15vw"]}
              //height={["20vw", "15vw"]}
              py={"5rem"}
              src={img}
              marginRight={index < 2 ? -5 : 0}
              marginLeft={index > 2 ? -5 : 0}
              initial={{ scale: 1, x: index === 0 ? 0 : -20, opacity: 1 }}
              animate={{
                opacity: 1,
                scale: index === 2 ? 1.5 : index === 1 || index === 3 ? 1.2 : 1,
                x: 0,
              }}
              exit={{ scale: 0.8, x: 40 }}
              transition={{
                duration: 0.3,
                delay: index === 0 ? 0.2 : index * 0.05,
              }}
            />
          ))}
        </AnimatePresence>
      </Flex>
      <IconButton
        zIndex={100}
        icon={<ChevronRightIcon />}
        onClick={() => {
          setimages(rotateArrFwd(images));
        }}
      />
    </Flex>
  );
};

let rotateArrBackWard = (arr) => {
  let lastElem = arr.pop();
  console.log(lastElem);
  let res = [lastElem, ...arr];
  return res;
};

let rotateArrFwd = (arr) => {
  let firstElem = arr.shift();
  arr.push(firstElem);
  return [...arr];
};
