import { Container, Divider, Row, Spacer, Text } from "@nextui-org/react";
import React from "react";
import { FaDiscord, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <Container css={{ marginTop: 100, minHeight: 120 }}>
      <Divider />
      <Row justify="space-between" css={{ padding: 20 }}>
        <Row>
          <Text p color="$disable">
            Developed by ppenter
          </Text>
        </Row>
        <Row justify="flex-end" css={{ fontSize: 30 }}>
          <FaGithub />
          <Spacer x={2} />
          <FaDiscord />
        </Row>
      </Row>
    </Container>
  );
}

export default Footer;
