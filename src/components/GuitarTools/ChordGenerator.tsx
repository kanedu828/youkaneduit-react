import { useState } from "react";
import "../../styles/guitartools.css";
import { Accordion, Button, Flex, Stack, Textarea, Title } from "@mantine/core";

const getRandomChordProgression = (chordList: string[]) => {
  return chordList.sort(() => 0.5 - Math.random()).slice(0, 4);
};

const formatChordProgression = (chordProgression: string[]) => {
  chordProgression.forEach((chord) => chord.trim());
  return chordProgression.join().replaceAll(",", " ");
};

const getNChordProgressions = (chordList: string[], n: number) => {
  const chordProgressions = [];
  for (let i = 0; i < n; i++) {
    const randomChordProgression = getRandomChordProgression(chordList);
    const formattedChordProgression = formatChordProgression(
      randomChordProgression,
    );
    chordProgressions.push(formattedChordProgression);
  }
  return chordProgressions;
};

export const ChordGenerator = () => {
  const [chordList, setChordList] = useState<string>(
    localStorage.getItem("chordList") ?? "C, G, Em, Am, D",
  );
  const [chordProgressions, setChordProgressions] = useState<string[]>([]);
  const [currentChordProgression, setCurrentChordProgression] =
    useState<string>("");

  const chordArray = chordList.split(",");

  return (
    <Stack align="center" spacing="lg">
      <Textarea
        label="Chords"
        description="Enter a comma separated list of chords"
        sx={{ width: "80%" }}
        value={chordList}
        onChange={(event) => {
          localStorage.setItem("chordList", event.target.value);
          setChordList(event.target.value ?? "");
        }}
      />
      <Flex direction="row" gap="lg">
        <Button
          onClick={() => {
            const newChordProgression = getNChordProgressions(chordArray, 5);
            setChordProgressions(newChordProgression);
            setCurrentChordProgression(
              newChordProgression[
                Math.floor(Math.random() * chordProgressions.length)
              ],
            );
          }}
        >
          Generate New Chord Progressions
        </Button>
        {chordProgressions.length > 0 ? (
          <Button
            onClick={() => {
              setCurrentChordProgression(
                chordProgressions[
                  Math.floor(Math.random() * chordProgressions.length)
                ],
              );
            }}
          >
            Next Chord Progression
          </Button>
        ) : (
          <></>
        )}
      </Flex>
      <Title size="4em">{currentChordProgression}</Title>
    </Stack>
  );
};
