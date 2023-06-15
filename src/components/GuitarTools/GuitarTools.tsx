import { Container, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { ChordGenerator } from "./ChordGenerator";

interface GuitarToolsProps {

}

export const GuitarTools = (props: GuitarToolsProps) => {
    document.title = 'Timeline';
    const [chordList, setChordList] = useState<string>((localStorage.getItem('chordList') ?? ''))
    return (
        <Container maxWidth='xl'>
            <Stack padding={10} direction='column' justifyContent='center' alignItems='center' spacing={5}>
                <h1 className='large-header'>Guitar Tools</h1>
                <TextField
                    id='outlined-textarea'
                    label='Chords'
                    multiline
                    helperText='Enter a comma separated list of chords'
                    value={chordList}
                    onChange={(event) => {
                        localStorage.setItem('chordList', event.target.value);
                        setChordList((event.target.value ?? ''));
                    }}
                />
        
                <ChordGenerator chordList={chordList.split(',')}/>
            </Stack>
            
        </Container>
    );

}