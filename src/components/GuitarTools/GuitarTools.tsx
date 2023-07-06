import React from "react";
import { Accordion, Container, Stack, Title } from "@mantine/core";
import { ChordGenerator } from "./ChordGenerator";
import { Metronome } from "./Metronome";

export const GuitarTools = () => {
  document.title = "Guitar Tools";
  return (
    <Container size="xl">
      <Stack justify="center" align="center" spacing={3}>
        <Title size="6em">Guitar Tools</Title>
        <Accordion multiple sx={{ minWidth: "70%" }}>
          <Accordion.Item value="chordProgressionGenerator">
            <Accordion.Control>
              <Title order={3}>Chord Progression Generator</Title>
            </Accordion.Control>
            <Accordion.Panel>
              <ChordGenerator />
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="metronome">
            <Accordion.Control>
              <Title order={3}>Metronome</Title>
            </Accordion.Control>
            <Accordion.Panel>
              <Metronome />
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Stack>
    </Container>
  );
};
