import {
   Container,
   Grid,
   Typography,
   styled,
   MenuItem,
   Checkbox,
   Button,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Tab from '@mui/material/Tab';
import DatePicker from '../../components/Custom/DatePicker/DatePicker';
import CustomTextArea from '../../components/CustomTextArea/CustomTextArea';
import { useDispatch } from 'react-redux';

import QuantityController from '../../components/QuantityController/QuantityController';
import { useForm } from 'react-hook-form';
import { useDebounce } from 'use-debounce';
import SolrufTextField from '../../components/TextField/TextField';
import CompanyDetails from './CompanyDetails';
import Success from './Success';
import SliderWIthThumbnail from '../../components/SliderWIthThumbnail/SliderWIthThumbnail';
import { useParams } from 'react-router';
import { axiAuth } from '../../utils/axiosInstance';

import {
   DocumentBox,
   EnquiryForm,
   Flex,
   TabPanelDoc,
   ProductFeatures,
   FeatureItemBox,
   FeatureBox,
   AccessTextMobile,
} from './enquiryPage.style';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import { openLoginModal } from '../../redux/slices/loginModalSlice';
// import EnquiryBottomSheetPopUp from './EnquiryBottomSheetPopUP';
import { DownloadChip } from '../../components/CustomerDetailsDrawer/customerDetailsDrawer.style';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import PrimaryButton from '../../components/Custom/PrimaryButton/PrimaryButton';
import EnquiryProductDetails from './EnquiryProductDetails';
import InactiveProductOverlay from './InactiveProductOverlay';
import noImage from '../../assets/no-image.jpeg';
import PageTitle from '../../components/PageTitle/PageTitle';

const SolrufTextFieldGray = styled(SolrufTextField)(({ theme }) => ({
   '& .MuiOutlinedInput-root': {
      background: '#f3f3f3',
   },
}));

const noImages = [noImage, noImage, noImage, noImage, noImage, noImage];

const EnquiryPage = () => {
   const [documentTab, setDocumentTab] = useState(0);
   const handleDocumentTabChange = (event, newValue) => {
      setDocumentTab(newValue);
      console.log(newValue);
   };

   const [companyDetailsError, setCompanyDetailsError] = useState(false);

   const businessInfo = useSelector(
      (state) => state.profile?.profileData?.business
   );
   const user = useSelector((state) => state.user.user);

   const dispatch = useDispatch();

   const [enquirySubmitting, setEnquirySubmitting] = useState(false);

   const [quantity, setQuantity] = useState(0);
   const [quantityError, setQuantityError] = useState('');
   const [date, setDate] = useState(null);

   const {
      register,
      handleSubmit,
      watch,
      setValue,
      formState: { errors },
   } = useForm({
      defaultValues: {
         pincode: '',
      },
   });

   const { productSlug } = useParams();

   const [productDetails, setProductDetails] = useState({});
   const [productLoading, setProductLoading] = useState(true);

   useEffect(() => {
      setProductLoading(true);
      axiAuth(`api/products/get/${productSlug}`)
         .then((res) => {
            setProductDetails(res.data.product);
            setProductLoading(false);
         })
         .catch((err) => {
            console.log(err);
            toast.error(err.response.data.message);
            setProductLoading(false);
         });
   }, [productSlug]);
   const [viewAll, setViewAll] = useState(false);

   const [watchPinCode] = watch(['pincode']);
   const [debouncedPinCode] = useDebounce(watchPinCode, 500);

   const [indiaState, setIndiaState] = useState('state');

   const statesOfIndia = useSelector((state) => state.utils.statesOfIndia);

   useEffect(() => {
      if (debouncedPinCode.length !== 6) return; // if debouncedPinCode is not 6 characters long then return
      axiAuth
         .get(`api/pin-code/search?pin_code=${debouncedPinCode}`)
         .then(({ data }) => {
            console.log(data);
            setIndiaState(data.pin_code.state);
            setValue('city', data.pin_code.district);
         })
         .catch((err) => {
            console.log(err);
         });
   }, [debouncedPinCode, setValue]);

   const handleStateChange = (e) => {
      console.log(e.target.value);
      setIndiaState(e.target.value);
   };

   const [accept_other_brands, setAccept_other_brands] = useState(false);
   const [share_company_information, setShare_company_information] =
      useState(false);

   const handleAcceptChange = (event) => {
      setAccept_other_brands(event.target.checked);
   };


   const scrollPosition = useScrollPosition();

   const submitHandler = (data) => {
      // if (isMobileView) setViewEnquiryBottomSheet(window.innerWidth <= 900);
      if (page === 0) {
         setQuantityError('');
         if (quantity < 1) {
            setQuantityError('Quantity cannot be less than 1');
            return;
         }

         if (!date) {
            return;
         }
         if (!user) {
            toast.warn('Please login to continue');
            dispatch(openLoginModal());
            return;
         }
         setPage(1);
         return;
      }

      const d = new Date(date);
      const mySqlFormatDate = d.toISOString().split('T')[0];

      const formData = {
         product_id: productDetails?.product_id,
         quantity,

         delivery_date: mySqlFormatDate,
         accept_other_brands,
         share_company_information,
         user_address: {
            pin_code: data.pincode,
            state: indiaState,
            city: data.city,
            address: data.address,
         },
         product: {
            // name: productDetails?.product_name,
            other: {
               attributes: productDetails?.attributes.filter(
                  (attribute) =>
                     attribute?.attribute_values[
                        attribute?.attribute_values?.length - 1
                     ]?.views?.procurement_card?.visibility
               ),
               defaultImage: productDetails?.default_image,
               productSlug: productDetails?.product_slug,
               productId: productDetails?.product_id,
               productName: productDetails?.product_name,
               hsn_sac_code: productDetails?.hsn_sac_code,
               tax_igst: productDetails?.tax_igst,
               tax_cgst: productDetails?.tax_cgst,
               tax_sgst: productDetails?.tax_sgst,
               main_category: productDetails?.main_category,
               sub_category: productDetails?.sub_category,
               product_brand_name: productDetails?.product_brand_name,
            },
         },
      };

      if (!companyDetailsError) {
         formData.company = {
            name: businessInfo?.company_name || '',
            gstin: businessInfo?.gstin || '',
            city: businessInfo?.city || '',
            pin_code: businessInfo?.pincode || '',
            state: businessInfo?.state || '',
            // others: {
            //    ...businessInfo,
            // },
         };
      }

      setEnquirySubmitting(true);

      console.log(formData);
      // return;
      axiAuth
         .post('api/enquiries', formData)
         .then((res) => {
            console.log(res);
            toast.success('Enquiry sent successfully');
            setEnquirySubmitting(false);
            setPage(2);
         })
         .catch((err) => {
            console.log(err);
            setEnquirySubmitting(false);
            toast.error('Enquiry failed, try again!');
         });
   };

   const [page, setPage] = useState(0);

 

   return (
      <Box sx={{ mb: 4, background: '#f3f3f3', pb: 3 }}>
         <PageTitle title={productSlug} />
         <Container maxWidth='xl'>
            <Box>
               <>
                  <Grid
                     container
                     spacing={5}
                     sx={{
                        mt: {
                           xs: '0',
                           sm: '0',
                        },
                     }}
                  >
                     <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Box sx={{ mb: 3, maxWidth: 500, mx: 'auto' }}>
                           <SliderWIthThumbnail
                              images={
                                 productDetails?.images?.length > 0
                                    ? productDetails?.images.map(
                                         (img) => img.image_url
                                      )
                                    : noImages
                              }
                           />
                        </Box>
                     </Grid>

                     <Grid item xs={12} sm={12} md={6} lg={6}>
                        <EnquiryProductDetails
                           productDetails={productDetails}
                        />
                     </Grid>
                  </Grid>

                  {/* ====== enquiry ====== box ====== */}
                  <Box sx={{ mt: 3 }}>
                     {enquirySubmitting && <Loader />}

                     {!enquirySubmitting && (
                        <EnquiryForm
                           id='enquiry-form'
                           component='form'
                           onSubmit={handleSubmit(submitHandler)}
                           sx={{
                              position: 'relative',
                           }}
                        >
                           {!productDetails?.active && !productLoading && (
                              <InactiveProductOverlay />
                           )}

                           {page === 0 && (
                              <>
                                 <Typography
                                    variant='h5'
                                    sx={{
                                       textAlign: {
                                          xs: 'center',
                                          sm: 'left',
                                       },
                                       mt: { xs: '1rem', sm: '0' },
                                    }}
                                 >
                                    Create an Enquiry
                                 </Typography>

                                 <AccessTextMobile
                                    sx={{
                                       display: { sm: 'none' },
                                       width: '100%',
                                       mt: 3,
                                    }}
                                 >
                                    <Typography
                                       variant='h6'
                                       sx={{
                                          fontSize: {
                                             xs: '0.8rem !important',
                                          },
                                       }}
                                    >
                                       Get Access to top 100 verified source
                                       suppliers for your enquiry
                                    </Typography>
                                 </AccessTextMobile>
                                 <Flex
                                    sx={{
                                       mt: 2,
                                       mb: 2.5,
                                       flexDirection: {
                                          sm: 'row',
                                          xs: 'column',
                                       },
                                    }}
                                 >
                                    <Flex
                                       sx={{
                                          mr: { sm: 2 },
                                          justifyContent: {
                                             sm: 'center',
                                             xs: 'space-between',
                                          },
                                          width: { xs: '100%', sm: 'auto' },
                                       }}
                                    >
                                       <Typography
                                          variant='h6'
                                          sx={{
                                             mr: { sm: 4 },
                                             color: '#4D4D4D',
                                          }}
                                       >
                                          Quantity
                                       </Typography>

                                       <QuantityController
                                          quantity={quantity}
                                          setQuantity={setQuantity}
                                          quantityError={quantityError}
                                          setQuantityError={setQuantityError}
                                       />
                                    </Flex>
                                    <Box
                                       sx={{
                                          width: {
                                             xs: '100%',
                                             sm: '100%',
                                             md: 'auto',
                                          },
                                          display: 'flex',
                                          justifyContent: 'end',
                                       }}
                                    >
                                       <DatePicker
                                          date={date}
                                          setDate={setDate}
                                          sx={{
                                             mt: !date ? 2 : 0,
                                             width: {
                                                xs: '100%',
                                                sm: '100%',
                                                md: '100%',
                                             },
                                          }}
                                       />
                                    </Box>
                                 </Flex>
                                 <Flex
                                    flexDirection={{
                                       md: 'row',
                                       xs: 'column',
                                    }}
                                 >
                                    <SolrufTextFieldGray
                                       sx={{ mr: { md: 3, xs: 0 } }}
                                       InputLabelProps={{ shrink: true }}
                                       size='small'
                                       label='Pin Code'
                                       type='number'
                                       {...register('pincode', {
                                          required: {
                                             value: true,
                                             message: 'Pin code is Required',
                                          },
                                          minLength: {
                                             value: 6,
                                             message:
                                                'Pin code must be at least 6 characters',
                                          },
                                          maxLength: {
                                             value: 6,
                                             message:
                                                'Pin code must be at most 6 characters',
                                          },
                                       })}
                                       error={errors.pincode}
                                       helperText={
                                          errors.pincode
                                             ? errors.pincode.message
                                             : ' '
                                       }
                                    />
                                    <SolrufTextFieldGray
                                       select
                                       size='small'
                                       label='State'
                                       value={indiaState}
                                       onChange={handleStateChange}
                                       helperText={
                                          errors.state
                                             ? errors.state.message
                                             : ' '
                                       }
                                    >
                                       {statesOfIndia.map((state, i) => (
                                          <MenuItem value={state} key={state + i}>
                                             {state}
                                          </MenuItem>
                                       ))}
                                    </SolrufTextFieldGray>
                                 </Flex>
                                 <Flex sx={{ mt: 1 }}>
                                    <SolrufTextFieldGray
                                       // focused={!errors.city}
                                       InputLabelProps={{ shrink: true }}
                                       size='small'
                                       label='City / District'
                                       {...register('city', {
                                          required: {
                                             value: true,
                                             message: 'City is Required',
                                          },
                                       })}
                                       error={errors.city}
                                       helperText={
                                          errors.city
                                             ? errors.city.message
                                             : ' '
                                       }
                                    />
                                 </Flex>
                                 <Typography
                                    sx={{
                                       ml: 1.5,
                                       fontSize: '13px',
                                       mb: '10px',
                                    }}
                                    gutterBottom
                                 >
                                    Address
                                 </Typography>
                                 <Flex>
                                    <CustomTextArea
                                       placeholder='Type your address here'
                                       errorMessage={errors?.address?.message}
                                       rows={3}
                                       style={{
                                          marginTop: '-10px',
                                          background: '#f3f3f3',
                                       }}
                                       {...register('address', {
                                          required: {
                                             value: true,
                                             message: 'Address is Required',
                                          },
                                       })}
                                    />
                                 </Flex>
                                 <Flex
                                    sx={{
                                       justifyContent: 'flex-start',
                                       mt: 2,
                                       mb: 3,
                                    }}
                                 >
                                    <Checkbox
                                       checked={accept_other_brands}
                                       onChange={handleAcceptChange}
                                       inputProps={{
                                          'aria-label': 'controlled',
                                       }}
                                    />
                                    <Typography sx={{ color: '#000000' }}>
                                       Accept Products from other Brand?
                                    </Typography>
                                 </Flex>
                                 <Flex
                                    sx={{
                                       justifyContent: 'flex-start',

                                       width: `auto`,
                                       zIndex: 100,
                                    }}
                                 >
                                    <PrimaryButton
                                       type='submit'
                                       sx={{
                                          width: {
                                             xs: '100%',
                                             sm: 'auto',
                                          },
                                          px: 3.5,
                                          fontWeight: 'bold',
                                       }}
                                    >
                                       Submit Details
                                    </PrimaryButton>
                                 </Flex>
                              </>
                           )}
                           {/*if this is not mobile view then we show change in main page */}
                           {page === 1 && (
                              <CompanyDetails
                                 setPage={setPage}
                                 page={page}
                                 // isMobileView={isMobileView}
                                 setShareCompanyInfo={
                                    setShare_company_information
                                 }
                                 shareCompanyInfo={share_company_information}
                                 handleSubmit={handleSubmit}
                                 setCompanyDetailsError={setCompanyDetailsError}
                                 companyDetailsError={companyDetailsError}
                              />
                           )}

                           {page === 2 && <Success />}
                        </EnquiryForm>
                     )}
                  </Box>

                  {/*  =========  document section ========= */}
                  <Box
                     sx={{
                        background: '#fff',
                        p: 2,
                        borderRadius: '8px',
                        boxShadow: '0px 4px 24px  0 rgba(0, 69, 184, 0.15)',
                        mt: 6,
                     }}
                  >
                     <Typography
                        sx={{
                           fontSize: '1.2rem',
                           fontWeight: 'bold',
                           color: '#000',
                           mb: 2,
                        }}
                     >
                        Other Details
                     </Typography>

                     <Grid container>
                        <Grid item xs={12} md={6} lg={3}>
                           <Box>
                              <TabPanelDoc
                                 value={documentTab}
                                 onChange={handleDocumentTabChange}
                                 centered
                                 orientation={
                                    window.innerWidth < 600
                                       ? 'horizontal'
                                       : 'vertical'
                                 }
                              >
                                 <Tab label='Product Document' />
                                 <Tab label='Warranty Card' />
                              </TabPanelDoc>
                           </Box>
                        </Grid>
                        <Grid item md={6} lg={9}>
                           <DocumentBox>
                              <Box sx={{ p: 2 }}>
                                 {documentTab === 0 && (
                                    <Box>
                                       {productDetails?.my_documents?.length >
                                          0 &&
                                          productDetails.my_documents
                                             .filter(
                                                (doc) =>
                                                   doc.doc_type === 'product'
                                             )
                                             .map(
                                                ({
                                                   doc_name,
                                                   doc_id,
                                                   doc_url,
                                                }) => (
                                                   <DownloadChip
                                                      key={doc_id}
                                                      label={doc_name}
                                                      sx={{ mr: 1 }}
                                                      onClick={() =>
                                                         console.log('Clicked')
                                                      }
                                                      component='a'
                                                      href={doc_url}
                                                      target='_blank'
                                                   />
                                                )
                                             )}
                                       <Typography
                                          variant='body1'
                                          sx={{ mt: 2, textAlign: 'left' }}
                                       >
                                          <strong>Description: </strong>{' '}
                                          {productDetails.product_description}
                                       </Typography>
                                    </Box>
                                 )}
                                 {documentTab === 1 && (
                                    <Box>
                                       {productDetails.my_documents?.length >
                                          0 &&
                                          productDetails.my_documents
                                             .filter(
                                                (doc) =>
                                                   doc.doc_type === 'warranty'
                                             )
                                             .map(
                                                ({
                                                   doc_name,
                                                   doc_id,
                                                   doc_url,
                                                }) => (
                                                   <DownloadChip
                                                      key={doc_id}
                                                      label={doc_name}
                                                      sx={{ mr: 1 }}
                                                      onClick={() =>
                                                         console.log('Clicked')
                                                      }
                                                      component='a'
                                                      href={doc_url}
                                                      target='_blank'
                                                   />
                                                )
                                             )}

                                       <Typography
                                          variant='body1'
                                          sx={{ mt: 2 }}
                                       >
                                          <strong>Description: </strong>{' '}
                                          {
                                             productDetails.product_warranty_description
                                          }
                                       </Typography>
                                    </Box>
                                 )}
                              </Box>
                           </DocumentBox>
                        </Grid>
                     </Grid>
                  </Box>

                  {/* product feature section */}
                  <ProductFeatures>
                     <Box className='featuresHeader'>
                        <Typography variant='h6'>Product Features</Typography>
                        <Button
                           sx={{ color: '#2448FC' }}
                           onClick={() => {
                              setViewAll(!viewAll);
                           }}
                        >
                           {viewAll ? 'View Less' : 'View All'}
                        </Button>
                     </Box>
                     <FeatureBox>
                        {productDetails.attributes?.length > 0 && (
                           <>
                              {viewAll
                                 ? productDetails.attributes
                                      .filter(
                                         (attribute) =>
                                            attribute?.attribute_values[
                                               attribute?.attribute_values
                                                  ?.length - 1
                                            ]?.views?.product_feature_list
                                               ?.visibility
                                      )
                                      .map((attribute, index) => (
                                         <FeatureItemBox key={index} i={index}>
                                            <Typography variant='body'>
                                               {attribute.name}
                                            </Typography>
                                            <Typography variant='body'>
                                               {
                                                  attribute.attribute_values[0]
                                                     .value
                                               }
                                            </Typography>
                                         </FeatureItemBox>
                                      ))
                                 : productDetails.attributes
                                      .filter(
                                         (attribute) =>
                                            attribute?.attribute_values[
                                               attribute?.attribute_values
                                                  ?.length - 1
                                            ]?.views?.product_feature_list
                                               ?.visibility
                                      )
                                      .slice(0, 4)
                                      .map((attribute, index) => (
                                         <FeatureItemBox key={index} i={index}>
                                            <Typography variant='body'>
                                               {attribute.name}
                                            </Typography>
                                            <Typography variant='body'>
                                               {
                                                  attribute.attribute_values[0]
                                                     .value
                                               }
                                            </Typography>
                                         </FeatureItemBox>
                                      ))}
                           </>
                        )}
                     </FeatureBox>
                  </ProductFeatures>
               </>
            </Box>
         </Container>
         {/* bottom fixed button */}
         {scrollPosition > 1500 && (
            <PrimaryButton
               onClick={() => {
                  // scroll to top y position
                  window.scrollTo(0, 800);
               }}
               sx={{
                  width: '100%',
                  position: 'fixed',
                  bottom: 0,
                  left: 0,
                  zIndex: 1,
                  display: {
                     xs: 'block',
                     sm: 'none',
                  },
               }}
            >
               Create Enquiry
            </PrimaryButton>
         )}
      </Box>
   );
};

export default EnquiryPage;
