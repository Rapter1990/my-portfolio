import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Typography } from '@material-ui/core';
import "./CustomTimeline.css";

const CustomTimeline = ({title,icon, children}) => {

  return (
    <Timeline className={"timeline"}>
      {/* Header Item*/}
      <TimelineItem className={"timeline_first_item"}>
        <TimelineSeparator>
          <TimelineDot className={"timeline_dot_header"}>
            {icon}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="timeline_content">
            <Typography variant="h6" className={"timeline_header"}>
                {title}
            </Typography>
        </TimelineContent>
      </TimelineItem>

      {/* Remaining Item*/}
      {children}
    </Timeline>
  )
}



export default CustomTimeline