import { Box, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import {
   CarouselContentWrapper,
   CarouselWrapper,
   KwattLogoWrapper,
   PoweredByWrapper,
   Wrapper,
} from './KwattCourses.style';
import kwattLogo from '../../../assets/kwatt-logo-c.svg';
import kwattPopup from '../../../assets/kwatt-popup.jpeg';

import CourseItem from './CourseItem';
import SolrufModal4 from '../../../components/Custom/SolrufModal/SolrufModal4';
import PrimaryButton from '../../../components/Custom/PrimaryButton/PrimaryButton';
import PageTitle from '../../../components/PageTitle/PageTitle';
import { Helmet } from 'react-helmet';

const KwattCourses = () => {
   const [popupOpen, setPopupOpen] = useState(true);
   // useEffect(() => {
   //   setTimeout(2000, () => {
   //     setPopupOpen(true);
   //   });
   // }, []);

   return (
      <Wrapper>
         <PageTitle title='Blog - Kwatt Courses' />
         <Helmet>
            <meta name='title' content='KWatt solar courses' />
            <meta property='og:title' content='KWatt solar courses' />
            <meta
               name='description'
               content='KWatt solar courses designed to learn in-depth about solar systems, and their working. If you are interested then you must enroll in this course.'
            />
         </Helmet>
         <SolrufModal4
            open={popupOpen}
            onClose={() => {
               setPopupOpen(false);
            }}
         >
            <Box
               sx={{ display: 'flex', flexDirection: 'column', rowGap: '1rem' }}
            >
               <img src={kwattPopup} alt='' style={{ width: '100%' }}></img>
               <PrimaryButton
                  component='a'
                  href='https://www.kwattsolutions.com/surya_enrollment.php'
                  target='_blank'
                  rel='noreferrer'
                  sx={{
                     textAlign: 'center',
                     fontWeight: '700',

                     '&:hover': {
                        textDecoration: 'none',
                        color: 'primary.dark',
                     },
                  }}
               >
                  Enroll Now
               </PrimaryButton>
            </Box>
         </SolrufModal4>
         <Container maxWidth='xl' sx={{ padding: { sm: '20px' } }}>
            {/* Carousel */}

            <CarouselWrapper
               sx={{
                  backgroundImage: `url('https://solruf.s3.ap-south-1.amazonaws.com/kwatt-bg+(1)+(1)+(1)+(1)+(1)+(1)+(1).png')`,
                  backgroundPosition: '0 25%',
               }}
            >
               <CarouselContentWrapper>
                  <KwattLogoWrapper
                     component='a'
                     target='_blank'
                     rel='noreferrer'
                     href='https://www.kwattsolutions.com/'
                  >
                     <img src={kwattLogo} alt='' style={{ width: '100%' }} />
                  </KwattLogoWrapper>
                  <Typography
                     sx={{
                        color: 'primary.light',
                        fontWeight: 'bold',
                        fontSize: '2rem',
                        width: '75%',
                        textAlign: 'center',
                        transform: 'translateY(-2rem)',
                        '@media (max-width: 900px)': {
                           fontSize: '1.5rem',
                        },
                        '@media (max-width: 600px)': {
                           fontSize: '1.2rem',
                           fontWeight: '600',
                        },
                     }}
                  >
                     Learn more in the field of Solar Energy and creates solar
                     exports to fulfill India's manpower
                  </Typography>
                  <PoweredByWrapper>
                     <Typography
                        varaint='p'
                        sx={{
                           color: 'primary.light',
                           '@media (max-width: 900px)': {
                              fontSize: '0.8rem',
                           },
                        }}
                     >
                        Powered By
                     </Typography>
                     <a
                        href='https://www.solruf.com/'
                        target='_blank'
                        rel='noreferrer'
                     >
                        <img
                           src='https://i.ibb.co/CzpgVFq/51.png'
                           alt='Solruf'
                           style={{
                              width: '8rem',
                              '@media (max-width: 900px)': {
                                 width: '5rem',
                              },
                           }}
                        />
                     </a>
                  </PoweredByWrapper>
               </CarouselContentWrapper>
            </CarouselWrapper>
            <Typography
               sx={{
                  fontSize: '1.3rem',
                  '@media (max-width: 900px)': {
                     fontSize: '1.1rem',
                  },
                  py: '0.8rem',
               }}
            >
               <b>kWatt Solutions Pvt Ltd</b> is active in the renewable energy
               space, focusing on energy optimization and technology
               customization to endow with economic renewable energy solutions
               by creating and nurturing a network of entrepreneurs. Founded by{' '}
               <b>Dr. Chetan Singh Solanki</b> and incubated at the renowned
               Indian Institute of Technology (IIT) Bombay's{' '}
               <b>Society for Innovation and Entrepreneurship (SINE)</b>.{'\n'}
            </Typography>
            <Typography
               sx={{
                  fontSize: '1.3rem',
                  py: '2rem',
                  '@media (max-width: 900px)': {
                     fontSize: '1.1rem',
                     py: '0.8rem',
                  },
               }}
            >
               <b>KWatt Solutions</b> is also engaged in designing and
               installation of PV systems, Skill Development Services, Solar
               Rooftop EPC Services and Solar Laboratory Equipment. It brings to
               you some of the solutions to deal with the real time problems in
               the solar power spectrum, which will help the budding leaders in
               the solar industry.
            </Typography>

            {/* Featured Courses */}
            <Typography
               variant='h3'
               sx={{
                  fontWeight: '600',
                  mb: '1.8rem',
                  '@media (max-width: 600px)': {
                     textAlign: 'center',
                     mb: '1rem',
                  },
               }}
            >
               Featured Courses
            </Typography>
            <CourseItem
               title='SolarInstall'
               description='SolarInstall is a NABCEP-certified learning branch that teaches people about Solar PV Applications, Sales & Economics, Design, Installation, Maintenance & Operations based on NABCEP, PVA, and ANSI standards. You can install a solar plant on the field and get nurtured and reputed by the credential of NABCEP PVA certification and solar training. You will be among the most skilled and knowledgeable people the industry can rely on.'
               price='27,600'
               prevPrice='34,500'
               image='https://solruf.s3.ap-south-1.amazonaws.com/solar-install.png'
               shortDescription='Hands-on Solar Rooftop Installation Training'
               borchureUrl='https://solruf.s3.ap-south-1.amazonaws.com/SolarInstall.pdf'
               agendaUrl='https://solruf.s3.ap-south-1.amazonaws.com/SolarInstall+Agenda.pdf'
               by='kWatt'
               enrollNowAnchor='https://www.kwattsolutions.com/kcpst/SolarInstallNew/'
            />
            <hr style={{ margin: '1rem 0' }} />
            <CourseItem
               right
               title='Solbizz'
               description='Learning the technicalities, legality, and software to design a plant is of utmost importance, but cracking business deals are also not left behind, this can be achieved by focusing on Solar EPC business agreements by understanding PV technology, answering PV enquiries, financial management, and legalities. Participants will get Hands-On practice on analyzing feasibility and PV power generation report, Techno Commercial proposal and detailed project report with relevant solar softwares.'
               prevPrice='20,000'
               price='16,000'
               image='https://solruf.s3.ap-south-1.amazonaws.com/solbizz.png'
               shortDescription='Let’s do the bussiness with Sun.'
               borchureUrl='https://solruf.s3.ap-south-1.amazonaws.com/SolBizz.pdf'
               by='kWatt'
               enrollNowAnchor='https://www.kwattsolutions.com/s_sparq.com/index.php'
            />
            <hr style={{ margin: '1rem 0' }} />
            <CourseItem
               title='Solware'
               description='This program will give you a solid foundation in the core standards for designing SPV systems. It will also help you broaden your mind and understand how software is used in the solar PV industry. You will be an expert in using the software like PVSYST, HELIOSCOPE, and STEPSOLAR that will help you to design any solar plant.'
               prevPrice='15,000'
               price='12,000'
               image='https://solruf.s3.ap-south-1.amazonaws.com/solware.png'
               shortDescription=''
               borchureUrl='https://solruf.s3.ap-south-1.amazonaws.com/Solware.pdf'
               agendaUrl='https://solruf.s3.ap-south-1.amazonaws.com/Solware+Agenda.pdf'
               by='kWatt'
               enrollNowAnchor='https://www.kwattsolutions.com/kcpst/solware/'
            />
            <hr style={{ margin: '1rem 0' }} />
            <CourseItem
               right
               title='Suryamitra'
               description="kWatt Solutions Pvt. Ltd. (kSPL) has been given the privilege to conduct the 'Suryamitra Training Program' initiated by Ministry of New and Renewable Energy (MNRE). Each training program consists of 30 participants and the total duration of the training will be 3 months (600 hours) including a one month internship in solar energy related industry. The training program will be strictly residential with a clear daily time table which includes early morning physical exercise such as Yoga/PT etc."
               noPrice
               image='https://solruf.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2022-11-02+at+6.43.36+PM.jpeg'
               shortDescription=''
               borchureUrl='https://solruf.s3.ap-south-1.amazonaws.com/SURYAMITRA_CURRICULUM.pdf'
               agendaUrl=''
               by='kWatt'
               enrollNowAction={() => {
                  setPopupOpen(true);
               }}
            />
            <hr style={{ margin: '1rem 0' }} />

            <Typography
               sx={{
                  fontSize: '1.3rem',
                  py: '2rem',
                  '@media (max-width: 900px)': {
                     fontSize: '1.1rem',
                     py: '0.8rem',
                  },
               }}
            >
               KWATT SOLUTIONS PVT. LTD. (kSPL) will offer you the chance to
               become an exclusive channel partner with the company. We are able
               to cooperate with one another on the next solar photovoltaic (PV)
               projects through mutual understanding. The need of the hour is
               the requirement of more skills and practical knowledge, which
               will be fulfilled by the above mentioned courses.
            </Typography>
            <Typography
               sx={{
                  fontSize: '1.3rem',
                  py: '2rem',
                  '@media (max-width: 900px)': {
                     fontSize: '1.1rem',
                     py: '0.8rem',
                  },
               }}
            >
               For more details about the courses please visit :{' '}
               <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://www.kwattsolutions.com/'
               >
                  www.kwattsolutions.com
               </a>
            </Typography>
         </Container>
      </Wrapper>
   );
};

export default KwattCourses;
