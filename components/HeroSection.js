import { Container, Text } from "@nextui-org/react";
import React from "react";

function HeroSection() {
  return (
    <Container
      display="flex"
      justify="center"
      fluid
      css={{
        alignItems: "center",
        minHeight: "400px",
        flexDirection: "column",
      }}
    >
      <Text
        h1
        size={"calc(25px + 4vw)"}
        css={{
          //linear-gradient(328deg, rgba(255,40,88,1) 0%, rgba(255,66,92,1) 54%, rgba(255,171,171,1) 100%)
          textGradient: "45deg, #14AAFF 0%, #AEF7F2 50%",
          width: "none",
        }}
        weight="bold"
      >
        ATMOS NETWORK
      </Text>
      <Text h3 weight="semibold">
        Delegate proof of stake EVM blockchain
      </Text>
    </Container>
  );
}

export default HeroSection;
