import { Stack } from "@mui/material";
import { useState } from "react";
import { Button } from "../Shared/Button";
import '../../styles/guitartools.css';

interface ChordGeneratorProps {
    chordList: string[];
}

const getRandomChordProgression = (chordList: string[]) => {
    return chordList.sort(() => .5 - Math.random()).slice(0,4);
}

const formatChordProgression = (chordProgression: string[]) => {
    chordProgression.forEach((chord) => chord.trim());
    return chordProgression.join().replaceAll(',', ' ');
}

const getNChordProgressions = (chordList: string[], n: number) => {
    const chordProgressions = [];
    for (let i = 0; i < n; i++) {
        const randomChordProgression = getRandomChordProgression(chordList);
        const formattedChordProgression = formatChordProgression(randomChordProgression);
        chordProgressions.push(formattedChordProgression)
    }
    return chordProgressions;
}

export const ChordGenerator = (props: ChordGeneratorProps) => {
    const [chordProgressions, setChordProgressions] = useState<string[]>([]);
    const [currentChordProgression, setCurrentChordProgression] = useState<string>('');

    return (
        <Stack alignItems='center'>
            <Stack direction='row' spacing={0}>
                <Button text='Generate New Chord Progressions' onClick={() => {
                    setChordProgressions(getNChordProgressions(props.chordList, 5));
                    setCurrentChordProgression(chordProgressions[Math.floor(Math.random()*chordProgressions.length)]);
                    }}/>
                {chordProgressions.length > 0 ? <Button text='Next Chord Progression' onClick={() => {setCurrentChordProgression(chordProgressions[Math.floor(Math.random()*chordProgressions.length)])}}/> : <></>}
            </Stack>           
            <h2 className='large-header chord'>{currentChordProgression}</h2>       
        </Stack>
    )
}