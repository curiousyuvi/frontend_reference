import {
   Box,
   Container,
   InputAdornment,
   MenuItem,
   Paper,
   Slider,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import CachedIcon from '@mui/icons-material/Cached';
import PrimaryButton from '../Custom/PrimaryButton/PrimaryButton';
import SolrufTextField from '../TextField/TextField';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useForm } from 'react-hook-form';
import SolrufModal2 from '../Custom/SolrufModal/SolrufModal2';
import solarPanelImage from '../../assets/solar-panel.svg';
import costImage from '../../assets/cost.svg';
import electricityGenImage from '../../assets/electricity_gen.svg';
import tariffImage from '../../assets/tariff.svg';
import rooftopImage from '../../assets/rooftop.svg';
import roiImage from '../../assets/roi.svg';

import useSolarCalculator from '../../hooks/useSolarCalculator';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import EMICalculator from '../EMICalculator/EMICalculator';
import {
   BoxWrapper,
   CalculatorTextField,
   InnerBoxWrapper,
   SmallTabBtn,
   SmallTabBtnsWrapper,
   TabBtn,
   TabBtnsWrapper,
   Wrapper,
} from './SolarCalculator.style';
import { HashLink } from 'react-router-hash-link';
import { BankButton, BanksWrapper } from '../EMICalculator/EMICalculator.style';
import axisImage from '../../assets/axis.jpg';
import iciciImage from '../../assets/icici.jpg';
import hsbcImage from '../../assets/hsbc.jpg';
import kotakImage from '../../assets/kotak.jpg';
import cbiImage from '../../assets/centralbankofindia.jpg';
import corpImage from '../../assets/corporation.jpg';
import indusindImage from '../../assets/indusind.jpg';
import rblImage from '../../assets/rbl.jpg';
import scImage from '../../assets/standardcharted.jpg';
import yesImage from '../../assets/yes.jpg';
import sbiImage from '../../assets/sbi.png';
import instacredImage from '../../assets/instacred.png';
import { banksData, statesData, valuetext } from './utils';

