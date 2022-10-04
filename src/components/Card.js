import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Card.css';
import IndividualCard from './LandComp/IndividualCard';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  
  const loans = [
    {id: 1, amount: "KSH 5000", interest: "13%"},
    {id: 1, amount: "KSH 10000", interest: "13%"},
    {id: 1, amount: "KSH 20000", interest: "13%"}
  ]
  return (
    
        <>
        <Carousel
          showArrows={false}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={3000}
        >
          {loans.map((loan) => (
            <IndividualCard loan = {loan} /> 
          ))}
        </Carousel>
          

        </>
  );
}
