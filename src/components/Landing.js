import React, {Fragment}from 'react'
import Testimonials from './LandComp/Testimonials'
import Header from './header'
import Agents from './Map/Agents'
import Requirements from './LandComp/Requirements'
import CarouselComponent from './LandComp/Couressel'
export default function Landing() {
  return (
    <div>
        
        <Testimonials></Testimonials>
        <CarouselComponent></CarouselComponent>
        
        <Fragment>
        <Agents/>
        </Fragment>
      
        
        
    </div>
  )
}