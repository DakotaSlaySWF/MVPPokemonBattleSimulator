import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {FixedSizeList} from 'react-window';


export default function BattleLog({log}) {

    function renderRow(props) {
        const { index, style } = props;

        return (
            <ListItem style={style} key={index} component="div" disablePadding>
                <ListItemButton>
                    <ListItemText primary={log[index]} />
                </ListItemButton>
            </ListItem>
        );
    }

    return (
        <Box
            sx={{ width: '100%', height: 650, maxWidth: 360, bgcolor: 'background.paper' }}
        >
            <FixedSizeList
                height={650}
                width={360}
                itemSize={46}
                itemCount={log.length}
                overscanCount={5}
            >
                {renderRow}
            </FixedSizeList>
        </Box>
    );
}