import React, {useRef, useState} from 'react';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import Chip from '@mui/material/Chip';

export default function LikesChip() {
    // Display a number of likes between 0 and 100
    const likesCount = useRef(Math.floor(Math.random() * 100));
    const [isLikedByMe, setIsLikedByMe] = useState(false);

    function toggleIsLiked() {
        setIsLikedByMe(current => !current);
    }

    return (
        <Chip
            variant="outlined"
            color={isLikedByMe ? 'success' : 'default'}
            icon={isLikedByMe ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}
            label={likesCount.current + (isLikedByMe ? 1 : 0)}
            onClick={toggleIsLiked}
        />
    );
}
