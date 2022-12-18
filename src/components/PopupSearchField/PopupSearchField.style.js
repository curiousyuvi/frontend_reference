import { Box, Chip, styled } from '@mui/material';


export const SearchBox = styled(Box)(({ theme }) => ({
   borderRadius: '30px',
   border: '3px solid #ffd05b',
   position: 'relative',
   display: 'flex',
   alignItems: 'stretch',
   flex: '0 0 35%',
   '&:hover': {
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.10)',
   },
   '& input': {
      border: '0',
      borderRadius: '30px',
      background: 'transparent',
      outline: 'none',
      fontSize: '1.2rem',
      color: '#000',
      fontWeight: 'bold',
      padding: '3px 0.8rem',
      fontFamily: 'inherit',
      width: '90%',
      '@media (max-width: 1200px)': {
         fontSize: '0.9rem',
      },
      '&::placeholder': {
         fontFamily: 'inherit',
         fontWeight: '400',
         fontSize: '1.2rem',
         '@media (max-width: 1200px)': {
            fontSize: '0.9rem',
         },
      },
   },
   '& svg': {
      position: 'absolute',
      right: '0.5rem',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#ffd05b',
   },
}));

export const SearchIconBox = styled(Box)(({ theme }) => ({
   background: '#ffd05b',
   width: '20%',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   cursor: 'pointer',
   '&:hover': {},
   '& svg': {
      fontSize: '1.5rem',
      color: '#4d4d4d',
   },
}));

export const SearchForm = styled(Box)(({ theme }) => ({
   borderRadius: '30px',
   border: '3px solid #ffd05b',
   position: 'relative',
   overflow: 'hidden',
   background: '#ffffff',
   '& input': {
      width: '100%',
      padding: '0.5rem 1rem',
      border: 'none',
      outline: 'none',
      fontSize: '1.2rem',
      fontWeight: '500',
      color: '#000',
      background: 'transparent',
      borderRadius: '20px',
      cursor: 'pointer',
      '&:focus': {
         cursor: 'text',
      },
      '&::placeholder': {
         color: '#4d4d4d',
      },
   },
   '& svg': {
      position: 'absolute',
      right: '0.5rem',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#ffd05b',
   },
}));

export const SearchDataWrapper = styled(Box)(({ theme }) => ({
   display: 'grid',
   gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
   gap: '0.5rem',
   justifyItems: 'center',
   maxHeight: '400px',
   overflowY: 'auto',
}));

export const SearchFieldWrapper = styled(Box)(({ theme }) => ({
   borderRadius: '20px',
   border: '2px solid #ffd05b',
   position: 'relative',
   overflow: 'hidden',
   cursor: 'pointer',
   flex: '0 0 25%',
   '& input': {
      width: '100%',
      padding: '0.5rem 1rem',
      border: 'none',
      outline: 'none',
      fontSize: '0.8rem',
      fontWeight: '500',
      color: '#000000',
      background: 'transparent',
      borderRadius: '20px',
      cursor: 'pointer',
   },
   '& svg': {
      position: 'absolute',
      right: '0.5rem',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#ffd05b',
   },
}));

export const ResultItem = styled(Box)(({ theme }) => ({
   display: 'flex',
   cursor: 'pointer',
   alignItems: 'center',
   padding: '4px',
   borderRadius: '5px',
   borderBottom: '1px solid #f7f7f7',
   '&:hover': {
      background: '#f7f7f7',
   },
   '& .imageBox': {
      borderRadius: '5px',
      height: '50px',
      width: '50px',
      marginRight: '1.5rem',
      '& img': {
         height: '100%',
         width: '100%',
         objectFit: 'cover',
      },
   },
}));

export const ResultBox = styled(Box)(({ theme }) => ({
   position: 'absolute',
   maxHeight: '400px',
   width: '100%',
   background: '#ffffff',
   borderRadius: ' 0.5rem',
   boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.1)',
   border: '1px solid #e6e6e6',
   top: '110%',
   left: 0,
   zIndex: 150000,
   padding: '1rem',
   overflowY: 'auto',
}));

export const ProductWrapper = styled(Box)(({ theme }) => ({
   width: '160px',
   borderRadius: '0.5rem',
   overflow: 'hidden',
   cursor: 'pointer',
   height: '140px',
   background: '#ffffff',
   boxShadow: '0px 4px 24px 0  rgba(0, 69, 184, 0.15)',
   border: '1px solid #e6e6e6',
   '&:hover': {
      // scale 1.05
      transform: 'scale(1.05)',
      // add transition
      transition: 'all 0.3s ease',
   },
}));

export const SearchChip = styled(Chip)(({ theme }) => ({
   color: theme.palette.primary.dark,
   fontSize: '14px',
   background: '#ffffff',
   cursor: 'pointer',
   '&:hover': {
      background: theme.palette.primary.main,
      color: theme.palette.primary.dark,
      transition: 'all 0.2s',
   },
}));
