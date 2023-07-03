import React from "react";
import Bg from "../../assets/contact.mp4";
import { TextField } from "@mui/material";

import Spline from '@splinetool/react-spline';




const Contact = () => {
    const style ={ 
         "width":"400px"   ,
        "& .MuiFormLabel-root": {
        color: 'white',
        "&:before": {
            color: 'white',
        },
        "&:after": {
            color: 'white',
        },
        "&:hover:before": {
            color: 'white',
        },
        "&:active":{
        }
        },
        "& .MuiInputBase-root": {
        color: 'white',
        "&:before": {
            borderBottomColor: 'white',
        },
        "&:after": {
            borderBottomColor: 'white',
        },
        "&:hover:before": {
            borderBottomColor: 'white',
        },
        },}
        const textField = {
            width: '25ch'
        }
  return (
    <div className="w-full h-[100vh] relative">
      <video
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
        src={Bg}
        autoPlay
        loop
      />
      <div className="relative z-10 px-96 pt-60  flex">
        <div className="w-1/2 h-[500px] backdrop-sepia-0 bg-white/30 p-10">
          <div>
            <span className="uppercase">get in Touch </span>
            <br />
            <span className="font-extrabold text-3xl ">Contact.</span>
            <br />      <br />
            <TextField
            id="standard-basic"
            label="Your Name"
            variant="standard"
            placeholder="what's your good name?"
            InputLabelProps={{
                shrink: true,
              }}
            sx={style}
            />
            <br />      <br />
            <TextField
            id="standard-basic"
            label="Your Email "
            variant="standard"
            placeholder="what's your web address?"
            InputLabelProps={{
                shrink: true,
              }}
            sx={style}
            />
                  <br />      <br />
            <TextField
            id="standard-basic"
            label="Your Message "
            variant="standard"
            InputLabelProps={{
                shrink: true,
              }}
            multiline
            placeholder="what's you wanted to say ?"
            maxRows={4}
            rows={4}
            style={{width:"400px"}}
            sx={style}
            />
      <br /> <br />
            <button>Send</button>
          </div>
        </div>
        <div className="w-full h-[500px] backdrop-sepia-0 bg-white/30"> 
        {/* <Spline scene="https://prod.spline.design/E3J2EgtJiwhj5y3X/scene.splinecode" /> */}
        <Spline scene="https://prod.spline.design/RFHkw09Si5mwIhVO/scene.splinecode" />
         </div>
      </div>
    </div>
  );
};

export default Contact;
