import { Box, MenuItem, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AutoCompleteSelect from '../../../components/AutoCompleteSelect/AutoCompleteSelect';
import '../AddAttribute/AddAttribute.css';
import { getBrands, getCategories, getSubCategories } from '../helper';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { axiAuth } from '../../../utils/axiosInstance';
import TextField from '../../../components/TextField/TextField';
import LoadingButtonPrimary from '../../../components/LoadingButtonPrimary/LoadingButtonPrimary';
// import SelectCheckBox from '../../../components/SelectCheckBox/SelectCheckBox';

const AddBrand = () => {
   const [categories, setCategories] = useState([]);
   const [subCategories, setSubCategories] = useState([]);
   const [selectedCategory, setSelectedCategory] = useState(null);
   const [selectedSubCategory, setSelectedSubCategory] = useState(null);
   const [brands, setBrands] = useState([]);
   const [loading, setLoading] = useState(false);

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm();

   const onSubmit = async (formData) => {
      if (!selectedCategory || !selectedSubCategory) {
         toast.error('Please select category and sub category');
         return;
      }

      const data = {
         name: formData?.brand,
         category_id: selectedCategory?.category_id,
      };

      try {
         setLoading(true);
         const { status } = await axiAuth.post('api/admin/brands', data);
         if (status === 200) {
            setLoading(false);
            toast.success('Brand added successfully');
            reset();
         }
      } catch (error) {
         setLoading(false);
         toast.error(error?.response?.data?.message);
      }
   };

   useEffect(() => {
      getCategories().then((response) => {
         setCategories(response);
      });
   }, []);

   useEffect(() => {
      if (selectedCategory) {
         getSubCategories(selectedCategory?.category_id).then((response) => {
            setSubCategories(response);
         });
         getBrands(selectedCategory?.category_id).then((response) => {
            setBrands(response);
         });
      }
   }, [selectedCategory]);

   console.log(brands);

   return (
      <div
         className='py-5'
         style={{
            minHeight: '55vh',
         }}
      >
         <form onSubmit={handleSubmit(onSubmit)}>
            <Box
               sx={{
                  display: 'flex',
                  my: 2,
                  flexDirection: ['column', 'column', 'row'],
               }}
            >
               <AutoCompleteSelect
                  sx={{
                     marginRight: '1rem',
                     marginBottom: ['1rem', '1rem', 0],
                  }}
                  options={categories}
                  value={selectedCategory}
                  setValue={setSelectedCategory}
                  label='Select Category'
                  formValidation={{ ...register('category') }}
                  errorText={errors.category?.message}
                  register={register}
                  error={errors}
               />

               <AutoCompleteSelect
                  options={subCategories}
                  value={selectedSubCategory}
                  setValue={setSelectedSubCategory}
                  label='Select Sub Category'
                  formValidation={{ ...register('sub_category') }}
                  errorText={errors.sub_category?.message}
                  register={register}
                  error={errors}
               />
            </Box>

            <Box
               sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fexDirection: ['column', 'column', 'row'],
               }}
            >
               <Box
                  sx={{
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'center',
                     justifyContent: 'center',
                     padding: '20px',
                     rowGap: '20px',
                     width: '100%',
                     maxWidth: '400px',
                     margin: '0 auto',
                  }}
               >
                  <Typography variant='h4'>Add Brand</Typography>
                  <TextField
                     placeholder='ex: Trina, Waaree'
                     size='small'
                     {...register('brand', {
                        required: {
                           value: true,
                           message: 'Please input a brand name',
                        },
                     })}
                     error={errors?.brand?.message}
                     helperText={errors?.brand?.message}
                  />
                  <LoadingButtonPrimary
                     type='submit'
                     fullWidth
                     loading={loading}
                  >
                     {loading ? 'Adding Brand' : 'Add Brand'}
                  </LoadingButtonPrimary>
               </Box>
               <Box
                  sx={{
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'center',
                     justifyContent: 'center',
                     padding: '20px',
                     rowGap: '20px',
                     width: '100%',
                     maxWidth: '400px',
                     margin: '0 auto',
                  }}
               >
                  <Typography variant='h4'>Existing Brand List</Typography>
                  <TextField
                     placeholder='ex: Trina, Waaree'
                     select
                     size='small'
                  >
                     {brands.length === 0 && (
                        <MenuItem selected={true} value='Existing Brands'>
                           Select Categories To See Existing Brands
                        </MenuItem>
                     )}
                     {brands?.map((brand) => (
                        <MenuItem value={brand.name} key={brand.id}>
                           {brand.name}
                        </MenuItem>
                     ))}
                  </TextField>
               </Box>
            </Box>
         </form>
      </div>
   );
};

export default AddBrand;
