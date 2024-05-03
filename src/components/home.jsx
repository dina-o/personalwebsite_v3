import {Heading, Flex, Spacer, HStack, Stack, Divider, Box, Text} from '@chakra-ui/react'
import React, { useState, useEffect } from 'react';
import gsap from 'gsap'
import cloud from '../images/clouds.png'


 const Home = () => {
   
    return (
     <> 
    <div className='container'>

        <div className='content'>

            <div className='landing-text'>
                    <Text fontSize='10vh' fontFamily="CanelaLightItalic" color='white'>greetings,</Text>
                    <Text fontSize='8vh' fontFamily="CanelaThin" color='white' marginTop='-4vh'>it's dina</Text>
            </div>

            <img className="cloud1" src={cloud}></img>
            <img className="cloud2" src={cloud}></img>
            <img className="cloud3" src={cloud}></img>
            <img className="cloud4" src={cloud}></img>

            <img className="cloud5" src={cloud}></img>
            <img className="cloud6" src={cloud}></img>
            <img className="cloud7" src={cloud}></img>
            <img className="cloud8" src={cloud}></img>


        </div>
        <div className='fuzzy-overlay'></div>
   
    </div>
     </>
    );
  }
  
  export { Home };