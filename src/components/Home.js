import React, { useState } from 'react'
import Card from './Card';

function Home() {
    const [isRotated, setIsRotated] = useState(false);

    const handleRotate = () => {
        setIsRotated(!isRotated);
      };

  return (
    <div className='container'>
         <div className='text-end'>
         <button type='button'
          
          style={{backgroundColor:'black'}}
         className={isRotated ? 'close-button rotated text-end ' : 'close-button'}
         onClick={handleRotate}
       >
    <i style={{color:'white'}} class="fa-solid fa-xmark"></i>
       </button>
         </div>
      <div className='mt-4'>
        <h2>Epic Games : An American video game and software developer </h2>
        <h2 className='text-center'> And publisher based in Cary, North Carolina.</h2>

        <img className='img-fluid mt-2' src={require('../assets/fortnite-pictures-b5kfcchwazwiz3cs 1 (1).png')}></img>
        <div className='text-center'>
            <p className='text-center mt-3 small'>Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.</p>
  <button type='button' className='text-center mt-4 btn btn-light w-50'>Visit website</button>          
        </div>
      </div>
      <div className='mt-5 py-3'>
        <Card></Card>
      </div>

    </div>
  )
}

export default Home