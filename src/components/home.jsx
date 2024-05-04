import {Text} from '@chakra-ui/react'
import React, {useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {gsap, Power3} from 'gsap'
import cloud from '../images/clouds.png'
import angel from '../images/angel.png'
import angellarge from '../images/angel-large.png'
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

  const handleOrientationChange = () => {
    if (window.matchMedia("(orientation: landscape)").matches) {
      window.location.reload();
    }
  };
  
  window.addEventListener("orientationchange", handleOrientationChange);


  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.landing-text', {
      opacity: 0,
      y: 300,
    }, {
      opacity: 1,
      y: 0,
      ease: 'power3.out',
      delay: 0.6
    })

      tl.fromTo('.angel', { opacity: 0, y: 100 }, { opacity: 1, y: 0, ease: 'power1.inOut', delay: 0.5 }, '<');
      tl.fromTo('.lion', { opacity: 0, x: -100 }, { opacity: 1, x: 0, ease: 'power3.out', delay: 0.3 }, '<');
      tl.fromTo('.catfunny', { opacity: 0, rotation: -360 }, { opacity: 1, rotation: 0, ease: 'back.out(1.7)', delay: 0.3 }, '<');
      tl.fromTo('.elephant', { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, ease: 'elastic.out(1, 0.3)', delay: 0.3 }, '<');
      tl.fromTo('.saturn', { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, ease: 'elastic.out(1, 0.3)', delay: 0.3 }, '<');
      tl.fromTo('.cat', { opacity: 0, y: -100 }, { opacity: 1, y: 0, ease: 'power2.out', delay: 0.3 }, '<');
      tl.fromTo('.womansmoke', { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, ease: 'power1.inOut', delay: 0.3 }, '<');
      tl.fromTo('.womanlip', { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, ease: 'power1.inOut', delay: 0.3 }, '<');
      tl.fromTo('.woman', { opacity: 0, x: 100 }, { opacity: 1, x: 0, ease: 'power3.out', delay: 0.5 }, '<');
      tl.fromTo('.flower', { opacity: 0, y: 200 }, { opacity: 1, y: 0, ease: 'back.out(1.7)', delay: 0.3 }, '<');
      tl.fromTo('.harp', { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, ease: 'elastic.out(1, 0.3)', delay: 0.3 }, '<');
      tl.fromTo('.dress', { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, ease: 'power1.inOut', delay: 0.3 }, '<');
      tl.fromTo('.die', { opacity: 0, y: -100 }, { opacity: 1, y: 0, ease: 'power2.out', delay: 0.3 }, '<');
      tl.fromTo('.reach', { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, ease: 'power1.inOut', delay: 0.3 }, '<');
      tl.fromTo('.alice', { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, ease: 'power1.inOut', delay: 0.3 }, '<');
      tl.fromTo('.moon', { opacity: 0, y: -100 }, { opacity: 1, y: 0, ease: 'power2.out', delay: 0.3 }, '<');
      tl.fromTo('.ship', { opacity: 0, x: 100 }, { opacity: 1, x: 0, ease: 'power3.out', delay: 0.3 }, '<');

      tl.fromTo('.angelcutout1', { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, ease: 'power1.inOut', delay: 0.3 }, '<');
      tl.fromTo('.angelcutout2', { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, ease: 'power1.inOut', delay: 0.2 }, '<');
      tl.fromTo('.angelcutout3', { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, ease: 'power1.inOut', delay: 0.2 }, '<');

      tl.fromTo('.butterfly1', { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, ease: 'power1.inOut', delay: 1 }, '<');
      tl.fromTo('.butterfly2', { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, ease: 'power1.inOut', delay: 1 }, '<');

      tl.fromTo('.background-circle', { opacity: 0, y: 100 }, { opacity: 1, y: 0, ease: 'back.out(0.5)', delay: 0.3 }, '<');
      tl.fromTo('.circle', { opacity: 0, y: 100 }, { opacity: 1, y: 0, ease: 'back.out(0.5)'});
  }, []);

    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/about');
    };

    return (
     <> 
      <div className='container'>
        <div className='content'>
            <div className='landing-text'>
              <Text className='greetings' fontSize='15vh' fontFamily="CanelaLightItalic" color='white'>greetings,</Text>
              <Text fontSize='8vh' fontFamily="CanelaThin" color='white' marginTop='-5vh'>i'm dina</Text>
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
        <div className='static-overlay'></div>
   
      </div>

      <div id="rotate-device-warning">
          <Text>For the best experience, please hold your device in landscape orientation.</Text>
          <img className="angel-vertical" src={angellarge}></img>
      </div>

     </>
    );
  }
  
  export { Home };