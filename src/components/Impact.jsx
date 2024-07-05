import { Divider, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import bg from "../assets/impact_bg.png";

const Impact = () => {
  return (
    <Flex backgroundImage={`linear-gradient(to left, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${bg})`} p={"4rem"} alignItems={"center"} justifyContent={"center"} color={"white"} flexDir={'column'}>
      <Text fontSize={'4xl'}><span style={{ borderBottom: "4px solid #F21A28", paddingBottom: "4px" }}>Ou</span>r Impact</Text>
      <HStack gap={'3rem'} height={'10rem'} mt={'3rem'}>
        <Stack alignItems={'center'} justifyContent={'center'} width={'20%'} textAlign="center">
          <Text fontSize={'4xl'}>31+</Text>
          <Text>Startups incubated</Text>
        </Stack>
        <Divider borderColor={'#F21A28'} borderWidth={'1px'} orientation="vertical" height={'70%'}/>
        <Stack alignItems={'center'} justifyContent={'center'} width={'20%'} textAlign="center">
          <Text fontSize={'4xl'}>72%</Text>
          <Text>Startups Funded</Text>
        </Stack>
        <Divider borderColor={'#F21A28'} borderWidth={'1px'} orientation="vertical" height={'70%'}/>
        <Stack alignItems={'center'} justifyContent={'center'} width={'20%'} textAlign="center">
          <Text fontSize={'4xl'}>6 Cr</Text>
          <Text>Incubator Grants</Text>
        </Stack>
        <Divider borderColor={'#F21A28'} borderWidth={'1px'} orientation="vertical" height={'70%'}/>
        <Stack alignItems={'center'} justifyContent={'center'} width={'20%'} textAlign="center">
          <Text fontSize={'4xl'}>200+</Text>
          <Text>Jobs Created</Text>
        </Stack>
      </HStack>
      <HStack gap={'3rem'} height={'10rem'} mt={'1rem'}>
        <Stack alignItems={'center'} justifyContent={'center'} width={'20%'} textAlign="center">
          <Text fontSize={'4xl'}>21+</Text>
          <Text>Collaborations</Text>
        </Stack>
        <Divider borderColor={'#F21A28'} borderWidth={'1px'} orientation="vertical" height={'70%'}/>
        <Stack alignItems={'center'} justifyContent={'center'} width={'20%'} textAlign="center">
          <Text fontSize={'4xl'}>24+</Text>
          <Text>Investors</Text>
        </Stack>
        <Divider borderColor={'#F21A28'} borderWidth={'1px'} orientation="vertical" height={'70%'}/>
        <Stack alignItems={'center'} justifyContent={'center'} width={'20%'} textAlign="center">
          <Text fontSize={'4xl'}>30+</Text>
          <Text>Mentors & Advisors</Text>
        </Stack>
        <Divider borderColor={'#F21A28'} borderWidth={'1px'} orientation="vertical" height={'70%'}/>
        <Stack alignItems={'center'} justifyContent={'center'} width={'20%'} textAlign="center">
          <Text fontSize={'4xl'}>120+</Text>
          <Text>Outreach & Training</Text>
        </Stack>
      </HStack>
    </Flex>
  );
};

export default Impact;
