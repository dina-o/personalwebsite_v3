import {Heading, Flex, Spacer, HStack, Stack, Divider, Box, Text} from '@chakra-ui/react'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap'
import cloud from '../images/clouds.png'
import angel from '../images/angel.png'
import lion from '../images/lion.png'
import alice from '../images/alice.png'
import elephant from '../images/elephant.png'
import saturn from '../images/saturn.png'
import cat from '../images/cat.png'
import womansmoke from '../images/woman-smoke.png'
import womanlip from '../images/woman-watercolour.png'
import woman from '../images/woman.png'
import flower from '../images/flower.png'
import harp from '../images/harp.png'
import dress from '../images/dress.png'
import die from '../images/die.png'
import reach from '../images/reach.png'
import catfunny from '../images/cat-glasses.png'
import moon from '../images/moon.png'
import ship from '../images/ship.png'
import angelcutout from '../images/angel-cutout.png'
import butterfly from '../images/butterfly.gif'



 const Home = () => {

    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/about');
    };

   
    return (
     <> 
    <div className='container'>

        <div className='content'>

            <div className='landing-text'>
                    <Text fontSize='15vh' fontFamily="CanelaLightItalic" color='white'>greetings,</Text>
                    <Text fontSize='8vh' fontFamily="CanelaThin" color='white' marginTop='-5vh'>it's dina</Text>
            </div>

            <img className="cloud1" src={cloud}></img>
            <img className="cloud2" src={cloud}></img>
            <img className="cloud3" src={cloud}></img>
            <img className="cloud4" src={cloud}></img>

            <img className="cloud5" src={cloud}></img>
            <img className="cloud6" src={cloud}></img>
            <img className="cloud7" src={cloud}></img>
            <img className="cloud8" src={cloud}></img>

            {/* collage images */}
            <img className="angel" src={angel}></img>
            <img className="lion" src={lion}></img>
            <img className="alice" src={alice}></img>
            <img className="elephant" src={elephant}></img>
            <img className="saturn" src={saturn}></img>
            <img className="cat" src={cat}></img>
            <img className="womansmoke" src={womansmoke}></img>
            <img className="womanlip" src={womanlip}></img>
            <img className="woman" src={woman}></img>
            <img className="flower" src={flower}></img>
            <img className="harp" src={harp}></img>
            <img className="dress" src={dress}></img>
            <img className="die" src={die}></img>
            <img className="reach" src={reach}></img>
            <img className="catfunny" src={catfunny}></img>
            <img className="moon" src={moon}></img>
            <img className="ship" src={ship}></img>
            <img className="angelcutout1" src={angelcutout}></img>
            <img className="angelcutout2" src={angelcutout}></img>
            <img className="angelcutout3" src={angelcutout}></img>
            <img className="butterfly1" src={butterfly}></img>
            <img className="butterfly2" src={butterfly}></img>
            
            <div onClick={handleClick} className='circle'></div>
            <div className='background-circle'></div>

        </div>
        <div className='fuzzy-overlay'></div>
   
    </div>
     </>
    );
  }
  
  export { Home };