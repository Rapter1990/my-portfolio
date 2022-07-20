import React from 'react'
import { Typography } from "@material-ui/core";
import "./Profile.css";
import GetAppIcon from "@material-ui/icons/GetApp";
import ProfileData from 'util/ProfileData';
import CustomTimeline from 'components/CustomTimeline/CustomTimeline';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CustomeTimelineItem from 'components/CustomTimeline/CustomeTimelineItem';
import CustomButton from 'components/CustomButton/CustomButton';
import resume from '../../document/sng_resume_eng.pdf';

const Profile = () => {

  const handleOpen = (e) => {
    e.preventDefault();
    window.open(resume);
  }


  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{ProfileData.name}</Typography>
        <Typography className="title">{ProfileData.title}</Typography>
      </div>

      <figure className="profile_image">
        <img src={ProfileData.displayImage} alt="displayImage" />
      </figure>

      <div className="profile_information">
        <CustomTimeline icon={<PersonOutlineOutlinedIcon/>} >
          <CustomeTimelineItem title="Name" text={ProfileData.name} />
          <CustomeTimelineItem title="Title" text={ProfileData.title} />
          <CustomeTimelineItem title="Email" text={ProfileData.email} />

          {
            Object.keys(ProfileData.socials).map(key => 
              (
                <CustomeTimelineItem key={key} title={key} text={ProfileData.socials[key].text.charAt(0).toUpperCase() + ProfileData.socials[key].text.slice(1)} link={ProfileData.socials[key].link} />
              )
            )
          }
        </CustomTimeline>
      </div>

      <div className="button_container">
        <CustomButton text={"Download CV"} icon={<GetAppIcon />} submitfunction={handleOpen} />
      </div>
    </div>
  )
}

export default Profile