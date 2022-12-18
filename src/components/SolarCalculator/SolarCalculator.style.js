import { Box, styled } from '@mui/material';
import SolrufTextField from '../TextField/TextField';

export const Wrapper = styled(Box)(({ theme }) => ({
   width: '100%',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   padding: '1rem',
   margin: '6rem 0',
}));

export const BoxWrapper = styled(Box)(({ theme }) => ({
   width: '100%',
   borderRadius: '18px',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   rowGap: '1rem',
   padding: '2rem',
   position: 'relative',
   boxShadow: theme.shadows[25],
   maxWidth: '1400px',
}));

export const InnerBoxWrapper = styled(Box)(({ theme }) => ({
   width: '100%',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   rowGap: '1rem',
   maxWidth: '800px',
}));

export const TabBtnsWrapper = styled(Box)(({ theme }) => ({
   width: '100%',
   display: 'flex',
   alignItems: 'stretch',
   gap: '0.5rem',
}));

export const SmallTabBtnsWrapper = styled(Box)(({ theme }) => ({
   width: '100%',
   display: 'flex',
   alignItems: 'center',
   gap: '1rem',
   '@media (max-width: 600px)': {
      display: 'none',
   },
}));

export const TabBtn = styled(Box)(({ theme }) => ({
   width: '100%',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   padding: '1rem',
   borderRadius: '10px',
   cursor: 'pointer',
   justifyContent: 'center',
}));

export const SmallTabBtn = styled(Box)(({ theme }) => ({
   width: '100%',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   padding: '0.5rem',
   borderRadius: '100px',
   cursor: 'pointer',
   border: '2px solid black',
}));

export const CalculatorTextField = styled(SolrufTextField)(({ theme }) => ({
   backgroundColor: '#E7E7E7',
   borderRadius: '4px',
   '& label.Mui-focused': {
      color: theme.palette.primary.dark,
      fontWeight: 'bold',
   },
   '& .MuiOutlinedInput-root': {
      '& fieldset': {
         border: 0,
      },
      '&:hover fieldset': {
         borderColor: theme.palette.primary.main,
      },
      '&.Mui-focused fieldset': {
         borderColor: theme.palette.primary.main,
      },
   },
}));
