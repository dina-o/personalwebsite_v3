import {Heading, Stack, Spacer, HStack, VStack, Text, Flex} from '@chakra-ui/react'
import React from 'react';
import ladybug from '../images/ladybug.png'
import angel from '../images/angel.png'
import die from '../images/die.png'
import marie from '../images/marie.png'
import overlay from '../images/overlay.png'
import overlay2 from '../images/overlay2.jpg'
import overlay3 from '../images/overlay3.jpg'

 const About = () => {

    return (
     <> 
    <div className='container' style={{ height: '100vh'}}>

    <hr  style={{
            color: 'white',
            marginTop: '3%'
        }}/>

        <div className='content'>

            <Text fontSize='3vh' fontFamily="CanelaLightItalic" color='white'>(WHO I AM)</Text>
            <Text fontSize='8vh' fontFamily="CanelaThin" color='white' style={{ display: 'flex', alignItems: 'center' }}>
                dina <img className="ladybug" src={ladybug} alt="Ladybug"/> orucevic
            </Text>

        </div>
        
        <div className='fuzzy-overlay'></div>
        
        </div>

        <div className='container'>
            <div className='content' style={{ height: '120vh'}}>

                <Heading fontWeight='100' fontSize='12vh' fontFamily="CanelaThin" color='white' marginTop= "-5vh" padding="15%"  textAlign="center">
                    I’M AN UNDERGRAD, CSS GEEK, DEF NOT ARTSY   <i className="colour-gradient" style={{ fontFamily: 'CanelaLightItalic'}}>UX DESIGNER</i>   READY TO TAKE YOUR DIGITAL EXPERIENCE <b className='next-level' style={{ fontFamily: 'CanelaRegItalic'}}>TO THE NEXT LEVEL</b>
                </Heading>

                <img className="die-about" src={die}></img>
                <img className="angel-about" src={angel}></img>
                <img className="marie-about" src={marie}></img>

            </div>
            <div className='fuzzy-overlay'></div>
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
                    <Text className="after-overlay" style={{fontSize: "4vh", paddingLeft: "20px" }}>React JS / TypeScript / Chakra UI / Temporal</Text>
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
                    <Text className="after-overlay" style={{fontSize: "5vh"}}>Worked on navigation and authoritative content features for bank employees' coaching dashboards.</Text>
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
            <Text color="white">Dina Orucevic, 2024</Text>
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
            <Text>designed and developed with love</Text>
          </VStack>
        </Flex>

        </div>

     </>
    );
  }
  
  export { About };