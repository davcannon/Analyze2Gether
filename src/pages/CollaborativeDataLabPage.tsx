import React, {useState, SyntheticEvent, MouseEvent, ReactNode} from 'react';
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
import {BarChart} from '@mui/x-charts/BarChart';
import NearMeIcon from '@mui/icons-material/NearMe';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LikesChip from '../components/LikesChip';
import '../styles/CollaborativeDataLabPage.css';

const MODES = ['VIEW', 'COMMENT'] as const;
type Mode = typeof MODES[number];

const MODE_ICONS: Record<Mode, ReactNode> = {
    VIEW: <NearMeIcon />,
    COMMENT: <ModeCommentIcon />,
}

export default function CollaborativeDataLabPage() {
    const [currentChart, setCurrentChart] = useState(0);
    const [mode, setMode] = useState<Mode>('VIEW');

    function onChartChange(event: SyntheticEvent, newChartIndex: number) {
        setCurrentChart(newChartIndex);
    }

    function onModeChange(event: MouseEvent<HTMLElement>, newMode: Mode | null) {
        if (newMode) setMode(newMode);
    }

    return (
        <div>
            <h2>Collaborative Data Lab</h2>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginTop: -1, marginBottom: 2 }}>
                <Avatar
                    alt="Profile picture"
                    src="https://thispersondoesnotexist.com"
                    sx={{ width: 32, height: 32 }}
                />
                <Typography variant="subtitle1" sx={{ marginBlock: 0 }}>Just you</Typography>
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
                        xAxis={[{scaleType: 'band', data: ['group A', 'group B', 'group C']}]}
                        series={[{data: [4, 3, 5]}, {data: [1, 6, 3]}, {data: [2, 5, 6]}]}
                        height={350}
                    />
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
                    <Button fullWidth variant="contained" startIcon={<AddIcon/>}>New Chart</Button>
                    <Button fullWidth variant="contained" startIcon={<EditIcon/>}>Edit Chart</Button>
                </Box>
            </Box>
            <h2>Comments</h2>
            {
                ["Trend", "Outlier", "Data Quality"].map((commentType) =>
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
        </div>
    );
}
