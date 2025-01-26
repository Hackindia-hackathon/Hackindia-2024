import React from "react";
import { Container, Divider, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <>
      <Divider w={"80%"} mx={"auto"} />
      <Container py={"2rem"}>
        <Text textAlign={"center"} fontSize={"1rem"}>
         Codepool
        </Text>
      </Container>
    </>
  );
}

export default Footer;
