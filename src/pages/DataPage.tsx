import React, {useState, SyntheticEvent, MouseEvent as ReactMouseEvent, ReactNode, useEffect} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import Chip from '@mui/material/Chip';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import {PopoverPosition} from '@mui/material/Popover';
import {BarChart} from '@mui/x-charts/BarChart';
import {ChartsAxisData} from '@mui/x-charts/ChartsOnAxisClickHandler';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle'
import NearMeIcon from '@mui/icons-material/NearMe';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Link} from 'react-router';
import LikesChip from '../components/LikesChip';
import NewCommentPopover from "../components/NewCommentPopover";
import CommentBubble from '../components/CommentBubble';
import CursorOverlay from '../components/CursorOverlay';
import ChartTypeMenu from '../components/ChartTypeMenu';
import Position from '../types/Position';
import {COMMENT_TYPES} from '../constants/comments';
import '../styles/DataPage.css';


const MODES = ['VIEW', 'COMMENT'] as const;
type Mode = typeof MODES[number];

const MODE_ICONS: Record<Mode, ReactNode> = {
    VIEW: <NearMeIcon />,
    COMMENT: <ModeCommentIcon />,
}

interface DataPageProps {
    pageType: 'EXPLORATION' | 'COLLABORATIVE';
}

export default function DataPage(props: DataPageProps) {
    const [areCursorsVisible, setAreCursorsVisible] = useState(true);
    const [currentChart, setCurrentChart] = useState(0);
    const [mode, setMode] = useState<Mode>('VIEW');
    const [chartTypeMenuAnchorElement, setChartTypeMenuAnchorElement] = useState<null | HTMLElement>(null);
    const [newCommentPopoverPosition, setNewCommentPopoverPosition] = useState<PopoverPosition | null>(null);
    const [commentsPositions, setCommentsPositions] = useState<Position[]>([]);

    function toggleCursorsVisible() {
        setAreCursorsVisible(current => !current);
    }

    function onChartChange(event: SyntheticEvent, newChartIndex: number) {
        setCurrentChart(newChartIndex);
    }

    function onModeChange(event: ReactMouseEvent<HTMLElement>, newMode: Mode | null) {
        if (newMode) setMode(newMode);
    }

    function openChartTypeMenu(event: ReactMouseEvent<HTMLElement>) {
        setChartTypeMenuAnchorElement(event.currentTarget);
    }

    function closeChartTypeMenu() {
        setChartTypeMenuAnchorElement(null);
    }

    function onNewCommentClick(event: MouseEvent, data: ChartsAxisData | null) {
        setNewCommentPopoverPosition({ top: event.clientY, left: event.clientX });
    }

    function onNewCommentPopoverClosed() {
        // Create a comment at the click position previously used to display the new comment popover
        if (newCommentPopoverPosition) {
            setCommentsPositions([
                ...commentsPositions,
                {x: newCommentPopoverPosition.left, y: newCommentPopoverPosition.top }
            ]);
        }
        setNewCommentPopoverPosition(null);
    }

    return (
        <div>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, padding: 4 }}>
                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                    <Typography variant="body2" color="textSecondary">
                        Dashboard
                    </Typography>
                </Link>
                <Typography variant="body2" color="textSecondary">
                    &gt;
                </Typography>
                <Link to="/projects/1" style={{ textDecoration: "none", color: "inherit" }}>
                    <Typography variant="body2" color="textSecondary">
                        VLE Versus Grades
                    </Typography>
                </Link>
                <Typography variant="body2" color="textSecondary">
                    &gt;
                </Typography>
                <Typography variant="body2" color="textPrimary">
                    {props.pageType === 'COLLABORATIVE' ? 'Collaborative Data Lab' : 'Data Exploration'}
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                    <h2>{props.pageType === 'COLLABORATIVE' ? 'Collaborative Data Lab' : 'Data Exploration'}</h2>
                    <Box sx={{display: "flex", alignItems: "center", gap: 1, marginTop: -1, marginBottom: 2 }}>
                        <Badge
                            variant="dot"
                            overlap="circular"
                            badgeContent=""
                            // Make dot invisible on Data Exploration page, as it's only used to show the color of
                            // a user's cursor and the cursors aren't visible on that page
                            color={props.pageType === 'COLLABORATIVE' ? "primary" : undefined}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                        >
                            <Avatar
                                alt="Profile picture"
                                src="https://thispersondoesnotexist.com"
                                sx={{ width: 32, height: 32 }}
                            />
                        </Badge>
                        {props.pageType === 'COLLABORATIVE' && <Badge
                            variant="dot"
                            overlap="circular"
                            badgeContent=""
                            color="secondary"
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                        >
                            <Avatar
                                alt="Profile picture"
                                src="https://thispersondoesnotexist.com"
                                sx={{ width: 32, height: 32 }}
                            />
                        </Badge>}
                        <Typography variant="subtitle1" sx={{ marginBlock: 0 }}>
                            {props.pageType === 'COLLABORATIVE' ? 'You, Katy B. and Dave C. are collaborating' : 'Just you'}
                        </Typography>
                        {props.pageType === 'COLLABORATIVE' && <IconButton onClick={toggleCursorsVisible}>
                            {areCursorsVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>}
                    </Box>
                </Box>
                <Button
                    startIcon={<ChangeCircleIcon />}
                    component={Link}
                    to={props.pageType === 'COLLABORATIVE'
                        ? '../exploration'
                        : '../collaborative'
                    }
                    sx={{ height: 'fit-content' }}
                >
                    SWITCH TO {props.pageType === 'COLLABORATIVE' ? 'Data Exploration' : 'Collaborative Data Lab'}
                </Button>
            </Box>
            <Box sx={{ display: 'flex' }}>
                {/* Chart */}
                <Box sx={{ flex: 1 }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={currentChart} onChange={onChartChange}>
                            <Tab label="Chart 1"/>
                            <Tab label="Chart 2"/>
                        </Tabs>
                    </Box>
                    <BarChart
                        className={mode === 'COMMENT' ? 'chart-comment-mode' : undefined}
                        height={350}
                        // Disable tooltip in comment mode
                        tooltip={{ trigger: mode === 'COMMENT' ? 'none' : undefined }}
                        xAxis={[{scaleType: 'band', data: ['group A', 'group B', 'group C']}]}
                        series={[{data: [4, 3, 5]}, {data: [1, 6, 3]}, {data: [2, 5, 6]}]}
                        onAxisClick={mode === 'COMMENT' ? onNewCommentClick : undefined}
                    />
                    <NewCommentPopover position={newCommentPopoverPosition} onClosed={onNewCommentPopoverClosed} />
                    {commentsPositions.map((position) => <CommentBubble position={position} />)}
                </Box>
                {/* Sidebar */}
                <Box sx={{ display: 'flex', flexDirection: 'column', width: 200, paddingX: 2, gap: 1 }}>
                    <ToggleButtonGroup
                        fullWidth
                        exclusive
                        color="secondary"
                        value={mode}
                        onChange={onModeChange}
                    >
                        {MODES.map(mode =>
                            <ToggleButton value={mode}>
                                {MODE_ICONS[mode]}
                            </ToggleButton>
                        )}
                    </ToggleButtonGroup>
                    <Button
                        fullWidth
                        variant="contained"
                        component="label"
                        role={undefined}
                        startIcon={<FileUploadIcon/>}
                    >
                        Import
                        <input
                            className="hidden-input"
                            type="file"
                            multiple
                        />
                    </Button>
                    <Button
                        fullWidth
                        variant="contained"
                        startIcon={<AddIcon/>}
                        onClick={openChartTypeMenu}
                    >
                        New Chart
                    </Button>
                    <Button
                        fullWidth
                        variant="contained"
                        startIcon={<EditIcon/>}
                        onClick={openChartTypeMenu}
                    >
                        Edit Chart
                    </Button>
                </Box>
            </Box>
            <h2>Comments</h2>
            {
                COMMENT_TYPES.map((commentType) =>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                {commentType} <Chip size="small" color="secondary" label="1"/>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Card variant="outlined">
                                <CardHeader
                                    avatar={
                                        <Avatar alt="Profile picture" src="https://thispersondoesnotexist.com"/>
                                    }
                                    title="Logan Rutherford"
                                    subheader="Data seems to have many NULL values"
                                    action={<LikesChip/>}
                                />
                            </Card>
                        </AccordionDetails>
                    </Accordion>
                )
            }
            <ChartTypeMenu anchorElement={chartTypeMenuAnchorElement} onClosed={closeChartTypeMenu} />
            <CursorOverlay visible={props.pageType === 'COLLABORATIVE' && areCursorsVisible} />
        </div>
    );
}
