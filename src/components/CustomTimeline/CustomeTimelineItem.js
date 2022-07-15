import React from 'react'
import TimelineItem from '@mui/lab/TimelineItem';
import CustomTimelineSeparator from './CustomTimeSeparator';
import TimelineContent from '@mui/lab/TimelineContent';
import { Typography } from '@material-ui/core';
import "./CustomTimeline.css";

const CustomeTimelineItem = ({title,text,link}) => {
  return (
    <TimelineItem>
        <CustomTimelineSeparator/>
        <TimelineContent className="timeline_content">
            {link ? (
                <Typography className="timelineItem_text">
                    <span>{title.charAt(0).toUpperCase() + title.slice(1)}</span> :  <a href={link} target="_blank"> {text}</a> 
                </Typography>
            ) 
            : (
               <Typography className="timelineItem_text">
                <span> {title.charAt(0).toUpperCase() + title.slice(1)}</span> : {text} 
               </Typography>
            ) 
            }
        </TimelineContent>
    </TimelineItem>
  )
}

export default CustomeTimelineItem