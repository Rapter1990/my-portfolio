import { Card, CardActionArea, CardContent, CardMedia, Grid, Grow, Tab, Tabs, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import PortfolioData from '../../util/PortfolioData';
import portfolio_background from '../../assets/portfolio_background.jpg';
import './Portfolio.css';

import { Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core'

const Portfolio = () => {

  const [tabValue, setTabValue] = useState("All");
  const [projectDialog, setProjectDialog] = useState(false);

  return (
    <div className='main_content'>
      <Grid container spacing={1} className="section position-center">
        {/** Title */}
        <Grid item className="section_title top_20">
          <span></span>
          <h2>Portfolio</h2>
        </Grid>

        {/** Tab */}
        <Grid item xs={12}>
          <Tabs value={tabValue} 
                indicatorColor="primary" 
                className="customTabs"
                onChange={(event, value) => setTabValue(value)}>

                <Tab label="All" 
                      value="All" 
                      className={tabValue === "All" ? "customTabs_item active" : "customTabs_item" }  
                  />
                
              {[...new Set(PortfolioData.portfolio.map(item => item.tag))].map(tag => (
                <Tab label={tag} 
                    value={tag}
                    key={"tab#"+tag}
                    className={tabValue === tag ? "customTabs_item active" : "customTabs_item" } />
              ))}

          </Tabs>
        </Grid>
        
        {/** Projects */}
        <Grid item xs={12}>
          <Grid item container spacing={4} xs={12} className="layout_portfolio">
          {
            PortfolioData.portfolio.map((project) => (
              <>
                {tabValue === "All" || project.tag === tabValue ? (
                  <Grid key={tabValue} item xs={12} sm={6} md={4}>
                    <Grow in timeout={1000}>
                      <Card className='customCard' onClick={ () =>
                        setProjectDialog(project)
                      }>
                        <CardActionArea>
                          <CardMedia className='customCard_image' image={project.image ? project.image : portfolio_background} title={project.title}/>
                          <CardContent/>
                            <Typography className='customCard_title position-center'>{project.title}</Typography>
                            <Typography variant='body2' className='customCard_caption'>{project.caption}</Typography>
                        </CardActionArea>
                      </Card>
                    </Grow>
                  </Grid>
                ) : null}
              </>
            )
          )}
          </Grid>
        </Grid>

      </Grid>

      <Dialog open={projectDialog !== false} onClose={() => setProjectDialog(false)} className="projectDialog" fullWidth>
        <DialogTitle onClose={() => setProjectDialog(false)}> {projectDialog.title} </DialogTitle>
        <img src={projectDialog.image} alt="" className='projectDialog_image'/>
        <DialogContent className='projectDialog_description'>
            {projectDialog.description}
        </DialogContent>
        <DialogActions className='projectDialog_actions'>

          {projectDialog?.links && (
      
              projectDialog?.links 
                ?.map((link, index) => (
                    <a href={link.link} target="_blank" key={index} className="projectDialog_icons">{link.icon}</a>
              ))
            )
          }

        </DialogActions>
      </Dialog>               

    </div>
  )
}

export default Portfolio;