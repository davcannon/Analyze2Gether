import React from 'react';
import Popover, {PopoverPosition} from '@mui/material/Popover';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {COMMENT_TYPES} from '../constants/comments';

interface NewCommentPopoverProps {
    position: PopoverPosition | null;
    onClosed: () => void;
}

export default function NewCommentPopover(props: NewCommentPopoverProps) {
    return (
        <Popover
            anchorReference="anchorPosition"
            anchorPosition={props.position ?? undefined}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            open={Boolean(props.position)}
            onClose={props.onClosed}
        >
            <Box sx={{ width: 300, display: 'flex', flexDirection: 'column', padding: 2, gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Avatar
                        alt="Profile picture"
                        src="https://thispersondoesnotexist.com"
                        sx={{ width: 32, height: 32 }}
                    />
                    <Typography variant="subtitle1">Logan Rutherford</Typography>
                </Box>
                <TextField multiline variant="outlined" maxRows={3} placeholder="Comment..." />
                <TextField
                    select
                    defaultValue={COMMENT_TYPES[0]}
                >
                    {COMMENT_TYPES.map((commentType) => (
                        <MenuItem key={commentType} value={commentType}>
                            {commentType}
                        </MenuItem>
                    ))}
                </TextField>
                <Button sx={{ width: 'max-content', alignSelf: 'flex-end' }} onClick={props.onClosed}>Post</Button>
            </Box>
        </Popover>
    );
}
