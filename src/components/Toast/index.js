import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
   return (
      <ToastContainer
         style={{
            fontSize: '1.2rem',
         }}
         className='solruf_toast'
         position='bottom-right'
         autoClose={3100}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover
      />
   );
};

export default Toast;
