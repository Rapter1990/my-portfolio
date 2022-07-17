import { Grid, Icon, Paper, Typography } from '@material-ui/core';
import React from 'react'
import ServiceData from 'util/ServiceData';
import "./Service.css";

const Service = () => {
  return (
    <div className="main_content">
     <Grid container className="section p_55_30 position-center">
         <Grid item className="section_title service_title_span">
            <span></span>
            <h2>Services</h2>
          </Grid>
          <Grid container item xs={12} spacing={6} justifyContent="space-around">
            {ServiceData.services.map((service) => (
              <Grid key={service.title} item xs={6} sm={6} md={4}>
                <Paper elevation={0} className="service">
                  <Icon className="service_icon">{service.icon}</Icon>
                  <Typography variant="h6" className="service_title">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" className="service_description">
                    {service.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
      </Grid>
    </div>
  )
}

export default Service;