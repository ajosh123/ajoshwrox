import React from 'react'
import About from './About'

function Card() {
  return (
    <div className='container'>
        <div className=' rows w-75 mb-3'>
        <div className='row '>
            <div className='col-xs-12 col-sm-6 col-md-4  col-lg-4'> 
            <img className='img-fluid mt-2' src={require('../assets/Mask group (3).png')}></img> 
            <p className='mt-3 small text-center'>
            Explore large, destructible environments where no two games are ever the same.
            </p>
            </div>
            <div className='col-xs-12 col-sm-6 col-md-4  col-lg-4'>
            <img className='img-fluid mt-2' src={require('../assets/Mask group (4).png')}></img>
            <p className='mt-3 small text-center'>
            Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale
            </p>
            </div>
            <div className='col-xs-12 col-sm-6 col-md-4  col-lg-4'>
            <img className='img-fluid mt-2' src={require('../assets/Mask group (5).png')}></img>
            <p className='mt-3 small text-center'>
            Discover even more ways to play across thousands of creator-made game genres
            </p>
            </div>
        </div>

        <div className='mt-5'>
            <h3 className='text-center mt-5'>Our Contribution</h3>
            <p className='mt-3 small text-center'>
            Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.
            </p>
        </div>
        <div className='row mt-5'>
            <div className='col-4'>
                <h1 className='text-center'>5 M</h1>
                <p className='text-center small'>Daily User Engagement</p>
            </div>
            <div className='col-4'>
                <h1 className='text-center'>$500K</h1>
                <p className='text-center small'>Revenue Surge for an Platform</p>
            </div>
            <div className='col-4'>
                <h1 className='text-center'>10X</h1>
                <p className='text-center small'>ROAS on all our marketing campaigns</p>
            </div>
        </div>
        <div className='mt-5'>
        <About></About>
        </div>
        </div>
       

    </div>
  )
}

export default Card