const SolarCalculator = () => {
   const {
      register,
      handleSubmit,
      setValue,
      formState: { errors },
   } = useForm();

   const {
      register: emiRegister,
      handleSubmit: handleEMISubmit,
      formState: { errors: emiErrors },
      reset: resetEMI,
   } = useForm();
   const [calcType, setCalcType] = useState('total_rooftop_area');
   const categoryData = [
      'Residential',
      'Industrial',
      'Institutional',
      'Commercial',
      'Government',
      'Social Sector',
   ];

   const mnreCostData = {
      typeA: {
         upto1: 46923,
         from1to2: 43140,
         from2to3: 42020,
         from3to10: 40991,
         from10to100: 38236,
         from100to500: 35886,
      },
      typeB: {
         upto1: 51616,
         from1to2: 47447,
         from2to3: 46216,
         from3to10: 45087,
         from10to100: 42056,
         from100to500: 39467,
      },
   };

   const [calcOutputs, setCalcOutputs] = useState(null);
   const solarCalculator = useSolarCalculator();
   const [loanAmount, setLoanAmount] = useState(0);
   const [bank, setBank] = useState('axis');

   const calculateEMI = ({ amount, months, rate }) => {
      console.log({ amount, months, rate });
      const r = rate / (100 * 12);
      const factor = Math.pow(1 + r, months);
      const emiValue = (amount * r * months * factor) / ((factor - 1) * months);
      return emiValue;
   };

   const handleRegister = async (inputs) => {
      console.log('Calculator Inputs', inputs);
      setCalcOutputs(
         solarCalculator({
            inputs,
            calcType,
            statesData,
            mnreCostData,
            averageMnreCost: 45000,
         })
      );

      setTimeout(() => {
         setCalcModalOpen(true);
      }, 300);
   };

   useEffect(() => {
      calcOutputs && calcOutputs.budget && setLoanAmount(calcOutputs.budget);
   }, [calcOutputs]);

   const handleReRegister = (inputs) => {
      setLoanAmount(inputs.amount);
   };

   const [calcModalOpen, setCalcModalOpen] = useState(false);

   const calcOptions = [
      { name: 'Total Rooftop Area', value: 'total_rooftop_area' },
      {
         name: 'Solar Panel Capacity you want to install',
         value: 'solar_panel_capacity',
      },
      { name: 'Your budget', value: 'your_budget' },
   ];

   const [currentTab, setCurrentTab] = useState('solar');

   const onTabChange = () => {
      setCurrentTab(currentTab === 'solar' ? 'emi' : 'solar');
   };

   const [sliderValue, setSliderValue] = useState(0);

   const handleSliderChange = (e, newValue) => {
      console.log(newValue);
      setSliderValue(newValue);
      setValue('average_electricity_cost', newValue * 100);
   };

   return (
      <>
         <SolrufModal2
            open={calcModalOpen}
            onClose={() => {
               setCalcModalOpen(false);
               resetEMI();
            }}
            mobileTitle='Solar Rooftop Calculator'
            title='Solar Rooftop Calculator'
         >
            {calcOutputs ? (
               <Box
                  sx={{
                     width: '100%',
                     display: 'flex',
                     flexDirection: 'column',
                     rowGap: '0.3rem',
                     py: '2rem',
                     px: '2rem',
                     overflowY: 'auto',
                     maxHeight: '85vh',
                  }}
               >
                  <Typography variant='p' sx={{ fontSize: '1.1rem' }}>
                     Average solar irradiation in{' '}
                     {statesData[calcOutputs?.state].state} state is{' '}
                     {statesData[calcOutputs?.state].ghi} W / sq.m
                  </Typography>
                  <Typography variant='p' sx={{ fontSize: '1.1rem' }}>
                     1kWp solar rooftop plant will generate on an average over
                     the year {statesData[calcOutputs?.state].teg} kWh of
                     electricity per day (considering 5.5 sunshine hours)
                  </Typography>
                  <Typography variant='p' sx={{ fontSize: '1.1rem' }}>
                     MNRE current Benchmark Cost{' '}
                     <span style={{ fontSize: '0.8rem' }}>(without GST)</span> :
                     Rs. {calcOutputs.mnre_cost} Rs. / kW
                  </Typography>
                  <Box
                     sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        fontSize: '1rem',
                     }}
                  >
                     <PictureAsPdfIcon
                        sx={{ fontSize: '1.5rem', color: 'red', mr: '0.3rem' }}
                     />
                     <a
                        href='https://solarrooftop.gov.in/notification/130_notification.pdf'
                        target='_blank'
                        rel='noreferrer'
                     >
                        View Benchmark Cost List
                     </a>
                  </Box>
                  <Box
                     sx={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        '@media (max-width: 600px)': {
                           flexDirection: 'column',
                        },
                        width: '100%',
                        gap: '1rem',
                        py: '1rem',
                     }}
                  >
                     <Box
                        sx={{
                           width: '25rem',
                           height: '15rem',
                           border: '1.7px #ffd05b solid',
                           p: '0.7rem',
                           display: 'flex',
                           flexDirection: 'column',
                           rowGap: '0.5rem',
                           position: 'relative',
                           '@media (max-width: 600px)': {
                              '& img': {
                                 width: '50px',
                              },
                              width: '100%',
                              height: 'auto',
                           },
                        }}
                     >
                        <Typography
                           variant='p'
                           sx={{
                              fontWeight: '600',
                              fontSize: '1.2rem',
                              '@media (max-width: 600px)': {
                                 fontSize: '0.8rem',
                              },
                           }}
                        >
                           SIZE OF KW SYSTEM
                        </Typography>
                        <Typography
                           variant='h4'
                           sx={{ fontWeight: '600', color: 'rgba(0,0,0,0.7)' }}
                        >
                           {parseFloat(
                              calcOutputs.solar_panel_capacity
                           ).toFixed(1)}{' '}
                           kW
                        </Typography>
                        <img
                           src={solarPanelImage}
                           alt=''
                           style={{
                              position: 'absolute',
                              bottom: '5px',
                              right: '5px',
                           }}
                        />
                     </Box>
                     <Box
                        sx={{
                           width: '25rem',
                           height: '15rem',
                           border: '1.7px #ffd05b solid',
                           p: '0.7rem',
                           display: 'flex',
                           flexDirection: 'column',
                           rowGap: '0.5rem',
                           position: 'relative',
                           '@media (max-width: 600px)': {
                              '& img': {
                                 width: '50px',
                              },
                              width: '100%',
                              height: 'auto',
                           },
                        }}
                     >
                        <Typography
                           variant='p'
                           sx={{
                              fontWeight: '600',
                              fontSize: '1.2rem',
                              '@media (max-width: 600px)': {
                                 fontSize: '0.8rem',
                              },
                           }}
                        >
                           COST OF PLANT
                        </Typography>
                        <Typography
                           variant='h4'
                           sx={{ fontWeight: '600', color: 'rgba(0,0,0,0.7)' }}
                        >
                           {parseFloat(
                              calcOutputs.budget *
                                 (1 - calcOutputs.mnre_subsidy / 100)
                           ).toFixed(0)}{' '}
                           Rs.{' '}
                           <span style={{ fontSize: '1rem' }}>
                              (with {calcOutputs.mnre_subsidy}% subsidy)
                           </span>
                        </Typography>
                        <Typography
                           variant='h6'
                           sx={{ fontWeight: '600', color: 'rgba(0,0,0,0.7)' }}
                        >
                           {parseFloat(calcOutputs.budget).toFixed(0)} Rs.{' '}
                           <span style={{ fontSize: '1rem' }}>
                              (without subsidy)
                           </span>
                        </Typography>
                        <img
                           src={costImage}
                           alt=''
                           style={{
                              position: 'absolute',
                              bottom: '5px',
                              right: '5px',
                           }}
                        />
                     </Box>
                  </Box>
                  <Box
                     sx={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        '@media (max-width: 600px)': {
                           flexDirection: 'column',
                        },
                        width: '100%',
                        gap: '1rem',
                        py: '1rem',
                     }}
                  >
                     <Box
                        sx={{
                           width: '25rem',
                           height: '15rem',
                           border: '1.7px #ffd05b solid',
                           p: '0.7rem',
                           display: 'flex',
                           flexDirection: 'column',
                           rowGap: '0.5rem',
                           position: 'relative',
                           '@media (max-width: 600px)': {
                              '& img': {
                                 width: '50px',
                              },
                              width: '100%',
                              height: 'auto',
                           },
                        }}
                     >
                        <Typography
                           variant='p'
                           sx={{
                              fontWeight: '600',
                              fontSize: '1.2rem',
                              '@media (max-width: 600px)': {
                                 fontSize: '0.8rem',
                              },
                           }}
                        >
                           TOTAL ELECTRICITY GENERATION
                        </Typography>
                        <Typography
                           variant='h4'
                           sx={{ fontWeight: '600', color: 'rgba(0,0,0,0.7)' }}
                        >
                           {parseFloat(
                              calcOutputs.total_electricity_generation_monthly
                           ).toFixed(1)}{' '}
                           kWh{' '}
                           <span style={{ fontSize: '1.3rem' }}>monthly</span>
                        </Typography>
                        <Typography
                           variant='h5'
                           sx={{ fontWeight: '600', color: 'rgba(0,0,0,0.7)' }}
                        >
                           {parseFloat(
                              calcOutputs.total_electricity_generation_monthly *
                                 10
                           ).toFixed(1)}{' '}
                           kWh <span style={{ fontSize: '1rem' }}>anually</span>
                        </Typography>
                        <Typography
                           variant='h5'
                           sx={{ fontWeight: '600', color: 'rgba(0,0,0,0.7)' }}
                        >
                           {parseFloat(
                              calcOutputs.total_electricity_generation_monthly *
                                 10 *
                                 25
                           ).toFixed(1)}{' '}
                           kWh{' '}
                           <span style={{ fontSize: '1rem' }}>
                              Life-Time (25 years)
                           </span>
                        </Typography>
                        <img
                           src={electricityGenImage}
                           alt=''
                           style={{
                              position: 'absolute',
                              bottom: '5px',
                              right: '5px',
                           }}
                        />
                     </Box>
                     <Box
                        sx={{
                           width: '25rem',
                           height: '15rem',
                           border: '1.7px #ffd05b solid',
                           p: '0.7rem',
                           display: 'flex',
                           flexDirection: 'column',
                           rowGap: '0.5rem',
                           position: 'relative',
                           '@media (max-width: 600px)': {
                              '& img': {
                                 width: '50px',
                              },
                              width: '100%',
                              height: 'auto',
                           },
                        }}
                     >
                        <Typography
                           variant='p'
                           sx={{
                              fontWeight: '600',
                              fontSize: '1.2rem',
                              '@media (max-width: 600px)': {
                                 fontSize: '0.8rem',
                              },
                           }}
                        >
                           SAVINGS
                        </Typography>
                        <Typography
                           variant='h4'
                           sx={{ fontWeight: '600', color: 'rgba(0,0,0,0.7)' }}
                        >
                           {parseFloat(
                              calcOutputs.tariff_monthly * 10 * 25
                           ).toFixed(0)}{' '}
                           Rs.{' '}
                           <span style={{ fontSize: '1rem' }}>
                              Life-Time (25 years)
                           </span>
                        </Typography>
                        <Typography
                           variant='h6'
                           sx={{ fontWeight: '600', color: 'rgba(0,0,0,0.7)' }}
                        >
                           {parseFloat(calcOutputs.tariff_monthly).toFixed(0)}{' '}
                           Rs. <span style={{ fontSize: '1rem' }}>monthly</span>
                        </Typography>
                        <Typography
                           variant='h6'
                           sx={{ fontWeight: '600', color: 'rgba(0,0,0,0.7)' }}
                        >
                           {parseFloat(calcOutputs.tariff_monthly * 10).toFixed(
                              0
                           )}{' '}
                           Rs. <span style={{ fontSize: '1rem' }}>anually</span>
                        </Typography>

                        <img
                           src={tariffImage}
                           alt=''
                           style={{
                              position: 'absolute',
                              bottom: '5px',
                              right: '5px',
                           }}
                        />
                     </Box>
                  </Box>
                  <Box
                     sx={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        '@media (max-width: 600px)': {
                           flexDirection: 'column',
                        },
                        width: '100%',
                        gap: '1rem',
                        py: '1rem',
                     }}
                  >
                     <Box
                        sx={{
                           width: '25rem',
                           height: '15rem',
                           border: '1.7px #ffd05b solid',
                           p: '0.7rem',
                           display: 'flex',
                           flexDirection: 'column',
                           rowGap: '0.5rem',
                           position: 'relative',
                           '@media (max-width: 600px)': {
                              '& img': {
                                 width: '50px',
                              },
                              width: '100%',
                              height: 'auto',
                           },
                        }}
                     >
                        <Typography
                           variant='p'
                           sx={{
                              fontWeight: '600',
                              fontSize: '1.2rem',
                              '@media (max-width: 600px)': {
                                 fontSize: '0.8rem',
                              },
                           }}
                        >
                           SHADOW FREE AREA REQUIRED
                        </Typography>
                        <Typography
                           variant='h4'
                           sx={{ fontWeight: '600', color: 'rgba(0,0,0,0.7)' }}
                        >
                           {parseFloat(calcOutputs.shadow_free_area).toFixed(0)}{' '}
                           Sq. m.{' '}
                        </Typography>
                        <img
                           src={rooftopImage}
                           alt=''
                           style={{
                              position: 'absolute',
                              bottom: '5px',
                              right: '5px',
                           }}
                        />
                     </Box>
                     <Box
                        sx={{
                           width: '25rem',
                           height: '15rem',
                           border: '1.7px #ffd05b solid',
                           p: '0.7rem',
                           display: 'flex',
                           flexDirection: 'column',
                           rowGap: '0.5rem',
                           position: 'relative',
                           '@media (max-width: 600px)': {
                              '& img': {
                                 width: '50px',
                              },
                              width: '100%',
                              height: 'auto',
                           },
                        }}
                     >
                        <Typography
                           variant='p'
                           sx={{
                              fontWeight: '600',
                              fontSize: '1.2rem',
                              '@media (max-width: 600px)': {
                                 fontSize: '0.8rem',
                              },
                           }}
                        >
                           RETURN ON INVESTMENT
                        </Typography>
                        <Typography
                           variant='h4'
                           sx={{ fontWeight: '600', color: 'rgba(0,0,0,0.7)' }}
                        >
                           {parseFloat(
                              (calcOutputs.tariff_monthly * 10 * 25 * 100) /
                                 calcOutputs.budget
                           ).toFixed(0)}{' '}
                           %{' '}
                        </Typography>
                        <img
                           src={roiImage}
                           alt=''
                           style={{
                              position: 'absolute',
                              bottom: '5px',
                              right: '5px',
                           }}
                        />
                     </Box>
                  </Box>
                  <Box>
                     <Box
                        component='form'
                        onSubmit={handleEMISubmit(handleReRegister)}
                        sx={{
                           display: 'flex',
                           columnGap: '1rem',
                           alignItems: 'center',
                           justifyContent: 'center',
                           width: '100%',
                        }}
                     >
                        <CalculatorTextField
                           size='small'
                           label='Cost of Solar Plant'
                           type='number'
                           defaultValue={loanAmount}
                           sx={{
                              width: '20rem',
                              '& .MuiOutlinedInput-root': {
                                 borderRadius: '20px',
                                 width: '20rem',
                              },
                           }}
                           {...emiRegister('amount', {
                              required: {
                                 value: true,
                                 message: 'Cost is required.',
                              },
                              min: {
                                 value: 0,
                                 message: 'Cost cannot be 0.',
                              },
                           })}
                           error={emiErrors.amount}
                           helperText={
                              emiErrors.amount && emiErrors.amount.message
                           }
                        />
                        <Typography>Rs.</Typography>
                        <PrimaryButton
                           type='submit'
                           sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.5rem',
                           }}
                        >
                           <CachedIcon /> Recalculate EMI
                        </PrimaryButton>
                     </Box>
                     <Typography variant='h6' sx={{ fontWeight: '600' }}>
                        Select Bank
                     </Typography>
                     <BanksWrapper>
                        <BankButton
                           src={axisImage}
                           component='img'
                           alt=''
                           sx={{
                              border:
                                 bank === 'axis'
                                    ? '4px solid #ffd05b'
                                    : '4px solid transparent',
                           }}
                           onClick={() => setBank('axis')}
                        />
                        <BankButton
                           src={iciciImage}
                           component='img'
                           alt=''
                           sx={{
                              border:
                                 bank === 'icici'
                                    ? '4px solid #ffd05b'
                                    : '4px solid transparent',
                           }}
                           onClick={() => setBank('icici')}
                        />
                        <BankButton
                           src={hsbcImage}
                           component='img'
                           alt=''
                           sx={{
                              border:
                                 bank === 'hsbc'
                                    ? '4px solid #ffd05b'
                                    : '4px solid transparent',
                           }}
                           onClick={() => setBank('hsbc')}
                        />
                        <BankButton
                           src={kotakImage}
                           component='img'
                           alt=''
                           sx={{
                              border:
                                 bank === 'kotak'
                                    ? '4px solid #ffd05b'
                                    : '4px solid transparent',
                           }}
                           onClick={() => setBank('kotak')}
                        />
                        <BankButton
                           src={cbiImage}
                           component='img'
                           alt=''
                           sx={{
                              border:
                                 bank === 'cbi'
                                    ? '4px solid #ffd05b'
                                    : '4px solid transparent',
                           }}
                           onClick={() => setBank('cbi')}
                        />
                        <BankButton
                           src={corpImage}
                           component='img'
                           alt=''
                           sx={{
                              border:
                                 bank === 'corp'
                                    ? '4px solid #ffd05b'
                                    : '4px solid transparent',
                           }}
                           onClick={() => setBank('corp')}
                        />
                        <BankButton
                           src={indusindImage}
                           component='img'
                           alt=''
                           sx={{
                              border:
                                 bank === 'indusind'
                                    ? '4px solid #ffd05b'
                                    : '4px solid transparent',
                           }}
                           onClick={() => setBank('indusind')}
                        />
                        <BankButton
                           src={rblImage}
                           component='img'
                           alt=''
                           sx={{
                              border:
                                 bank === 'rbl'
                                    ? '4px solid #ffd05b'
                                    : '4px solid transparent',
                           }}
                           onClick={() => setBank('rbl')}
                        />
                        <BankButton
                           src={scImage}
                           component='img'
                           alt=''
                           sx={{
                              border:
                                 bank === 'sc'
                                    ? '4px solid #ffd05b'
                                    : '4px solid transparent',
                           }}
                           onClick={() => setBank('sc')}
                        />
                        <BankButton
                           src={yesImage}
                           component='img'
                           alt=''
                           sx={{
                              border:
                                 bank === 'yes'
                                    ? '4px solid #ffd05b'
                                    : '4px solid transparent',
                           }}
                           onClick={() => setBank('yes')}
                        />
                        <BankButton
                           src={sbiImage}
                           component='img'
                           alt=''
                           sx={{
                              border:
                                 bank === 'sbi'
                                    ? '4px solid #ffd05b'
                                    : '4px solid transparent',
                           }}
                           onClick={() => setBank('sbi')}
                        />
                        <BankButton
                           src={instacredImage}
                           component='img'
                           alt=''
                           sx={{
                              border:
                                 bank === 'instacred'
                                    ? '4px solid #ffd05b'
                                    : '4px solid transparent',
                           }}
                           onClick={() => setBank('instacred')}
                        />
                     </BanksWrapper>
                     <TableContainer component={Paper}>
                        <Table
                           sx={{
                              minWidth: 650,
                              '@media (max-width: 600px)': {
                                 minWidth: 0,
                              },
                           }}
                           aria-label='simple table'
                        >
                           <TableHead>
                              <TableRow>
                                 <TableCell
                                    sx={{ fontWeight: '700' }}
                                    align='center'
                                 >
                                    Duration
                                 </TableCell>
                                 <TableCell
                                    sx={{ fontWeight: '700' }}
                                    align='center'
                                 >
                                    Interest&nbsp;(%)
                                 </TableCell>
                                 <TableCell
                                    sx={{ fontWeight: '700' }}
                                    align='center'
                                 >
                                    EMI Per Month
                                 </TableCell>
                              </TableRow>
                           </TableHead>
                           <TableBody>
                              {banksData[bank].map((ele) => (
                                 <TableRow
                                    key={ele.months}
                                    sx={{
                                       '&:last-child td, &:last-child th': {
                                          border: 0,
                                       },
                                    }}
                                 >
                                    <TableCell align='center'>
                                       {ele.months}
                                    </TableCell>
                                    <TableCell align='center'>
                                       {ele.rate}
                                    </TableCell>
                                    <TableCell align='center'>
                                       Rs.
                                       {parseFloat(
                                          calculateEMI({
                                             amount: loanAmount,
                                             months: ele.months,
                                             rate: ele.rate,
                                          })
                                       ).toFixed(0)}
                                       /-
                                    </TableCell>
                                 </TableRow>
                              ))}
                           </TableBody>
                        </Table>
                     </TableContainer>
                  </Box>
                  <Box
                     sx={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        '@media (max-width: 600px)': {
                           flexDirection: 'column',
                        },
                        width: '100%',
                        gap: '1rem',
                        py: '1rem',
                     }}
                  >
                     <PrimaryButton
                        component={HashLink}
                        to='#offer-form'
                        sx={{
                           width: {
                              xs: '180px',
                              md: '200px',
                              lg: '230px',
                           },
                           border: '2px solid #ffd05b',
                           backgroundColor: 'transparent',
                           '&:hover': {
                              backgroundColor: 'transparent',
                              border: '2px solid #ffd05b',
                              color: 'primary.main',
                           },

                           fontSize: {
                              xs: '0.8rem',
                              md: '0.9rem',
                              lg: '0.9rem',
                           },
                           fontWeight: '800',
                           padding: '10px',
                           color: 'primary.main',
                           textAlign: 'center',
                        }}
                     >
                        Book a free site visit
                     </PrimaryButton>
                  </Box>
               </Box>
            ) : (
               <></>
            )}
         </SolrufModal2>
         <Box id='solar-calculator' sx={{ transform: 'translateY(-105px)' }} />
         <Container maxWidth='xl'>
            <Wrapper>
               <BoxWrapper>
                  <TabBtnsWrapper>
                     <TabBtn
                        sx={{
                           bgcolor:
                              currentTab === 'solar'
                                 ? 'primary.dark'
                                 : 'rgba(255,208,91, 0.2)',
                        }}
                        onClick={onTabChange}
                     >
                        <Typography
                           variant='h6'
                           sx={{
                              color:
                                 currentTab === 'solar' ? 'primary.main' : '',
                              fontWeight: '700',
                              textAlign: 'center',
                              '@media (max-width: 600px)': {
                                 fontSize: '0.8rem',
                              },
                           }}
                        >
                           SOLAR ROOFTOP CALCULATOR
                        </Typography>
                        <Typography
                           variant='p'
                           sx={{
                              textAlign: 'center',
                              color: currentTab === 'solar' ? 'white' : '',
                              '@media (max-width: 600px)': {
                                 display: 'none',
                              },
                           }}
                        >
                           Check your Solar installation requirements & get NIL
                           electricity bills.
                        </Typography>
                     </TabBtn>
                     <TabBtn
                        sx={{
                           bgcolor:
                              currentTab === 'emi'
                                 ? 'primary.dark'
                                 : 'rgba(255,208,91, 0.2)',
                        }}
                        onClick={onTabChange}
                     >
                        <Typography
                           variant='h6'
                           sx={{
                              color: currentTab === 'emi' ? 'primary.main' : '',
                              fontWeight: '700',
                              textAlign: 'center',
                              '@media (max-width: 600px)': {
                                 fontSize: '0.8rem',
                              },
                           }}
                        >
                           EMI CALCULATOR
                        </Typography>
                        <Typography
                           variant='p'
                           sx={{
                              textAlign: 'center',
                              color: currentTab === 'emi' ? 'white' : '',
                              '@media (max-width: 600px)': {
                                 display: 'none',
                              },
                           }}
                        >
                           Check Easy Financing options to build your business
                           with monthly payments
                        </Typography>
                     </TabBtn>
                  </TabBtnsWrapper>

                  <InnerBoxWrapper>
                     {
                        {
                           solar: (
                              <Box
                                 sx={{
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    rowGap: '1rem',
                                 }}
                                 component='form'
                                 onSubmit={handleSubmit(handleRegister)}
                              >
                                 <Typography varinat='h6' color='black'>
                                    Select a method
                                 </Typography>
                                 <SmallTabBtnsWrapper>
                                    <SmallTabBtn
                                       sx={{
                                          background:
                                             calcType === 'total_rooftop_area'
                                                ? 'black'
                                                : '',
                                       }}
                                       onClick={() => {
                                          setCalcType('total_rooftop_area');
                                       }}
                                    >
                                       <Typography
                                          variant='p'
                                          sx={{
                                             color:
                                                calcType ===
                                                'total_rooftop_area'
                                                   ? 'primary.main'
                                                   : '',
                                             fontWeight: '700',
                                             textAlign: 'center',
                                             '@media (max-width: 600px)': {
                                                fontSize: '0.8rem',
                                             },
                                          }}
                                       >
                                          Total Rooftop Area
                                       </Typography>
                                    </SmallTabBtn>
                                    <SmallTabBtn
                                       sx={{
                                          background:
                                             calcType === 'solar_panel_capacity'
                                                ? 'black'
                                                : '',
                                       }}
                                       onClick={() => {
                                          setCalcType('solar_panel_capacity');
                                       }}
                                    >
                                       <Typography
                                          variant='p'
                                          sx={{
                                             color:
                                                calcType ===
                                                'solar_panel_capacity'
                                                   ? 'primary.main'
                                                   : '',
                                             fontWeight: '700',
                                             textAlign: 'center',
                                             '@media (max-width: 600px)': {
                                                fontSize: '0.8rem',
                                             },
                                          }}
                                       >
                                          Solar Panel Capacity
                                       </Typography>
                                    </SmallTabBtn>
                                    <SmallTabBtn
                                       sx={{
                                          background:
                                             calcType === 'your_budget'
                                                ? 'black'
                                                : '',
                                       }}
                                       onClick={() => {
                                          setCalcType('your_budget');
                                       }}
                                    >
                                       <Typography
                                          variant='p'
                                          sx={{
                                             color:
                                                calcType === 'your_budget'
                                                   ? 'primary.main'
                                                   : '',
                                             fontWeight: '700',
                                             textAlign: 'center',
                                             '@media (max-width: 600px)': {
                                                fontSize: '0.8rem',
                                             },
                                          }}
                                       >
                                          Your Budget
                                       </Typography>
                                    </SmallTabBtn>
                                 </SmallTabBtnsWrapper>
                                 <SolrufTextField
                                    size='small'
                                    select
                                    sx={{
                                       border: 'none',
                                       outline: 'none',
                                       p: 0,

                                       '& .MuiOutlinedInput-root': {
                                          borderRadius: '20px',
                                          p: 0,
                                          border: 'none',
                                          outline: 'none',
                                          '@media (min-width: 600px)': {
                                             display: 'none',
                                          },
                                       },
                                    }}
                                    value={calcType}
                                    onChange={(event) => {
                                       setCalcType(event.target.value);
                                    }}
                                 >
                                    {calcOptions.map(({ name, value }) => (
                                       <MenuItem value={value} key={value}>
                                          {name}
                                       </MenuItem>
                                    ))}
                                 </SolrufTextField>
                                 {calcType === 'total_rooftop_area' ? (
                                    <Box
                                       sx={{
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'space-evenly',
                                          columnGap: '1rem',
                                          width: '100%',
                                       }}
                                    >
                                       <Box
                                          sx={{
                                             display: 'flex',
                                             alignItems: [
                                                'flex-start',
                                                'flex-start',
                                                'center',
                                             ],
                                             justifyContent: 'space-between',
                                             rowGap: '0.2rem',
                                             width: '100%',
                                             flexDirection: [
                                                'column',
                                                'column',
                                                'row',
                                             ],
                                          }}
                                       >
                                          <Typography
                                             sx={{
                                                textAlign: 'left',
                                                fontWeight: '700',
                                                fontSize: '1.2rem',
                                                color: '#000000',
                                             }}
                                          >
                                             Solar Panel Capacity
                                          </Typography>
                                          <CalculatorTextField
                                             size='small'
                                             type='number'
                                             label='Shadow Free Rooftop Area'
                                             step='0.01'
                                             {...register(
                                                'total_rooftop_area',
                                                {
                                                   required: {
                                                      value: true,
                                                      message:
                                                         'Total Rooftop Area is required',
                                                   },
                                                   min: {
                                                      value: 1,
                                                      message:
                                                         'Total Rooftop Area cannot be 0',
                                                   },
                                                }
                                             )}
                                             error={errors.total_rooftop_area}
                                             helperText={
                                                errors.total_rooftop_area &&
                                                errors.total_rooftop_area
                                                   .message
                                             }
                                             InputProps={{
                                                endAdornment: (
                                                   <InputAdornment position='end'>
                                                      Sq. m
                                                   </InputAdornment>
                                                ),
                                             }}
                                             sx={{
                                                width: '100%',
                                                maxWidth: '400px',
                                             }}
                                          />
                                       </Box>
                                    </Box>
                                 ) : (
                                    <></>
                                 )}
                                 {calcType === 'solar_panel_capacity' ? (
                                    <Box
                                       sx={{
                                          display: 'flex',
                                          alignItems: [
                                             'flex-start',
                                             'flex-start',
                                             'center',
                                          ],
                                          columnGap: '0.2rem',
                                          width: '100%',
                                          justifyContent: 'space-between',
                                          flexDirection: [
                                             'column',
                                             'column',
                                             'row',
                                          ],
                                       }}
                                    >
                                       <Typography
                                          sx={{
                                             textAlign: 'left',
                                             fontWeight: '700',
                                             fontSize: '1.2rem',
                                             color: '#000000',
                                          }}
                                       >
                                          Solar Panel Capacity
                                       </Typography>
                                       <CalculatorTextField
                                          sx={{
                                             width: ['100%', '50%'],
                                          }}
                                          size='small'
                                          type='number'
                                          step='0.01'
                                          label='Panel Capacity want to..'
                                          {...register('solar_panel_capacity', {
                                             required: {
                                                value: true,
                                                message:
                                                   'Solar Panel Capacity is required',
                                             },
                                             min: {
                                                value: 1,
                                                message:
                                                   'Solar Panel Capacity cannot be 0',
                                             },
                                          })}
                                          error={errors.solar_panel_capacity}
                                          helperText={
                                             errors.solar_panel_capacity &&
                                             errors.solar_panel_capacity.message
                                          }
                                          InputProps={{
                                             endAdornment: (
                                                <InputAdornment position='end'>
                                                   KW
                                                </InputAdornment>
                                             ),
                                          }}
                                       />
                                    </Box>
                                 ) : (
                                    <></>
                                 )}

                                 {calcType === 'your_budget' ? (
                                    <Box
                                       sx={{
                                          display: 'flex',
                                          alignItems: [
                                             'flex-start',
                                             'flex-start',
                                             'center',
                                          ],
                                          justifyContent: 'space-between',
                                          rowGap: '0.2rem',
                                          width: '100%',
                                          flexDirection: [
                                             'column',
                                             'column',
                                             'row',
                                          ],
                                       }}
                                    >
                                       <Typography
                                          sx={{
                                             textAlign: 'left',
                                             fontWeight: '700',
                                             fontSize: '1.2rem',
                                             color: '#000000',
                                          }}
                                       >
                                          Solar Panel Capacity
                                       </Typography>
                                       <CalculatorTextField
                                          size='small'
                                          type='number'
                                          label='Your Budget'
                                          {...register('budget', {
                                             required: {
                                                value: true,
                                                message: 'Budget is required',
                                             },
                                             min: {
                                                value: 50000,
                                                message:
                                                   'Budget cannot be less than 50,000',
                                             },
                                          })}
                                          error={errors.budget}
                                          helperText={
                                             errors.budget &&
                                             errors.budget.message
                                          }
                                          sx={{
                                             width: '100%',
                                             maxWidth: '400px',
                                          }}
                                          InputProps={{
                                             endAdornment: (
                                                <InputAdornment position='end'>
                                                   Rs
                                                </InputAdornment>
                                             ),
                                          }}
                                       />
                                    </Box>
                                 ) : (
                                    <></>
                                 )}

                                 <Box
                                    sx={{
                                       display: 'flex',
                                       alignItems: [
                                          'flex-start',
                                          'flex-start',
                                          'center',
                                       ],
                                       flexDirection: [
                                          'column',
                                          'column',
                                          'row',
                                       ],
                                       justifyContent: 'space-between',
                                       columnGap: '2rem',
                                       width: '100%',
                                    }}
                                 >
                                    <Typography
                                       sx={{
                                          textAlign: 'left',
                                          fontWeight: '700',
                                          fontSize: '1.2rem',
                                          color: '#000000',
                                       }}
                                    >
                                       Select State
                                    </Typography>
                                    <CalculatorTextField
                                       size='small'
                                       defaultValue=''
                                       select
                                       label='Select State'
                                       {...register('state', {
                                          required: {
                                             value: true,
                                             message: 'State is required',
                                          },
                                       })}
                                       error={errors.state}
                                       helperText={
                                          errors.state && errors.state.message
                                       }
                                       sx={{
                                          maxWidth: '400px',
                                       }}
                                    >
                                       {statesData.map(({ state }, idx) => (
                                          <MenuItem value={idx} key={state}>
                                             {state}
                                          </MenuItem>
                                       ))}
                                    </CalculatorTextField>
                                 </Box>
                                 <Box
                                    sx={{
                                       display: 'flex',
                                       alignItems: [
                                          'flex-start',
                                          'flex-start',
                                          'center',
                                       ],
                                       flexDirection: [
                                          'column',
                                          'column',
                                          'row',
                                       ],
                                       justifyContent: 'space-between',
                                       columnGap: '2rem',
                                       width: '100%',
                                    }}
                                 >
                                    <Typography
                                       sx={{
                                          textAlign: 'left',
                                          fontWeight: '700',
                                          fontSize: '1.2rem',
                                          color: '#000000',
                                       }}
                                    >
                                       Select Category
                                    </Typography>
                                    <CalculatorTextField
                                       size='small'
                                       defaultValue=''
                                       select
                                       label='Customer Category'
                                       {...register('category', {
                                          required: {
                                             value: true,
                                             message:
                                                'Category of Customer is required',
                                          },
                                       })}
                                       error={errors.category}
                                       helperText={
                                          errors.category &&
                                          errors.category.message
                                       }
                                       sx={{
                                          maxWidth: '400px',
                                       }}
                                    >
                                       {categoryData.map((category) => (
                                          <MenuItem
                                             value={category}
                                             key={category}
                                          >
                                             {category}
                                          </MenuItem>
                                       ))}
                                    </CalculatorTextField>
                                 </Box>
                                 <Box
                                    sx={{
                                       display: 'flex',
                                       alignItems: [
                                          'flex-start',
                                          'flex-start',
                                          'center',
                                       ],
                                       flexDirection: [
                                          'column',
                                          'column',
                                          'row',
                                       ],
                                       justifyContent: 'space-between',
                                       rowGap: '0.2rem',
                                       width: '100%',
                                    }}
                                 >
                                    <Typography
                                       sx={{
                                          textAlign: 'left',
                                          fontWeight: '700',
                                          fontSize: '1.2rem',
                                          color: '#000000',
                                       }}
                                    >
                                       Average Electricity Cost
                                    </Typography>
                                    <Box
                                       sx={{
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'space-between',
                                          width: '100%',
                                          maxWidth: '400px',
                                       }}
                                    >
                                       <CalculatorTextField
                                          size='small'
                                          type='number'
                                          label='Enter in Rs'
                                          defaultValue={sliderValue}
                                          {...register(
                                             'average_electricity_cost',
                                             {
                                                required: {
                                                   value: true,
                                                   message:
                                                      'Average Electricity Cost is required',
                                                },
                                                min: {
                                                   value: 1,
                                                   message:
                                                      'Average Electricity Cost cannot be 0',
                                                },
                                             }
                                          )}
                                          error={
                                             errors.average_electricity_cost
                                          }
                                          helperText={
                                             errors.average_electricity_cost &&
                                             errors.average_electricity_cost
                                                .message
                                          }
                                          InputProps={{
                                             endAdornment: (
                                                <InputAdornment position='Rs. /kwh'>
                                                   Rs
                                                </InputAdornment>
                                             ),
                                          }}
                                          sx={{
                                             width: '100%',
                                             maxWidth: '400px',
                                             mr: 2,
                                          }}
                                       />
                                       <Slider
                                          aria-label='Temperature'
                                          defaultValue={0}
                                          getAriaValueText={valuetext}
                                          // valueLabelDisplay='auto'
                                          step={5}
                                          marks
                                          min={0}
                                          max={1000}
                                          value={sliderValue}
                                          onChange={handleSliderChange}
                                       />
                                    </Box>
                                 </Box>
                                 <PrimaryButton
                                    size='large'
                                    sx={{
                                       fontSize: '1.2rem',
                                       '@media (max-width: 600px)': {
                                          fontSize: '0.8rem',
                                          width: '100%'
                                       },
                                       borderRadius: '100px',
                                       background: 'black',
                                       color: 'primary.main',
                                       display: 'flex',
                                       alignItems: 'center',
                                       mt: '1rem',
                                       pr: '0.5rem',
                                       '&:hover': {
                                          backgroundColor: 'black',
                                          transform: 'scale(1.05)',
                                          transition: 'transform 0.1s ease',
                                       },
                                    }}

                                    type='submit'
                                 >
                                    Calculate Now
                                    <ArrowForwardIcon
                                       sx={{
                                          fontSize: '3rem',
                                          ml: '1rem',
                                          color: 'black',
                                          p: '0.5rem',
                                          borderRadius: '100px',
                                          backgroundColor: 'primary.main',
                                       }}
                                    />
                                 </PrimaryButton>
                              </Box>
                           ),
                           emi: <EMICalculator />,
                        }[currentTab]
                     }
                  </InnerBoxWrapper>
               </BoxWrapper>
            </Wrapper>
         </Container>
      </>
   );
};

export default SolarCalculator;
