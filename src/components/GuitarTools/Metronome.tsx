import {
  Button,
  Container,
  Flex,
  NumberInput,
  Slider,
  Stack,
  Title,
} from "@mantine/core";
import { useEffect, useState } from "react";

const CLICK_1 = "//daveceddia.com/freebies/react-metronome/click1.wav";
const CLICK_2 = "//daveceddia.com/freebies/react-metronome/click2.wav";

export const Metronome = () => {
  const [count, setCount] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [bpm, setBpm] = useState<number>(90);
  const [beatsPerMeasure, setBeatsPerMeasure] = useState<number>(4);

  const click1 = new Audio(CLICK_1);
  const click2 = new Audio(CLICK_2);

  useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(
        () => {
          if (count % beatsPerMeasure === 0) {
            click2.play();
          } else {
            click1.play();
          }

          setCount((count + 1) % beatsPerMeasure);
        },
        (60 / bpm) * 1000,
      );
      return () => clearInterval(timer);
    }
  }, [isPlaying, bpm, beatsPerMeasure, count]);

  const startStop = () => {
    setCount(0);
    setIsPlaying(!isPlaying);
  };

  return (
    <Container size="lg">
      <Stack>
        <Title order={4}>BPM</Title>

        <Flex
          direction="row"
          sx={{ width: "100%" }}
          justify="center"
          align="center"
          gap="md"
        >
          <Slider
            size="lg"
            min={50}
            max={200}
            value={bpm}
            label={(value) => value}
            onChange={setBpm}
            sx={{ width: "100%" }}
          />
          <NumberInput
            description="Beats per Measure"
            value={beatsPerMeasure}
            sx={{
              width: "20%",
            }}
            onChange={(value) => setBeatsPerMeasure(Number(value))}
          />
          <Button onClick={startStop} sx={{ width: "20%" }}>
            {isPlaying ? "Stop" : "Start"}
          </Button>
        </Flex>
      </Stack>
    </Container>
  );
};
