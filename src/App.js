import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import { theme } from './theme/theme';
import { store } from './redux/store';

import 'animate.css';
import './App.css';

import Toast from './components/Toast';
import Layout from './components/Layout/Layout';

import { removeUser } from './redux/slices/userSlice';
import { axiAuth } from './utils/axiosInstance';

import ProductBooking from './pages/ProductBooking/ProductBooking';

import Profile from './pages/UserDashboard/Profile/Profile';
import useAuth from './hooks/useAuth';

// swiper css imports
import 'swiper/swiper-bundle.css';
import 'swiper/swiper.min.css';
import 'swiper/modules/scrollbar/scrollbar.scss';
import 'swiper/modules/scrollbar/scrollbar.scss';

import { Helmet } from 'react-helmet';
import {
   saveStates,
   setNetworkSnackbar2Open,
   setNetworkSnackbarOpen,
   setSnackbarInitiated,
} from './redux/slices/utils/utils.slice';
import LoginModal from './components/LoginModal/LoginModal';
import AuthGuard from './components/AuthGuard/AuthGuard';
import { useSelector } from 'react-redux';
import VendorHome from './pages/home/vendorHome';
import { removeCart } from './redux/slices/cart/cartSlice';

// import ErrorPage from "./pages/404";
import { ErrorBoundary } from 'react-error-boundary';
import Fallback from './components/Fallback/Fallback';
import NetworkFallback from './components/Fallback/NetworkFallback';
import { useNetwork } from './hooks/useNetwork';
import SnackbarAlert from './components/Custom/SnackbarAlert/SnackbarAlert';
import SnackbarAlert2 from './components/Custom/SnackbarAlert/SnackbarAlert2';
// import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import OrderStatus from './pages/OrderStatus/OrderStatus';
// import PurchaseDetailsPage from './pages/OrderStatus/PurchaseDetailsPage';
import OrderStatusFromProfile from './pages/OrderStatus/OrderStatusFromProfile';

import Loader from './components/Loader/Loader';

import AddProduct from './pages/AdminPages/AddProduct/AddProduct';
import ProductList from './pages/AdminPages/ProductList/ProductList';
import UpdateProduct from './pages/AdminPages/AddProduct/UpdateProduct';
import Parallax404 from './pages/Parallax404/Parallax404';
import BackDor from './pages/BackDor/BackDor';
import Redirect from './components/Redirect/Redirect';
import Home from './pages/home/home';
import RegisterBackDoor from './pages/RegisterBackdoor/RegisterBackdoor';
import OurSocialMediaBlogs from './pages/OurSocialMediaBlogs/OurSocialMediaBlogs';
import ScrollToTop from './utils/scrollToTop';
import CalculationPdfTemplate from './pages/home/CalculationPdfTemplate/CalculationPdfTemplate';
import Login from './pages/Login/Login';
// import TrialSignup from './pages/TrialSignup/TrialSignup';

const TrialSignup = lazy(() => import('./pages/TrialSignup/TrialSignup'));

const CustomerLeads = lazy(() =>
   import('./pages/Dashboard/CustomerLeads/CustomerLeads')
);
const SalesEnquiries = lazy(() =>
   import('./pages/Dashboard/SalesEnquiries/SalesEnquiries')
);
const Purchases = lazy(() => import('./pages/Dashboard/Purchase/Purchases'));
const Consultation = lazy(() =>
   import('./pages/UserDashboard/Consultation/Consultation')
);

// import CustomerLeads from './pages/Dashboard/CustomerLeads/CustomerLeads';
// import SalesEnquiries from './pages/Dashboard/SalesEnquiries/SalesEnquiries';
// import Purchases from './pages/Dashboard/Purchase/Purchases';
// import Consultation from './pages/UserDashboard/Consultation/Consultation';

// const AddProduct = lazy(() =>
//   import("./pages/AdminPages/AddProduct/AddProduct")
// );
// const ProductList = lazy(() =>
//   import("./pages/AdminPages/ProductList/ProductList")
// );

const SolarMaintenance = lazy(() =>
   import('./pages/Blogs/SolarMaintenance/SolarMaintenance')
);
const PvSystems = lazy(() => import('./pages/Blogs/PvSystems/PvSystems'));
const SolarSteps = lazy(() =>
   import('./pages/Dashboard/SolarSteps/SolarSteps')
);
const SolarComponents = lazy(() =>
   import('./pages/Blogs/SolarComponents/SolarComponents')
);
const SolarInstallationProcess = lazy(() =>
   import('./pages/Blogs/SolarInstallationProcess/SolarInstallationProcess')
);
const SolarDesign = lazy(() => import('./pages/Blogs/SolarDesign/SolarDesign'));
const SolarProducts = lazy(() =>
   import('./pages/Blogs/SolarProducts/SolarProducts')
);

