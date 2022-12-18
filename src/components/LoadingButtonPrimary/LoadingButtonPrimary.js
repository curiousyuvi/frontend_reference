import React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { styled } from '@mui/material';

const StyedLoadingButtonPrimary = styled(LoadingButton)(({ theme }) => ({
   backgroundColor: theme.palette.primary.main,

   color: theme.palette.primary.dark,
   boxShadow: '0px 4px 8px 0px rgba(0,0,0,0.1)',
   cursor: 'pointer !important',
   padding: '8px 18px',
   border: 'none',
   fontWeight: 600,
   '&:hover': {
      backgroundColor: theme.palette.primary.main,
      boxShadow: '0px 0px 5px 1px rgba(0,0,0,0.1)',
      border: 'none',
   },
   boxSizing: 'border-box',
   textTransform: 'capitalize',
}));

const LoadingButtonPrimary = ({ children, loading, sx, endIcon, ...rest }) => {
   return (
      <StyedLoadingButtonPrimary
         size='small'
         sx={{
            ...sx,
         }}
         {...rest}
         endIcon={endIcon}
         loading={loading}
         loadingPosition='end'
         variant='contained'
      >
         {children}
      </StyedLoadingButtonPrimary>
   );
};

export default LoadingButtonPrimary;
