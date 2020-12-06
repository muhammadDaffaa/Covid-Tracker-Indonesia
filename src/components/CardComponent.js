import React from "react";
import { Box, Text } from "@chakra-ui/react";

const CardComponent = ({ borderColor, name, totalCases, desc }) => {
  const date = new Date().toLocaleDateString();

  return (
    <>
      <Box
        // bg="red.500"
        w="250px"
        p="3"
        borderBottomWidth="10px"
        borderBottomColor={borderColor}
        rounded="md"
        boxShadow="2xl"
        ml={{ sm: "0", md: "5" }}
        mt={{ sm: "5%" }}
      >
        <Text fontSize="md" color="grey">
          {name}
        </Text>
        <Text
          fontSize="4xl"
          color={borderColor}
          display="flex"
          alignItems="flex-end"
          mt="2"
        >
          {totalCases}
          <Text fontSize="md" ml="2">
            People
          </Text>
        </Text>
        <Text mt="2">{date}</Text>
        <Text fontSize="md" color="grey" mt="2">
          {desc}
        </Text>
      </Box>
    </>
  );
};

export default CardComponent;
