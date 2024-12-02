import React from "react";
import { Link } from "react-router";
import { Box, Typography} from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";
import TaskTracker from "../components/TaskTracker";

export default function ProjectPage() {

    const barData = [
        { id: 1, label: "Pass", value: 50 },
        { id: 2, label: "Average", value: 30 },
        { id: 3, label: "Completion", value: 20 },
    ];

    return (
        <Box sx={{ padding: 4 }}>

            <Typography variant="body2" color="textSecondary">
                Dashboard &gt; VLE Versus Grades
            </Typography>

            <Typography variant="h4" fontWeight="bold" mt={2}>
                VLE versus Grades
            </Typography>

            <Typography variant="body1" color="textSecondary" mt={1}>
                Study of student participation with VLE and their corresponding grades. This page provides insights into how
                students' activities in VLE relate to their performance, with interactive charts and a collaborative data lab.
            </Typography>

            <Box sx={{ display: "flex", mt: 4 }}>
                <Box sx={{ flex: 2, pr: 2 }}>
                    <Typography variant="h6"
                                fontWeight="bold"
                                mb={2}
                                component={Link}
                                to="/projects/1/collaborative"
                                sx={{ cursor: "pointer" }}
                    >
                        Collaborative Data Lab
                    </Typography>
                    <PieChart
                        height={200}
                        series={[
                            {
                                innerRadius: 50,
                                outerRadius: 100,
                                data: [
                                    { id: 1, label: "A", value: 37 },
                                    { id: 2, label: "B", value: 38 },
                                    { id: 3, label: "C", value: 43 },
                                    { id: 4, label: "D", value: 17 },
                                    { id: 5, label: "E", value: 8 },
                                ],
                            },
                        ]}
                    />

                    <Typography variant="h6"
                                fontWeight="bold"
                                mb={2}
                                component={Link}
                                to="/projects/1/exploration"
                                sx={{ cursor: "pointer" }}
                    >
                        Data Exploration
                    </Typography>
                    <BarChart
                        height={200}
                        xAxis={[{ scaleType: "band", data: barData.map((item) => item.label) }]}
                        series={[{ data: barData.map((item) => item.value) }]}
                    />
                </Box>

                <TaskTracker /> 
            </Box>
        </Box>
    );
}
