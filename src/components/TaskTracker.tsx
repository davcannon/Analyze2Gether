import React, { useState } from "react";
import { Box, Card, CardContent, Typography, List, ListItem, ListItemText, Divider, Checkbox } from "@mui/material";

export default function TaskTracker() {

    const [checked, setChecked] = useState([false, false, false]);

    const handleToggle = (index: number) => {
        const updatedChecked = [...checked];
        updatedChecked[index] = !updatedChecked[index];
        setChecked(updatedChecked);
    };


    const tasks = [
        { text: "Find trends on new dataset", date: "10/11/2024 • 2:00 PM" },
        { text: "Analyze VLE interaction", date: "12/11/2024 • 3:00 PM" },
        { text: "Prepare data report", date: "15/11/2024 • 4:00 PM" },
    ];

    return (
        <Box sx={{ flex: 1, pl: 2 }}>
            <Card sx={{ mb: 2 }}>
                <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                        Task Tracker
                    </Typography>
                    <List>
                        {tasks.map((task, index) => (
                            <React.Fragment key={index}>
                                <ListItem
                                    secondaryAction={
                                        <Checkbox
                                            edge="end"
                                            checked={checked[index]}
                                            onChange={() => handleToggle(index)}
                                        />
                                    }
                                >
                                    <ListItemText
                                        primary={
                                            <Typography
                                                style={{
                                                    textDecoration: checked[index]
                                                        ? "line-through"
                                                        : "none",
                                                }}
                                            >
                                                {task.text}
                                            </Typography>
                                        }
                                        secondary={task.date}
                                    />
                                </ListItem>
                                {index < tasks.length - 1 && <Divider />}
                            </React.Fragment>
                        ))}
                    </List>
                </CardContent>
            </Card>
        </Box>
    );
}
