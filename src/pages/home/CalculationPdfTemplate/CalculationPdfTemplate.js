import {
   Box,
   Chip,
   Container,
   Divider,
   styled,
   Typography,
   useTheme,
} from '@mui/material';
import React from 'react';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import RoomIcon from '@mui/icons-material/Room';

// import calculationPdf from '../../../assets/calculation-pdf.svg';

const SocialBox = styled(Box)(({ theme }) => ({
   display: 'flex',
   alignItems: 'center',
   gap: 1,
   '& svg': {
      color: 'primary.dark',
      fontSize: '1rem',
      flexShrink: 0,
   },
   '& p': {
      color: 'primary.dark',
      fontSize: '0.8rem',
   },
}));

const CalculationPdfTemplate = () => {
   const theme = useTheme();

   return (
      <Box
         sx={{
            my: 5,
            mx: 'auto',
         }}
      >
         <Container>
            <Box
               sx={{
                  p: 2,
                //   background: `url(${calculationPdf})`,
                //   backgroundRepeat: 'no-repeat',
                //   backgroundPosition: 'top',
               }}
            >
               <Box
                  sx={{
                     display: 'flex',
                     justifyContent: 'space-between',
                     alignItems: 'center',
                  }}
               >
                  <Typography variant='h4' component='h1'>
                     Your solar report
                  </Typography>
                  <img
                     src='https://i.ibb.co/rpxqJQB/Sol-Ruf-animated-Logo-1.png'
                     alt='logo'
                  />
               </Box>
               <Box
                  sx={{
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                     gap: 4,
                     my: 5,
                  }}
               >
                  <Box
                     sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2,
                     }}
                  >
                     <Typography
                        fontWeight={600}
                        sx={{
                           // css for print
                           fontSize: '14px',
                        }}
                     >
                        MNRE current Benchmark Cost (without GST)
                     </Typography>
                     <Chip
                        label=' 45.6 kW'
                        sx={{ bgcolor: 'primary.main', fontWeight: 600 }}
                     />
                  </Box>
                  <Box
                     sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2,
                     }}
                  >
                     <Typography
                        fontWeight={600}
                        sx={{
                           // css for print
                           fontSize: '14px',
                        }}
                     >
                        Average Solar Radiation in Chandigarh
                     </Typography>
                     <Chip
                        label=' 45.6 kW'
                        sx={{ bgcolor: 'primary.main', fontWeight: 600 }}
                     />
                  </Box>
               </Box>
               <Box
                  sx={{
                     bgcolor: '#ffffff',
                     boxShadow: theme.shadows[25],
                     p: 3,
                     borderRadius: 2,
                     display: 'flex',
                     flexDirection: 'column',
                     justifyContent: 'center',
                     gap: 1.5,
                  }}
               >
                  <Box
                     sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2,
                     }}
                  >
                     <Box
                        sx={{
                           display: 'flex',
                           justifyContent: 'space-between',
                           alignItems: 'center',
                           gap: 2,
                        }}
                     >
                        <DragIndicatorIcon />
                        <Typography
                           sx={{
                              color: '#000',
                           }}
                        >
                           Size of kW System :
                        </Typography>
                     </Box>
                     <Typography
                        sx={{
                           flex: 1,
                           textAlign: 'right',
                           fontWeight: 600,
                           color: '#000000',
                        }}
                     >
                        4.6kw
                     </Typography>
                  </Box>
                  <Box
                     sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2,
                     }}
                  >
                     <Box
                        sx={{
                           display: 'flex',
                           justifyContent: 'space-between',
                           alignItems: 'center',
                           gap: 2,
                        }}
                     >
                        <DragIndicatorIcon />
                        <Typography
                           sx={{
                              color: '#000',
                           }}
                        >
                           Size of kW System :
                        </Typography>
                     </Box>
                     <Typography
                        sx={{
                           flex: 1,
                           textAlign: 'right',
                           fontWeight: 600,
                           color: '#000000',
                        }}
                     >
                        4.6kw
                     </Typography>
                  </Box>
                  <Divider />
               </Box>

               <Typography
                  sx={{
                     textAlign: 'center',
                     mt: 3,
                     mb: 6,
                     color: '#000000',
                     fontSize: '1.2rem',
                  }}
               >
                  1kWp solar rooftop plant will generate on an average over the
                  year of{' '}
                  <span
                     style={{
                        color: '#ffd05b',
                        fontWeight: 600,
                     }}
                  >
                     4.6kw
                  </span>{' '}
                  electricity per day (considering 5.5 sunshine hours)
               </Typography>

               <Box
                  sx={{
                     display: 'flex',
                     justifyContent: 'space-between',
                     alignItems: 'center',
                     gap: 2,
                     bgcolor: 'primary.main',
                     p: 2,
                  }}
               >
                  <SocialBox>
                     <PhoneIcon />
                     <Typography>+91 99323 83997</Typography>
                  </SocialBox>
                  <SocialBox>
                     <EmailIcon />
                     <Typography>sumit@solruf.com</Typography>
                  </SocialBox>
                  <SocialBox>
                     <LanguageIcon />
                     <Typography>www.solruf.com</Typography>
                  </SocialBox>
                  <SocialBox>
                     <RoomIcon />
                     <Typography>
                        1709, World trade center, Mumbai, 400005, MH
                     </Typography>
                  </SocialBox>
               </Box>
            </Box>
         </Container>
      </Box>
   );
};

export default CalculationPdfTemplate;
