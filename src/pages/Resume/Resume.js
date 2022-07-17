import { Grid } from '@material-ui/core';
import { SchoolRounded, WorkRounded } from '@material-ui/icons';
import React from 'react'
import "./Resume.css";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Typography } from "@material-ui/core";
import ResumeData from 'util/ResumeData';
import "../../components/CustomTimeline/CustomTimeline.css";

const Resume = () => {
  return (
    <div className='main_content'>
      <Grid container className="section position-center">
          <Grid item className="section_title top_20">
            <span></span>
            <h2>Resume</h2>
          </Grid>

          <Grid container className="top_30">
            {/*Experiences*/}
            <Grid item md={6} className="experience pb_30 p_30">
              <Timeline className="timeline">
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot className="timeline_dot_header">
                      <WorkRounded />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography variant="h6" className="timeline_header">
                      Work Experience
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                {ResumeData.experiences.map((experience) => (
                  <TimelineItem key={experience.title}>
                    <TimelineSeparator className="separator_padding">
                      <TimelineDot
                        variant="outlined"
                        className="timeline_dot"
                      />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {experience.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {experience.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {experience.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Grid>
            {/*Education*/}
            <Grid item md={6} className="experience pb_30 p_30">
              <Timeline className="timeline">
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot className="timeline_dot_header">
                      <SchoolRounded />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography variant="h6" className="timeline_header">
                      Education
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                {ResumeData.education.map((education) => (
                  <TimelineItem key={education.title}>
                    <TimelineSeparator className="separator_padding">
                      <TimelineDot
                        variant="outlined"
                        className="timeline_dot"
                      />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {education.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {education.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {education.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Grid>
          </Grid>
        </Grid>
    </div>
  )
}

export default Resume;