const KwattCourses = lazy(() =>
   import('./pages/Blogs/KwattCourses/KwattCourses')
);

const Procurement = lazy(() => import('./pages/Procurement/Procurement'));
const AboutUs = lazy(() => import('./pages/AboutUs/AboutUs.js'));
const Checkout = lazy(() => import('./pages/Checkout/Checkout'));
const SearchProduct = lazy(() => import('./pages/SearchProduct/SearchProduct'));
const PurchaseProductPage = lazy(() =>
   import('./pages/PurchaseProductPage/PurchaseProductPage')
);
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy/PrivacyPolicy'));
const UserPortfolioProfile = lazy(() =>
   import('./portfolio/UserPortfolioProfile')
);
const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));
const MyDashboard = lazy(() => import('./pages/MyDashboard/MyDashboard'));
const UserDashboard = lazy(() => import('./pages/UserDashboard/UserDashboard'));

const EditProjectForMobile = lazy(() =>
   import('./pages/EditProjectForMobile/EditProjectForMobile')
);
const AddProjectForMobile = lazy(() =>
   import('./pages/AddProjectForMobile/AddProjectForMobile')
);

const DashboardPortfolio = lazy(() =>
   import('./pages/Dashboard/DashboardPortfolio/DashboardPortfolio')
);

const Blogs = lazy(() => import('./pages/Blogs/Blogs'));

const NetMetering = lazy(() => import('./pages/Blogs/NetMetering/NetMetering'));

const UserOutlet = lazy(() => import('./privateOutlets/UserOutlet'));
const VendorOutlet = lazy(() => import('./privateOutlets/VendorOutlet'));
const AdminOutlet = lazy(() => import('./privateOutlets/AdminOutlet'));

const Maharashtra = lazy(() =>
   import('./pages/Blogs/NetMetering/Maharashtra/Maharashtra')
);
const Dilhi = lazy(() => import('./pages/Blogs/NetMetering/Dilhi/Dilhi'));
const Gujrat = lazy(() => import('./pages/Blogs/NetMetering/Gujrat/Gujrat'));
const Haryana = lazy(() => import('./pages/Blogs/NetMetering/Haryana/Haryana'));
const Karnataka = lazy(() =>
   import('./pages/Blogs/NetMetering/Karnataka/Karnataka')
);
const Punjab = lazy(() => import('./pages/Blogs/NetMetering/Punjab/Punjab'));
const WestBengal = lazy(() =>
   import('./pages/Blogs/NetMetering/WestBengal/WestBengal')
);

const EnquiryPage = lazy(() => import('./pages/EnquiryPage/EnquiryPage'));

