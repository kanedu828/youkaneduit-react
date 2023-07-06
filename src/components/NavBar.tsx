import "../styles/navbar.css";

import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, createStyles, Flex, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  navButton: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

export const NavBar = () => {
  const navigate = useNavigate();
  const { classes } = useStyles();
  return (
    <Flex direction="row" justify="end" align="center" gap="lg" p="lg">
      <Button
        className={classes.navButton}
        color="dark"
        variant="subtle"
        size="xl"
        onClick={() => navigate("")}
      >
        Home
      </Button>
      <Button
        className={classes.navButton}
        color="dark"
        variant="subtle"
        size="xl"
        onClick={() => navigate("/timeline")}
      >
        Timeline
      </Button>
      <Button
        className={classes.navButton}
        color="dark"
        variant="subtle"
        size="xl"
        onClick={() => navigate("/guitar-tools")}
      >
        Guitar Tools
      </Button>
    </Flex>
  );
};
