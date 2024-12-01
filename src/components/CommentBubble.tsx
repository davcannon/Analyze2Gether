import React from 'react';
import Avatar from '@mui/material/Avatar';
import Position from '../types/Position';

interface CommentBubbleProps {
    position: Position;
}

export default function CommentBubble(props: CommentBubbleProps) {
    return (
        <Avatar
            alt="Profile picture"
            src="https://thispersondoesnotexist.com"
            sx={{ position: 'absolute', top: props.position.y, left: props.position.x }}
        />
    );
}
