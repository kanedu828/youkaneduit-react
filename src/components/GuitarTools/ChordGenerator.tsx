import { Stack, TextField } from "@mui/material";
import { useState } from "react";
import { Button } from "../Shared/Button";
import '../../styles/guitartools.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

export const ChordGenerator = () => {
    const [chordList, setChordList] = useState<string>((localStorage.getItem('chordList') ?? 'C, G, Em, Am, D'));
    const [chordProgressions, setChordProgressions] = useState<string[]>([]);
    const [currentChordProgression, setCurrentChordProgression] = useState<string>('');

    const chordArray = chordList.split(',');

    return (
        <Accordion sx={{ minWidth: '100%' }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}>
                Chord Progression Generator
            </AccordionSummary>
            <AccordionDetails>
            <Stack alignItems='center' spacing={3}>
             <TextField
                        id='outlined-textarea'
                        label='Chords'
                        multiline
                        helperText='Enter a comma separated list of chords'
                        sx={{width: '80%'}}
                        value={chordList}
                        onChange={(event) => {
                            localStorage.setItem('chordList', event.target.value);
                            setChordList((event.target.value ?? ''));
                        }}
                    />
            <Stack direction='row' spacing={2}>
                <Button text='Generate New Chord Progressions' onClick={() => {
                    setChordProgressions(getNChordProgressions(chordArray, 5));
                    setCurrentChordProgression(chordProgressions[Math.floor(Math.random()*chordProgressions.length)]);
                    }}/>
                {chordProgressions.length > 0 ? <Button text='Next Chord Progression' onClick={() => {setCurrentChordProgression(chordProgressions[Math.floor(Math.random()*chordProgressions.length)])}}/> : <></>}
            </Stack>           
            <h2 className='large-header chord'>{currentChordProgression}</h2>       
        </Stack>
            </AccordionDetails>
        </Accordion>
        
    )
}