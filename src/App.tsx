/* eslint-disable react/no-unescaped-entities */
import Logo from './assets/icons/Logo';
import { Text, Header, Button, Section, Column, Center } from './style/GlobalStyle';
import { GlobalStyles } from './style/GlobalStyle';

import image01 from './assets/bg1.png'
import image02 from './assets/bg2.svg'
import image03 from './assets/img1.svg'
import image04 from './assets/bg3.svg'

function App() {
    return(
        <>
            <GlobalStyles/>
            <section className='header' style={{backgroundColor: '#191919'}}>
                <Header>
                    <Logo/>

                    <div className='center'>
                        <Button><Text>Home</Text></Button>
                        <Button><Text>Course</Text></Button>
                        <Button><Text>Category</Text></Button>
                        <Button><Text>Resources</Text></Button>
                    </div>

                    <div className="end" style={{display: 'flex', gap: 40}}>
                        {/* <Button><Text>Sing in</Text></Button> */}
                        <Button className='mark'><Text className='mark'>Sign up</Text></Button>
                    </div>
                </Header>
                <Section className='sec1'>
                    {/* <Blur className='blur01'></Blur> */}
                    <Column>
                        <div style={{background: `url(${image01}) center no-repeat`, padding: 65, textAlign: 'center'}}>
                            <Text fontSize='52px'>Lets lmprove your skills <br/> with us</Text>
                        </div>
                        <Text color='rgba(252, 252, 252, 0.6)' fontSize='16px' weight='400'>Find your favorite course and study anywhere,<br/>anytime with the best mentor</Text>
                        <Button style={{marginTop: 23}} className='mark'><Text weight='600' className='mark'>Get Started</Text></Button>
                    </Column>
                </Section>
                <Section style={{marginTop: 10, background: `url(${image02}) center no-repeat`, width: '100%', padding: 100}} className='sec2'>
                    {/* <img src={image02} alt="" /> */}
                </Section>
                <Section style={{marginTop: 10}} className='sec2'>
                    <img src={image03} alt="" />
                </Section>
            </section>
            <section style={{background: `url(${image04})`, position: 'absolute', top: 780, width: '100%', height: '100%', backgroundSize: 'cover'}}>
                <div style={{marginTop: 250}}></div>
                <Center>
                    <Text weight='500' fontSize='16px' color='rgba(0, 0, 0, 0.6)'>We are here as a solution to improve people's competence in getting jobs, increasing income, and starting a <br/>professional business with quality learning video materials at affordable prices.</Text>
                </Center>
            </section>
        </>
    );
}

export default App;
