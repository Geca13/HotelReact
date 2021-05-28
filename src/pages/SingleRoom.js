import React, { Component } from 'react'
import Hero from '../components/Hero'
import defaultBcg from '../images/room-1.jpeg'
import Banner from '../components/Banner'
import {Link } from 'react-router-dom'
import {RoomContext} from '../context'

export default class SingleRoom extends Component {
    constructor(props){
        super(props)

        this.state = {
            id:this.props.match.params.id,
            defaultBcg
        };
    }

    static contextType = RoomContext;

    render() {

        const { getRoom } = this.context; 
        const room = getRoom(this.state.id);
        if(!room) {
            return (
            <div className='error'>
                <h3>no such room can't be found</h3> 
                <Link to = '/rooms' className='btn-primary'>
                    back to rooms
                </Link>
            </div>
            );
        }
        const {name , description, capacity, size,price,extras,breakfast,pets,images} = room;
        return (
            <Hero hero='roomsHero'>
                <Banner title={`${name} room`}>
                    <Link to='/rooms' className='btn-primary'>
                        back to rooms
                    </Link>
                </Banner>
            </Hero>
        )
    }
}
 