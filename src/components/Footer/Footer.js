import { Typography } from '@mui/material'
import React from 'react'
import ProfileData from 'util/ProfileData';
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        
      </div>
      <div className="footer-right">
        <Typography className="footer_copyright">
            Designed by <a href="/">{ProfileData.name}</a>
        </Typography>
      </div>     
    </div>
  )
}

export default Footer