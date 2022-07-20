import { Typography } from '@material-ui/core';
import React from 'react'
import "./Home.css";

const Home = () => {
  return (
    <div className='main_content'>
      <div className="info_body">
        <Typography variant="body1" gutterBottom>
            Hello, I’m ...... 
            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut voluptatum eveniet doloremque autem excepturi eaque, sit laboriosam voluptatem nisi delectus. Facere explicabo hic minus accusamus alias fuga nihil dolorum quae. Explicabo illo unde, odio consequatur ipsam possimus veritatis, placeat, ab molestiae velit inventore exercitationem consequuntur blanditiis omnis beatae. Dolor iste excepturi ratione soluta quas culpa voluptatum repudiandae harum non.
        </Typography>
        <Typography variant="body1" gutterBottom className='p_20'>
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
        </Typography>
        <Typography variant="body1" gutterBottom className='p_20'>
            Hello, I’m ...... 
            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut voluptatum eveniet doloremque autem excepturi eaque, sit laboriosam voluptatem nisi delectus. Facere explicabo hic minus accusamus alias fuga nihil dolorum quae. Explicabo illo unde, odio consequatur ipsam possimus veritatis, placeat, ab molestiae velit inventore exercitationem consequuntur blanditiis omnis beatae. Dolor iste excepturi ratione soluta quas culpa voluptatum repudiandae harum non.
        </Typography>
      </div>
    </div>
  )
}

export default Home