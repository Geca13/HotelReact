import React from 'react'
import Hero from '../components/Hero'
import {Link} from 'react-router-dom'
import Banner from '../components/Banner'
import RoomsContainer from '../components/RoomsContainer'

export default function Rooms() {
    return (
      <>
        <Hero hero = 'roomsHero'>

          <Banner title='our rooms' >
            <Link to = '/rooms' className='btn-primary'>
               Home
             </Link>
          </Banner>
        </Hero>
        <RoomsContainer/>
      </>
    )
}
