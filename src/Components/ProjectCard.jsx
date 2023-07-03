import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
const ProjectCard = ({img,title,description,tags,githublink}) => {
    const randomcolor=()=>{
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
  return (
    <div className='flex justify-between'>

    <Card sx={{ maxWidth: 345 ,backgroundColor:'#191970',color:"white" ,height:"500px"}} className='w-full'>
      <div className=' h-[450px]'>
    <div className='p-3 '>
    <CardMedia
      sx={{ height: 140,borderRadius:3 }}
      image={img}
      title="green iguana"
      />
    </div>
   
    <CardContent>
      <Typography gutterBottom variant="h3" component="div" className='font-extrabold'>
       {title}
      </Typography>
      <Typography variant="body2" color="white">
        {description}
      </Typography>
    </CardContent>
     <CardActions>

     <span style={{color:randomcolor()}}>{tags}</span>
     </CardActions>
      </div>
     <div>

    <CardActions>
      <a href={githublink} target='_blank'><GitHubIcon />&nbsp;&nbsp;GITHUB</a>
    </CardActions>
     </div>
  </Card>
      </div>
  )
}

export default ProjectCard