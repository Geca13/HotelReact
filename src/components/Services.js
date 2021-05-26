import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'

export default class Services extends Component {
    state = {
        services:[
            {
                icon:<FaCocktail/>,
                title: 'free cocktails',
                info : 'free coctails every hour if you are on the right place in the right time'
            },
            {
                icon:<FaHiking/>,
                title: 'Endless Hiking',
                info : 'free coctails every hour if you are on the right place in the right time'
            },
            {
                icon:<FaShuttleVan/>,
                title: 'Free Shuttle',
                info : 'free coctails every hour if you are on the right place in the right time'
            },
            {
                icon:<FaBeer/>,
                title: 'Coolest Beer',
                info : 'free coctails every hour if you are on the right place in the right time'
            }
        ]
    };
    render() {
        return (
            <section className='services'>
                <Title title = "services"/>
                <div className='services-center'>
                  {this.state.services.map((item, index) =>{
                      return (
                          <article key={index} className='service'>

                          <span>{item.icon}</span>
                          <h6>{item.title}</h6>
                          <p>{item.info}</p>

                          </article>
                      )
                  })}
                </div>
                

            </section>
        )
    }
}
