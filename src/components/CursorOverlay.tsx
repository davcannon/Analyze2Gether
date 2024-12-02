import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import NearMeIcon from '@mui/icons-material/NearMe';
import {useTheme} from '@mui/material/styles';
import Position from '../types/Position';

interface CursorOverlayProps {
    visible: boolean;
}

export default function CursorOverlay(props: CursorOverlayProps) {
    const [positions, setPositions] = useState<Position[]>(getRandomPositions());
    const theme = useTheme();

    function getRandomPositions(): Position[] {
        return [0, 1].map((_) => ({
            x: Math.floor(Math.random() * window.innerWidth),
            y: Math.floor(Math.random() * window.innerHeight),
        }));
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setPositions(getRandomPositions())
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    return (
        <Box
            sx={{
                position: 'absolute',
                top: 0,
                width: '100%',
                height: '100%',
                opacity: props.visible ? 1 : 0,
                pointerEvents: 'none'
            }}
        >
            <NearMeIcon
                sx={{
                    color: theme.palette.primary.main,
                    position: 'absolute',
                    width: 40,
                    height: 40,
                    left: positions[0].x,
                    top: positions[0].y,
                    transition: 'left 500ms ease-out, top 500ms ease-out'
                }}
            />
            <NearMeIcon
                sx={{
                    color: theme.palette.secondary.main,
                    position: 'absolute',
                    width: 40,
                    height: 40,
                    left: positions[1].x,
                    top: positions[1].y,
                    transition: 'left 500ms ease-out, top 500ms ease-out'
                }}
            />
        </Box>
    );
}
