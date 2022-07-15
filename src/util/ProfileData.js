import {
    LinkedIn,
    GitHub,
} from "@material-ui/icons";
import displayImage from "assets/displayImage.jpg";

var ProfileData = {
    name: "Sercan Noyan Germiyanoğlu",
    title: "Java Software Developer",
    displayImage: displayImage,
    email: "sngermiyanoglu@gmail.com",

    socials: {
        linkedIn: {
          link: "https://www.linkedin.com/in/sercan-noyan-germiyano%C4%9Flu-1918ba16b/",
          text: "My Linkedin",
          icon: <LinkedIn />,
        },
        github: {
          link: "https://www.github.com/Rapter1990",
          text: "Rapter1990",
          icon: <GitHub />,
        },
    }
}

export default ProfileData;