import React from 'react'
import {homeObjOne, homeObjTwo} from './Data'
import HeroSection from '../../HeroSection/HeroSection'
import { Button } from '@material-ui/core'
import {Link} from 'react-router-dom'
import Sidebar from '../../Sidebar/Sidebar'

function Home() {
    return (
        <section>                
                <div className='home'>         
                    <Sidebar />
                    <div className='subHome'>
                        4AM Basketball Camp
                        <Button variant="contained" style={{backgroundColor: '#fe4e50'}}>
                            <Link to="/register" style={{color: "#fff", textDecoration: 'none'}}>
                                REGISTER NOW
                            </Link>
                        </Button>
                    </div>                               
                </div>       
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjTwo} />
        </section>
    )
}

export default Home
