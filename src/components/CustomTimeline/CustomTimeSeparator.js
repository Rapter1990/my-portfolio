import React from 'react'
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineDot from '@mui/lab/TimelineDot';
import "./CustomTimeline.css";

const CustomTimelineSeparator = () => {
    return (
        <TimelineSeparator className={"separator_padding"}>
            <TimelineDot variant={"outlined"} className={"timeline_dot"}/>
            <TimelineConnector />
        </TimelineSeparator>
    )
}

export default CustomTimelineSeparator;