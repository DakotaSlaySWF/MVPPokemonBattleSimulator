import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function TopAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h1" component="div" sx={
                        {
                            flexGrow: 1,
                            textAlign:"center"
                        }}
                    >
                        Pokemon Battle Simulator
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