function App() {
   const { user } = useAuth();

   if (user) {
      console.log(user?.user);
   }

   const description = `
   Solruf is a solar marketplace is the pattern of narrative development that aims to make vivid a place, object, character, or group. Description is one of four rhetorical modes, along with exposition, argumentation, and narration. In practice it would be difficult to write literature that drew on just one of the four basic modes`;

   const { statesOfIndia, snackbarInitiated } = useSelector(
      (state) => state.utils
   );

   useEffect(() => {
      if (statesOfIndia.length === 0) {
         axiAuth
            .get('api/states')
            .then(({ data }) => {
               store.dispatch(
                  saveStates(
                     data.states.map((state) => {
                        return state.charAt(0) + state.slice(1).toLowerCase();
                     })
                  )
               );
            })
            .catch((err) => {});
      }
   }, [statesOfIndia.length]);

   const errorHandler = (error, errorInfo) => {
      console.log('error boundary', error, errorInfo);
   };

   const { networkStatus } = useNetwork();

   if (!networkStatus.online) {
      dispatch(setNetworkSnackbarOpen(true));
      dispatch(setSnackbarInitiated(true));
   } else {
      if (snackbarInitiated) {
         dispatch(setNetworkSnackbarOpen(false));
         dispatch(setNetworkSnackbar2Open(true));
      }
   }

   return (
      <ThemeProvider theme={theme}>
         <Router>
            <ScrollToTop />
            <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
               <div className='App'>
                  <Helmet>
                     <title>Solruf | Solar market place</title>
                     <meta name='description' content={description} />
                     <meta name='theme-color' content='#ffd05b' />
                     <body class='light' />
                  </Helmet>
                  <Routes>
                     <Route
                        path='/products'
                        element={
                           <Layout fixedFooter>
                              <Suspense fallback={<Loader />}>
                                 <Procurement />
                              </Suspense>
                           </Layout>
                        }
                     />
                     <Route
                        path='/'
                        element={
                           <Layout fixedFooter contactUs>
                              <Home />
                           </Layout>
                        }
                     />
                     <Route
                        path='/vendors'
                        element={
                           <Layout fixedFooter contactUs>
                              <VendorHome />
                           </Layout>
                        }
                     />

                     <Route
                        path='/register'
                        element={
                           <Layout fixedFooter contactUs>
                              <Home register />
                           </Layout>
                        }
                     />

                     <Route
                        path='/about-us'
                        element={
                           <Layout fixedFooter contactUs>
                              <Suspense fallback={<Loader />}>
                                 <AboutUs />
                              </Suspense>
                           </Layout>
                        }
                     />

                     <Route
                        path='/checkout'
                        element={
                           <Layout>
                              <Suspense fallback={<Loader />}>
                                 <Checkout />
                              </Suspense>
                           </Layout>
                        }
                     />
                     <Route
                        path='/portfolio-checkout'
                        element={
                           <Layout>
                              <Suspense fallback={<Loader />}>
                                 <Checkout />
                              </Suspense>
                           </Layout>
                        }
                     />

                     <Route
                        path='/searchProduct'
                        element={
                           <Layout>
                              <Suspense fallback={<Loader />}>
                                 <SearchProduct />
                              </Suspense>
                           </Layout>
                        }
                     />
                     <Route
                        path='/purchase-product/:vendorSlug/:vendorId/:productSlug/:productId'
                        element={
                           <Layout dynamicHeader noFooter>
                              <Suspense fallback={<Loader />}>
                                 <PurchaseProductPage />
                              </Suspense>
                           </Layout>
                        }
                     />

                     <Route
                        path='/privacyPolicy'
                        element={
                           <Suspense fallback={<Loader />}>
                              <PrivacyPolicy />
                           </Suspense>
                        }
                     />

                     {/* //? ================== All user protected routes will go here ================== */}
                     <Route
                        path='/'
                        element={
                           <Suspense fallback={<Loader />}>
                              <UserOutlet />
                           </Suspense>
                        }
                     >
                        <Route
                           path='user-dashboard/'
                           element={
                              <Layout noFooter={true}>
                                 <Suspense fallback={<Loader />}>
                                    <UserDashboard />
                                 </Suspense>
                              </Layout>
                           }
                        >
                           <Route
                              path='purchase-enquiries'
                              element={
                                 <Suspense fallback={<Loader />}>
                                    <Purchases />
                                 </Suspense>
                              }
                           />
                           <Route path='profile' element={<Profile />} />
                        </Route>
                     </Route>
                     {/* //? ================== All vendor routes will go here ================== */}
                     <Route
                        path='/vendor/'
                        element={
                           <Suspense fallback={<Loader />}>
                              <VendorOutlet />
                           </Suspense>
                        }
                     >
                        <Route
                           path='dashboard/'
                           element={
                              <Layout noFooter={true}>
                                 <Suspense fallback={<Loader />}>
                                    <Dashboard />
                                 </Suspense>
                              </Layout>
                           }
                        >
                           <Route
                              index
                              element={
                                 <Suspense fallback={<Loader />}>
                                    <MyDashboard />
                                 </Suspense>
                              }
                           />
                           <Route
                              index={true}
                              path='portfolio'
                              element={
                                 <Suspense fallback={<Loader />}>
                                    <DashboardPortfolio noPadding={true} />
                                 </Suspense>
                              }
                           />
                           <Route
                              path='customerLeads'
                              element={
                                 <Suspense fallback={<Loader />}>
                                    <CustomerLeads />
                                 </Suspense>
                              }
                           />
                           <Route
                              path='sale'
                              element={
                                 // <Suspense fallback={<Loader />}>
                                 <SalesEnquiries />
                                 // </Suspense>
                              }
                           />
                           <Route
                              path='purchase'
                              element={
                                 // <Suspense fallback={<Loader />}>
                                 <Purchases />
                                 // </Suspense>
                              }
                           />
                           <Route
                              path='consultation'
                              element={
                                 <Suspense fallback={<Loader />}>
                                    <Consultation />
                                 </Suspense>
                              }
                           />
                           <Route path='profile' element={<Profile />} />
                        </Route>
                     </Route>

                     {/* //? ================== All admin routes will go here ================== */}
                     <Route
                        path='/admin/'
                        element={
                           <Suspense fallback={<Loader />}>
                              <AdminOutlet />
                           </Suspense>
                        }
                     >
                        <Route
                           path='create/new'
                           element={
                              <Layout>
                                 <Suspense fallback={<Loader />}>
                                    <AddProduct />
                                 </Suspense>
                              </Layout>
                           }
                        />
                        <Route
                           path='update/product/:product_id'
                           element={
                              <Layout>
                                 <Suspense fallback={<Loader />}>
                                    <UpdateProduct />
                                 </Suspense>
                              </Layout>
                           }
                        />
                        <Route
                           path='products'
                           element={
                              <Layout noFooter={true}>
                                 <Suspense fallback={<Loader />}>
                                    <ProductList />
                                 </Suspense>
                              </Layout>
                           }
                        />
                     </Route>

                     <Route
                        exact
                        path='/editProjectMobile/:projectId'
                        element={
                           <>
                              <Layout>
                                 <Container maxWidth='xl'>
                                    <Suspense fallback={<Loader />}>
                                       <EditProjectForMobile />
                                    </Suspense>
                                 </Container>
                              </Layout>
                           </>
                        }
                     />
                     <Route
                        exact
                        path='/m.addProject'
                        element={
                           <>
                              <Layout>
                                 <Container maxWidth='xl'>
                                    <Suspense fallback={<Loader />}>
                                       <AddProjectForMobile />
                                    </Suspense>
                                 </Container>
                              </Layout>
                           </>
                        }
                     />
                     <Route
                        path='/portfolio/:name'
                        element={
                           <Layout profileHeader noFooter>
                              <Suspense fallback={<Loader />}>
                                 <UserPortfolioProfile />
                              </Suspense>
                           </Layout>
                        }
                     />

                     <Route
                        path='/trial-signup'
                        element={
                           <Layout>
                              <Suspense fallback={<Loader />}>
                                 <TrialSignup />
                              </Suspense>
                           </Layout>
                        }
                     />

                     {/*  ============================== blogs ================================= */}
                     <Route path='/blogs'>
                        <Route
                           index
                           element={
                              <Layout header={false}>
                                 <Suspense fallback={<Loader />}>
                                    <Blogs />
                                 </Suspense>
                              </Layout>
                           }
                        />
                        <Route
                           path='our-blogs'
                           element={
                              <Layout header={false}>
                                 <OurSocialMediaBlogs />
                              </Layout>
                           }
                        />
                        <Route
                           path='maintenance'
                           element={
                              <Layout header={false}>
                                 <Suspense fallback={<Loader />}>
                                    <SolarMaintenance />
                                 </Suspense>
                              </Layout>
                           }
                        />
                        <Route
                           path='typesOfPvSystems'
                           element={
                              <Layout header={false}>
                                 <Suspense fallback={<Loader />}>
                                    <PvSystems />
                                 </Suspense>
                              </Layout>
                           }
                        />
                        <Route
                           path='solarSteps'
                           element={
                              <Layout header={false}>
                                 <Suspense fallback={<Loader />}>
                                    <SolarSteps />
                                 </Suspense>
                              </Layout>
                           }
                        />
                        <Route
                           path='solarInstallationProcess'
                           element={
                              <Layout header={false}>
                                 <Suspense fallback={<Loader />}>
                                    <SolarInstallationProcess />
                                 </Suspense>
                              </Layout>
                           }
                        />
                        <Route
                           path='solarComponents'
                           element={
                              <Layout header={false}>
                                 <Suspense fallback={<Loader />}>
                                    <SolarComponents />
                                 </Suspense>
                              </Layout>
                           }
                        />
                        <Route
                           path='solarDesign'
                           element={
                              <Layout header={false}>
                                 <Suspense fallback={<Loader />}>
                                    <SolarDesign />
                                 </Suspense>
                              </Layout>
                           }
                        />
                        <Route
                           path='solarProducts'
                           element={
                              <Layout header={false}>
                                 <Suspense fallback={<Loader />}>
                                    <SolarProducts />
                                 </Suspense>
                              </Layout>
                           }
                        />

                        <Route
                           path='kWatt-solar-courses'
                           element={
                              <Layout header={false}>
                                 <Suspense fallback={<Loader />}>
                                    <KwattCourses />
                                 </Suspense>
                              </Layout>
                           }
                        />
                        <Route
                           path='netMetering'
                           element={
                              <Layout header={false}>
                                 <Suspense fallback={<Loader />}>
                                    <NetMetering />
                                 </Suspense>
                              </Layout>
                           }
                        />

                        {/* net metering policy, state wise */}

                        <Route
                           path='netMetering/maharashtra'
                           element={
                              <Layout header={false}>
                                 <Suspense fallback={<Loader />}>
                                    <Maharashtra />
                                 </Suspense>
                              </Layout>
                           }
                        />
                        <Route
                           path='netMetering/dilhi'
                           element={
                              <Layout header={false}>
                                 <Suspense fallback={<Loader />}>
                                    <Dilhi />
                                 </Suspense>
                              </Layout>
                           }
                        />
                        <Route
                           path='netMetering/gujrat'
                           element={
                              <Layout header={false}>
                                 <Suspense fallback={<Loader />}>
                                    <Gujrat />
                                 </Suspense>
                              </Layout>
                           }
                        />
                        <Route
                           path='netMetering/haryana'
                           element={
                              <Layout header={false}>
                                 <Suspense fallback={<Loader />}>
                                    <Haryana />
                                 </Suspense>
                              </Layout>
                           }
                        />
                        <Route
                           path='net-metering/karnataka'
                           element={
                              <Layout header={false}>
                                 <Suspense fallback={<Loader />}>
                                    <Karnataka />
                                 </Suspense>
                              </Layout>
                           }
                        />
                        <Route
                           path='net-metering/punjab'
                           element={
                              <Layout header={false}>
                                 <Suspense fallback={<Loader />}>
                                    <Punjab />
                                 </Suspense>
                              </Layout>
                           }
                        />

                        <Route
                           path='net-metering/west-bengal'
                           element={
                              <Layout header={false}>
                                 <Suspense fallback={<Loader />}>
                                    <WestBengal />
                                 </Suspense>
                              </Layout>
                           }
                        />
                     </Route>

                     {/*  product booking  */}
                     <Route
                        path='/product-booking'
                        element={<ProductBooking />}
                     />
                     <Route
                        path='/products/:productId/:productSlug'
                        element={
                           <Layout noFooter>
                              <Suspense fallback={<Loader />}>
                                 <EnquiryPage />
                              </Suspense>
                           </Layout>
                        }
                     />

                     <Route
                        path='/order-status'
                        element={
                           <Layout noFooter={true}>
                              <OrderStatus />
                           </Layout>
                        }
                     />
                     <Route
                        path='/aYJqr4o4gX9WAISrvTlOX4hZO9+MS8uQo7tZbL5DfpQ='
                        element={
                           <Layout>
                              <BackDor />
                           </Layout>
                        }
                     />
                     <Route
                        path='/aYJqr4o4gX9WAISrvTlOX4hZO9+MS8uQo7tZbL5DfpQ=register'
                        element={
                           <Layout>
                              <RegisterBackDoor />
                           </Layout>
                        }
                     />

                     <Route
                        path='/portfolio/order-status'
                        element={
                           <Layout profileHeader noFooter={true}>
                              <OrderStatusFromProfile />
                           </Layout>
                        }
                     />
                     <Route
                        path='/login-register'
                        element={
                           <Layout>
                              <Login />
                           </Layout>
                        }
                     />
                     <Route path='/fallback' element={<Fallback />} />

                     <Route path='/net' element={<NetworkFallback />} />

                     {/* <Route path="/pdp" element={<PurchaseDetailsPage />} /> */}
                     <Route path='/purchase' element={<Redirect />} />
                     <Route path='/sale' element={<Redirect />} />
                     <Route
                        path='/calc-pdf'
                        element={<CalculationPdfTemplate />}
                     />

                     <Route path='/*' element={<Parallax404 />} />
                  </Routes>
                  <Toast />
                  <LoginModal>
                     <AuthGuard />
                  </LoginModal>
               </div>
               <SnackbarAlert />
               <SnackbarAlert2 />
            </ErrorBoundary>
         </Router>
      </ThemeProvider>
   );
}

export default App;

/** Intercept any unauthorized request.
 * dispatch logout action accordingly **/
const UNAUTHORIZED = 401;
const { dispatch } = store; // direct access to redux store.

axiAuth.interceptors.request.use((config) => {
   const token = store.getState().user.token;
   if (token) {
      config.headers.Authorization = `Bearer ${token}`;
   }
   return config;
});

axiAuth.interceptors.response.use(
   (response) => response,
   (error) => {
      if (error.response) {
         const { status } = error?.response;
         if (status === UNAUTHORIZED) {
            dispatch(removeUser());
            dispatch(removeCart());
         }
         return Promise.reject(error);
      }
   }
);
