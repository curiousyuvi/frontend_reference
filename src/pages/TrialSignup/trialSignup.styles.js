import { Box, FormControlLabel, styled } from '@mui/material';
import LightTextField from '../../components/Custom/LightTextField/LightTextField';

export const WhyUsBoxWrapper = styled(Box)(({ theme }) => ({
   background: theme.palette.primary.dark,
   padding: '3rem 0',
}));

export const FeatureBoxWrapper = styled(Box)(({ theme }) => ({
   display: 'grid',
   gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
   width: '100%',
   gap: theme.spacing(2),
}));

export const FeatureBox = styled(Box)(({ theme }) => ({
   background: '#ffffff',
   padding: '1rem',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   gap: theme.spacing(1),
   borderRadius: theme.spacing(1),
   cursor: 'pointer',
   '& img': {
      width: '70px',
   },
   '& p': {
      fontWeight: 600,
      color: theme.palette.primary.dark,
      textAlign: 'center',
   },
   '&:hover': {
      transform: 'scale(1.05)',
      transition: 'all 0.2s ease',
   },
}));

export const WhiteTextField = styled(LightTextField)(({ theme }) => ({
   background: '#ffffff',
   borderRadius: '4px',

   '& .MuiOutlinedInput-root': {
      '& fieldset': {
         border: 'none',
      },
      '&:hover fieldset': {
         borderColor: '#ffd05b',
      },
      '&.Mui-focused fieldset': {
         borderColor: '#ffd05b',
      },
   },
}));

export const TrialFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
   width: '50%',
   '& .MuiTypography-root': {
      color: '#ffffff',
   },
   '& .MuiCheckbox-root': {
      color: '#ffffff',
   },
}));
