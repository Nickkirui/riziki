import React from 'react'
import CarouselComponent from './LandComp/Couressel'
import Footer from './LandComp/Footer'
import Agents from './Map/Agents'
import People from './LandComp/People'


export default function Landing() {
  return (
    <div>
     
       <CarouselComponent />
       <People/>
       <Agents/>
       <Footer />
    </div>
  )
}
