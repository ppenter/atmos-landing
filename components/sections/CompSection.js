import { Button, Card, Grid, Row, Text } from "@nextui-org/react";
import React from "react";
import { FaRegLaugh } from "react-icons/fa";

function CompSection() {
  const MockItem = ({ title, children, icon, color = "primary" }) => {
    let ml = icon ? 10 : 0;
    return (
      <Card borderWeight={0} css={{ p: 15 }}>
        <Row align="center">
          {icon ? (
            <Button
              auto
              icon={icon}
              color={color}
              css={{ fontSize: 24 }}
            ></Button>
          ) : null}

          <Text h3 color="white" css={{ marginLeft: ml }}>
            {title}
          </Text>
        </Row>

        <Text h5 weight={"medium"} color="white" css={{ mt: 10 }}>
          {children}
        </Text>
      </Card>
    );
  };
  return (
    <Grid.Container wrap="wrap" gap={2} justify="center">
      <Grid xs={6} sm={3}>
        <MockItem title="Cheap" icon={<FaRegLaugh />}>
          ATMOS use delegate proof of stake consensus which faster than the old
          consensus (proof of work)
        </MockItem>
      </Grid>
      <Grid xs={6} sm={3}>
        <MockItem title="2 of 2" />
      </Grid>
      <Grid xs={10} sm={3}>
        <MockItem title="2 of 2" />
      </Grid>
    </Grid.Container>
  );
}

export default CompSection;
