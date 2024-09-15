import {Heading, Stack, Spacer, HStack, VStack, Text, Flex} from '@chakra-ui/react'
import {React, useEffect} from 'react';
import {gsap, Power3} from 'gsap';
import ladybug from '../images/ladybug.png'
import angel from '../images/angel.png'
import angellarge from '../images/angel-large.png'
import die from '../images/die.png'
import marie from '../images/marie.png'
import overlay from '../images/overlay.png'
import overlay2 from '../images/overlay2.jpg'
import overlay3 from '../images/overlay3.jpg'


 const About = () => {

  const handleOrientationChange = () => {
    if (window.matchMedia("(orientation: landscape)").matches) {
      window.location.reload();
    }
  };
  
  window.addEventListener("orientationchange", handleOrientationChange);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo('.who-i-am', {
          opacity: 0,
          y: 100,
        }, {
          opacity: 1,
          y: 0,
          ease: 'power3.out',
          delay: 1
        })
      }, []);

    return (
     <> 
      <div className='container' style={{ height: '100vh'}}>
        <hr style={{color: 'white', marginTop: '3%'}}/>

        <div className='content'>
            <Text className='who-i-am'>(WHO I AM)</Text>
            <Text id='page-transition-name' fontSize='8vh' fontFamily="CanelaThin" color='white' style={{ display: 'flex', alignItems: 'center' }}>
                dina <img className="ladybug" src={ladybug} alt="Ladybug"/> orucevic
            </Text>
        </div>
        
        <div className='static-overlay'></div>
      </div>

      <div className='container'>
        <div className='content' id='hero-text'>

          <Heading fontWeight='100' fontSize='12vh' fontFamily="CanelaThin" color='white' marginTop= "-5vh" padding="10%" textAlign="center" zIndex = '3'>
            I’M A <a style={{ color: "#6c4a30", textShadow: '5px 5px 10px brown'}}>CAFFEINATED</a> UNDERGRAD, <b className="colour-gradient" style={{ fontFamily: 'CanelaLightItalic', color: "pink"}}> CSS GEEK </b>, BUDDING <i style={{ fontFamily: 'CanelaLightItalic', color: "pink"}}>FRONTEND / WEB DEVELOPER</i>&thinsp;FOCUSED ON LEVERAGING THE LATEST TECH TO MAKE THE WORLD <br/> <b className='better-place' style={{ fontFamily: 'CanelaRegItalic'}}> A BETTER PLACE</b>
          </Heading>
          <img className="die-about" src={die}></img>
          <img className="angel-about" src={angel}></img>
          <img className="marie-about" src={marie}></img>
        </div>
        <div className='static-overlay'></div>
      </div>

      <div className='container'>
        <HStack>
            <div className="item">
              <div className="item-wrapper">
                <img src={overlay}></img>
                <VStack style={{fontFamily: "CanelaRegItalic"}}>
                  <div className="back-text">
                      <Text className="after-overlay" style={{fontSize: "5vh"}}>Designed and developed end to end proof of concepts for Visa's Pay by Bank feature and Interac.</Text>
                  </div>
                  <div className="bottom-text">
                      <Text className="after-overlay"  style={{fontSize: "6vh", color: "#6A737E"}}>✷✷✷</Text>
                      <br />
                      <Text className="after-overlay" style={{fontSize: "4vh", paddingLeft: "20px" }}>React JS / TypeScript / Node.js / MongoDB</Text>
                  </div>
                </VStack>
                <div className="img-overlay">
                  <VStack className="item-name">
                    <VStack alignItems="left">
                        <Text style={{textAlign: 'center', fontSize: "6vh"}}>Software Engineer <br/> Intern</Text>
                        <Text style={{color: "black", fontSize: "4vh", textAlign: 'center'}}>TD Bank</Text>
                    </VStack>
                    <br/>
                    <br/>
                    <Text className="id">1</Text>
                  </VStack>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-wrapper">
                <img src={overlay2}></img>
                <VStack style={{fontFamily: "CanelaRegItalic"}}>
                  <div className="back-text">
                      <Text className="after-overlay" style={{fontSize: "5vh"}}>Reproducing and refactoring wireframes on the frontend for mortgage application summary pages.</Text>
                  </div>
                  <div className="bottom-text">
                      <Text className="after-overlay"  style={{fontSize: "6vh", color: "#6A737E"}}>✷✷✷</Text>
                      <br />
                      <Text className="after-overlay" style={{fontSize: "4vh", paddingLeft: "20px" }}>React JS / TypeScript / Chakra UI / Temporal</Text>
                  </div>
                </VStack>
                <div className="img-overlay">
                    <VStack className="item-name">
                      <VStack alignItems="left" >
                        <Text style={{textAlign: 'center', fontSize: "6vh"}}>Frontend Engineer <br/>Intern </Text>
                        <Text style={{color: "black", fontSize: "4vh", textAlign: 'center'}}>RFA Labs</Text>
                      </VStack>
                    <br/>
                    <br/>
                    <Text className="id">2</Text>
                    </VStack>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-wrapper">
                <img src={overlay3}></img>
                <VStack style={{fontFamily: "CanelaRegItalic"}}>
                  <div className="back-text">
                      <Text className="after-overlay" style={{fontSize: "5vh"}}>Focused on enhancing client-facing logic to optimize user experience and page load time for large entertainment brands to perform campaign metrics on customers.</Text>
                  </div>
                  <div className='bottom-text-three'>
                      <Text className="after-overlay"  style={{fontSize: "6vh", color: "#6A737E"}}>✷✷✷</Text>
                      <br />
                      <Text className="after-overlay" style={{fontSize: "4vh", paddingLeft: "20px" }}>JavaScript / jQuery / Python / PostgresSQL</Text>
                  </div>
                </VStack>
                <div className="img-overlay">
                    <VStack className="item-name">
                      <VStack alignItems="left" >
                          <Text style={{textAlign: 'center', fontSize: "6vh"}}>Full Stack <br/> Developer Intern </Text>
                          <Text style={{color: "black", fontSize: "4vh", textAlign: 'center'}}>Tradable Bits</Text>
                      </VStack>
                    <br/>
                    <br/>
                    <Text className="id">3</Text>
                    </VStack>
                </div>
              </div>
            </div>  
        </HStack>                
      </div>

      <div className='container'>
        <div class="marquee">
          <Stack class="marquee-content scroll">
            {Array.from({ length: 5 }).map(() => (
            <Text>&nbsp; GET &nbsp; IN &nbsp; TOUCH &emsp; ✷ </Text>
            ))}
          </Stack>

          <Stack class="marquee-content scroll" aria-hidden="true">
            {Array.from({ length: 5 }).map(() => (
            <Text>&nbsp; GET &nbsp; IN &nbsp; TOUCH &emsp; ✷ </Text>
            ))}
          </Stack>
        </div>

        <div className='content' style={{ height: '20vh', color: 'white'}}>
            <Flex minWidth='max-content' gap='30vw' fontSize='5vh' fontFamily="CanelaLightItalic">
              <a target="_blank" href="https://linkedin.com/in/dinaorucevic" style={{textDecoration: "none"}}>linkedIn</a>
              <a target="_blank" href='mailto:dina.oorucevic@gmail.com' color="black" style={{textDecoration: "none"}}>email</a>
              <a target="_blank" href='https://github.com/dina-o' color="black" style={{textDecoration: "none"}}>github</a>
            </Flex>
        </div>

        <Flex>
          <VStack
            alignItems="left"
            fontSize="3vh"
            fontFamily="CanelaLightItalic"
            style={{
              marginTop: '3%',
              marginLeft: '3%',
              marginBottom: '2%',
              fontWeight: 'lighter',
              color: 'white',
              zIndex: '1',
              lineHeight: '1',
            }}
          >
            <Text className='footer-text' color="white">Dina Orucevic, 2024</Text>
          </VStack>
          <Spacer />
          <VStack
            alignItems="left"
            fontSize="3vh"
            fontFamily="CanelaLightItalic"
            style={{
              marginTop: '3%',
              marginRight: '3%',
              marginBottom: '2%',
              fontWeight: 'lighter',
              color: 'white',
              zIndex: '1',
              lineHeight: '1',
            }}
          >
            <Text className='footer-text'>designed and developed with love</Text>
          </VStack>
        </Flex>

      </div>

      <div id="rotate-device-warning">
          <Text>For the best experience, please hold your device in landscape orientation.</Text>
          <img className="angel-vertical" src={angellarge}></img>
      </div>

    </>
    );
  }
  
  export { About };