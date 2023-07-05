import { Container, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { ChordGenerator } from "./ChordGenerator";

interface GuitarToolsProps {

}

export const GuitarTools = (props: GuitarToolsProps) => {
    document.title = 'Timeline';
    return (
        <Container maxWidth='xl'>
            <Stack direction='column' justifyContent='center' alignItems='center' spacing={3}>
                <h1 className='large-header'>Guitar Tools</h1>
            </Stack>
           
           
                <Stack padding={10} direction='column' justifyContent='center' alignItems='center' spacing={5}>
                    
                   
            
                    <ChordGenerator />
                </Stack>
            
           
            
        </Container>
    );

}