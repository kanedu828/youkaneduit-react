import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  createStyles,
  Flex,
  Image,
  Text,
  Title,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  flexWrapper: {
    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
    },
    [theme.fn.largerThan("md")]: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  },
  headerText: {
    [theme.fn.smallerThan("md")]: {
      fontSize: "4em",
    },
  },
}));

export const Home = () => {
  document.title = "Home";
  const navigate = useNavigate();
  const { classes } = useStyles();
  return (
    <Container size="xl">
      <Flex
        className={classes.flexWrapper}
        direction="row"
        align="center"
        gap="xl"
        justify="center"
      >
        <Flex direction="column" gap="xl">
          <Title className={classes.headerText} size="5em">
            About Me
          </Title>
          <Text>
            Hello! My name is Kane, and I am a Georgia Tech graduate. I studied
            Computer Science, and my concetrations were in intelligence and
            media. You can take a look at my coursework and work experiences in
            my timeline. I am currently located in Suwanee, Georgia.
          </Text>
          <Button
            variant="light"
            radius="lg"
            size="lg"
            onClick={() => navigate("/timeline")}
            sx={{
              width: "50%",
              alignSelf: "center",
            }}
            fullWidth
          >
            See My Timeline!
          </Button>
        </Flex>
        <Image
          src={require("../assets/images/about_drawing.png")}
          width={600}
        />
      </Flex>
    </Container>
  );
};

export default Home;
