import {
   Box,
   InputAdornment,
   Paper,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PrimaryButton from '../Custom/PrimaryButton/PrimaryButton';
import SolrufTextField from '../TextField/TextField';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CachedIcon from '@mui/icons-material/Cached';
import {
   BankButton,
   BanksWrapper,
   ModalWrapper,
   Wrapper,
} from './EMICalculator.style';
import SolrufModal2 from '../Custom/SolrufModal/SolrufModal2';
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
import { CalculatorTextField } from '../SolarCalculator/SolarCalculator.style';

const EMICalculator = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const {
      register: reRegister,
      handleSubmit: handleReSubmit,
      formState: { errors: reErrors },
   } = useForm();

   // const [emi, setEmi] = useState(null);
   const [loanAmount, setLoanAmount] = useState(0);
   const [emiModalOpen, setEmiModalOpen] = useState(false);
   const [bank, setBank] = useState('axis');

   const calculateEMI = ({ amount, months, rate }) => {
      const r = rate / (100 * 12);
      const factor = Math.pow(1 + r, months);
      const emiValue = (amount * r * months * factor) / ((factor - 1) * months);
      return emiValue;
   };

   const handleRegister = (inputs) => {
      setLoanAmount(inputs.amount);
      setEmiModalOpen(true);
   };

   const handleReRegister = (inputs) => {
      setLoanAmount(inputs.amount);
   };

   const banksData = {
      axis: [
         { months: 3, rate: 13 },
         { months: 6, rate: 13 },
         { months: 9, rate: 13 },
         { months: 12, rate: 13 },
      ],
      icici: [
         { months: 3, rate: 13 },
         { months: 6, rate: 13 },
         { months: 9, rate: 13 },
         { months: 12, rate: 13 },
      ],
      hsbc: [
         { months: 3, rate: 12.5 },
         { months: 6, rate: 12.5 },
         { months: 9, rate: 13.5 },
         { months: 12, rate: 13.5 },
         { months: 18, rate: 13.5 },
      ],
      kotak: [
         { months: 3, rate: 12 },
         { months: 6, rate: 12 },
         { months: 9, rate: 14 },
         { months: 12, rate: 14 },
         { months: 18, rate: 15 },
         { months: 24, rate: 15 },
      ],
      cbi: [
         { months: 3, rate: 13 },
         { months: 6, rate: 13 },
         { months: 9, rate: 14 },
         { months: 12, rate: 14 },
      ],
      corp: [
         { months: 3, rate: 12 },
         { months: 6, rate: 12 },
         { months: 9, rate: 13 },
         { months: 12, rate: 14 },
      ],
      indusind: [
         { months: 3, rate: 13 },
         { months: 6, rate: 13 },
         { months: 9, rate: 13 },
         { months: 12, rate: 13 },
         { months: 18, rate: 15 },
         { months: 24, rate: 15 },
      ],
      rbl: [
         { months: 3, rate: 13 },
         { months: 6, rate: 13 },
         { months: 9, rate: 13 },
         { months: 12, rate: 13 },
         { months: 18, rate: 3 },
         { months: 24, rate: 13 },
      ],
      sc: [
         { months: 3, rate: 13 },
         { months: 6, rate: 13 },
         { months: 9, rate: 14 },
         { months: 12, rate: 14 },
         { months: 18, rate: 15 },
         { months: 24, rate: 15 },
      ],
      yes: [
         { months: 3, rate: 12 },
         { months: 6, rate: 12 },
         { months: 9, rate: 13 },
         { months: 12, rate: 13 },
         { months: 18, rate: 14 },
         { months: 24, rate: 15 },
      ],
      sbi: [
         { months: 3, rate: 14 },
         { months: 6, rate: 14 },
         { months: 9, rate: 14 },
         { months: 12, rate: 14 },
      ],
      instacred: [
         { months: 3, rate: 18 },
         { months: 6, rate: 18 },
         { months: 9, rate: 18 },
         { months: 12, rate: 18 },
         { months: 18, rate: 18 },
         { months: 24, rate: 18 },
         { months: 48, rate: 18 },
      ],
   };

   return (
      <>
         <SolrufModal2
            open={emiModalOpen}
            onClose={() => {
               setEmiModalOpen(false);
            }}
            mobileTitle='EMI Calculator'
            title='EMI Calculator'
         >
            <ModalWrapper>
               <Box
                  component='form'
                  onSubmit={handleReSubmit(handleReRegister)}
                  sx={{
                     display: 'flex',
                     columnGap: '1rem',
                     alignItems: 'center',
                     justifyContent: 'center',
                     width: '100%',
                  }}
               >
                  <SolrufTextField
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
                     {...reRegister('amount', {
                        required: {
                           value: true,
                           message: 'Cost is required.',
                        },
                        min: {
                           value: 0,
                           message: 'Cost cannot be 0.',
                        },
                     })}
                     error={reErrors.amount}
                     helperText={reErrors.amount && reErrors.amount.message}
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
                           <TableCell sx={{ fontWeight: '700' }} align='center'>
                              Duration
                           </TableCell>
                           <TableCell sx={{ fontWeight: '700' }} align='center'>
                              Interest&nbsp;(%)
                           </TableCell>
                           <TableCell sx={{ fontWeight: '700' }} align='center'>
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
                              <TableCell align='center'>{ele.months}</TableCell>
                              <TableCell align='center'>{ele.rate}</TableCell>
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
            </ModalWrapper>
         </SolrufModal2>
         <Wrapper component='form' onSubmit={handleSubmit(handleRegister)}>
            <Box
               sx={{
                  display: 'flex',
                  rowGap: '1rem',
                  alignItems: 'center',
                  justifyContent: 'space-between',
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
                  Cost of solar plant
               </Typography>
               <CalculatorTextField
                  size='small'
                  label='Cost of Solar Plant'
                  type='number'
                  sx={{
                      width: '100%',
                      maxWidth: '400px',
                     '& .MuiOutlinedInput-root': {
                        borderRadius: '20px',
                     },
                  }}
                  {...register('amount', {
                     required: {
                        value: true,
                        message: 'Cost is required.',
                     },
                     min: {
                        value: 0,
                        message: 'Cost cannot be 0.',
                     },
                  })}
                  error={errors.amount}
                  helperText={errors.amount && errors.amount.message}
                  InputProps={{
                     endAdornment: (
                        <InputAdornment position='end'>Rs</InputAdornment>
                     ),
                  }}
                 
               />
            </Box>

            <PrimaryButton
               size='large'
               sx={{
                  fontSize: '1.2rem',
                  mt: '2rem',
                  borderRadius: '100px',
                  background: 'black',
                  color: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
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
         </Wrapper>
      </>
   );
};

export default EMICalculator;
