import {
   Accordion,
   AccordionDetails,
   AccordionSummary,
   Badge,
   Container,
   Dialog,
   Divider,
   Drawer,
   IconButton,
   Slide,
   styled,
   Typography,
   useMediaQuery,
} from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PhoneIcon from '@mui/icons-material/Phone';
import { Box } from '@mui/system';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import YellowButton from '../YellowButton/YellowButton';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import {
   openLoginModal,
   // setLoginRedirect,
} from '../../redux/slices/loginModalSlice';
import PersonIcon from '@mui/icons-material/Person';
import { removeUser } from '../../redux/slices/userSlice';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { useEffect } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';

import LogoutIcon from '@mui/icons-material/Logout';
import ArticleIcon from '@mui/icons-material/Article';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import LoginIcon from '@mui/icons-material/Login';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// import { useNavigate } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router';
// import ContactPageIcon from '@mui/icons-material/ContactPage';
import { removeProfileData } from '../../redux/slices/ProfileSlice';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
   activeHeaderMenuStyle,
   activeStyle,
   CartBox,
   CustomMenuItem,
   DashboardMenu,
   DashboardMenuLink,
   DashboardMenuHashLink,
   // DashboardMenuLink2,
   DrawerFooter,
   FooterMenu,
   FooterMenus,
   Header,
   Logo,
   LogoBox,
   LogoBoxInDrawer,
   MenuContainer,
   MenuIconBox,
   Nav,
   // NestedMenuContainer,
   ResultItem,
   SearchBox,
   SearchIconBox,
   Wrapper,
} from './mainHeader.style';
import { removeCart } from '../../redux/slices/cart/cartSlice';
import { useDebounce } from 'use-debounce/lib';
import { axiosInstance } from '../../utils/axiosInstance';

import Loader from '../Loader/Loader';
import { useRef } from 'react';
import useOutsideClick from '../../hooks/useOutsideClick';
import { setSearchString } from '../../redux/slices/searchSlice';
import { KeyboardBackspace } from '@mui/icons-material';
import { modalTopBackButtonStyle } from '../../theme/modalTopBackButtonStyle';
import Checkout from '../../pages/Checkout/Checkout';
import FixedInfoFooter from '../FixedInfoFooter/FixedInfoFooter';
import { HashLink } from 'react-router-hash-link';
import PopupSearchField from '../PopupSearchField/PopupSearchField';
import BlogsMenuItem from './BlogsMenuItem';

import ClickAwayListener from '@mui/base/ClickAwayListener';

const CustomizedAccordion = styled(Accordion)(
   ({ theme, nestedMenuOpen, pathName }) => ({
      marginBottom: '2rem !important',
      background: 'transparent',
      '&::before': {
         background: 'transparent',
      },

      '& .MuiButtonBase-root': {
         background:
            nestedMenuOpen || pathName.startsWith('/blogs')
               ? 'linear-gradient(90deg, rgba(255, 208, 91, 1) 0%, rgba(255, 208, 91, 0.3) 100%)'
               : 'transparent',
         borderRadius: nestedMenuOpen ? '4px 0 0 0' : '4px 0 0 4px',
         padding: '0.2rem 11px',
         border: 0,
      },
      '& .Mui-expanded': {
         // background: nestedMenuOpen
         //    ? 'linear-gradient(90deg, rgba(255, 208, 91, 1) 0%, rgba(255, 208, 91, 0.3) 100%)'
         //    : 'transparent',
      },
      '& .MuiAccordionSummary-root': {},
      '& .MuiAccordionSummary-content': {},
      '& .MuiSvgIcon-root': {
         transform: nestedMenuOpen ? 'rotate(180deg)' : 'rotate(-90deg)',
      },

      [theme.breakpoints.down('sm')]: {
         padding: '0px',
      },
   })
);

const MainHeader = () => {
   const dispatch = useDispatch();
   const { user, role } = useSelector((state) => state.user);
   const { cart } = useSelector((state) => state.cart);
   const matchMd = useMediaQuery((theme) => theme.breakpoints.down('md'));
   // const matchSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
   const match600 = useMediaQuery((theme) => theme.breakpoints.down(600));

   const location = useLocation();

   const [avatarMenuEl, setAvatarMenuEl] = React.useState(null);

   const [showCart, setShowCart] = React.useState(false);
   const openAvatarMenu = Boolean(avatarMenuEl);

   const handleAvatarClick = (event) => {
      setAvatarMenuEl(event.currentTarget);
   };
   const handleMenuClose = () => {
      setAvatarMenuEl(null);
   };

   const [masterEl, setMasterEl] = React.useState(null);
   const openMasterMenu = Boolean(masterEl);
   const handleMasterClick = (event) => {
      setMasterEl(event.currentTarget);
   };
   const handleMasterClose = () => {
      setMasterEl(null);
   };

   const handleLogout = () => {
      setAvatarMenuEl(null);
      dispatch(removeUser());
      dispatch(removeProfileData());
      dispatch(removeCart());
   };
   const [openDrawer, setOpenDrawer] = useState(false);
   const [open, setOpen] = useState(false);

   const handleClose = () => {
      setOpen(false);
   };
   useEffect(() => {
      setOpenDrawer(false);
   }, [matchMd]);

   const [nestedMenuOpen, setNestedMenuOpen] = useState('');

   const handleNestedMenuOpen = () => {
      setNestedMenuOpen(!nestedMenuOpen);
   };

   const [mobileSearchbarOn, setMobileSearchbarOn] = useState(false);

   // drawer links for mobile
   const drawer = (
      <DashboardMenu
      // onClick={() => {
      //    setOpenDrawer(false);
      // }}
      >
         <DashboardMenuLink
            to='/products'
            onClick={() => setOpenDrawer(false)}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
         >
            <StorefrontIcon />
            Products
         </DashboardMenuLink>

         {user && (role === 'Vendor' || role === 'User') && (
            <DashboardMenuLink
               to={`${
                  role === 'Vendor' ? '/vendor/dashboard' : '/user-dashboard'
               }`}
               style={({ isActive }) => (isActive ? activeStyle : undefined)}
               onClick={() => setOpenDrawer(false)}
            >
               <DashboardIcon />
               Dashboard
            </DashboardMenuLink>
         )}

         {user && role === 'Administrator' && (
            <>
               <DashboardMenuLink
                  to='/admin/create/new'
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  onClick={() => setOpenDrawer(false)}
               >
                  <AddBoxIcon />
                  Create
               </DashboardMenuLink>

               <DashboardMenuLink
                  to='/admin/products'
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  onClick={() => setOpenDrawer(false)}
               >
                  <StorefrontIcon />
                  Admin Products
               </DashboardMenuLink>
            </>
         )}

         <DashboardMenuLink
            to='/order-status'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setOpenDrawer(false)}
         >
            <LocalShippingIcon />
            Order-Status
         </DashboardMenuLink>

         <CustomizedAccordion
            disableGutters
            elevation={0}
            expanded={nestedMenuOpen}
            onClick={() => handleNestedMenuOpen()}
            nestedMenuOpen={nestedMenuOpen}
            pathName={location.pathname}
            // defaultExpanded={defaultExpanded}
         >
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls='panel1a-content'
               id='panel1a-header'
               sx={{
                  background: 'transparent',
               }}
            >
               <Typography
                  sx={{
                     justifyContent: 'flex-end',
                     fontWeight: 'bold',
                     color: '#000',
                     display: 'flex',
                     alignItems: 'center',
                     fontSize: '14px',
                  }}
               >
                  <ArticleIcon
                     sx={{
                        mr: 4,
                     }}
                  />
                  Blogs
               </Typography>
            </AccordionSummary>
            <AccordionDetails
               sx={{
                  background: '#ffffff',
                  borderRadius: '0 0 0 4px',
               }}
            >
               <Box
                  sx={{
                     display: 'flex',
                     flexDirection: 'column',
                     justifyContent: 'center',
                     ml: 2,
                     '& a': {
                        textDecoration: 'none',
                        color: '#000',
                        fontWeight: 'bold',
                        mb: 1,
                        p: 1,
                        borderRadius: '4px',
                        '&:hover': {
                           color: '#4d4d4d',
                           // background: '#ffd05b',
                        },
                     },
                  }}
               >
                  <NavLink
                     to='/blogs/typesOfPvSystems'
                     style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                     }
                     onClick={() => setOpenDrawer(false)}
                  >
                     Types of PV Systems
                  </NavLink>
                  <NavLink
                     to='/blogs/solarSteps'
                     style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                     }
                     onClick={() => setOpenDrawer(false)}
                  >
                     Steps before Solar Installation
                  </NavLink>
                  <NavLink
                     to='/blogs/solarInstallationProcess'
                     style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                     }
                     onClick={() => setOpenDrawer(false)}
                  >
                     Solar Installation
                  </NavLink>
                  <NavLink
                     to='/blogs/solarComponents'
                     style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                     }
                     onClick={() => setOpenDrawer(false)}
                  >
                     Components used in Solar Installation
                  </NavLink>
                  <NavLink
                     to='/blogs/maintenance'
                     style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                     }
                     onClick={() => setOpenDrawer(false)}
                  >
                     Solar Panel Maintenance
                  </NavLink>
                  <NavLink
                     to='/blogs/kWatt-solar-courses'
                     style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                     }
                     onClick={() => setOpenDrawer(false)}
                  >
                     KWatt Solar Courses
                  </NavLink>
               </Box>
            </AccordionDetails>
         </CustomizedAccordion>

         {/* <DashboardMenuLink
        to="/blogs"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <ArticleIcon />
        Blogs
      </DashboardMenuLink> */}

         <DashboardMenuHashLink
            sx={{
               background:
                  location.hash === '#contact-us'
                     ? 'linear-gradient(90deg, rgba(255, 208, 91, 1) 0%, rgba(255, 208, 91, 0.3) 100%)'
                     : 'transparent',
            }}
            to='/#contact-us'
         >
            <PhoneIcon />
            Contact Us
         </DashboardMenuHashLink>
      </DashboardMenu>
   );

   const logo2 = 'https://i.ibb.co/CzpgVFq/51.png';

   const navigate = useNavigate();

   const [searchTerm, setSearchTerm] = useState('');
   const [searching, setSearching] = useState(false);
   const [debouncedSearchTerm] = useDebounce(searchTerm, 700);

   const [searchData, setSearchData] = useState([]);

   useEffect(() => {
      const search = async () => {
         if (!debouncedSearchTerm) return;
         setSearching(true);
         try {
            const { status, data } = await axiosInstance.get(
               `api/products/search?q=${debouncedSearchTerm}`
            );
            if (status === 200) {
               setSearchData(data.products);
               setSearching(false);
            }
         } catch (error) {
            setSearching(false);
         }
      };

      search();
   }, [debouncedSearchTerm]);

   const resultBoxRef = useRef(null);
   const searchInputRef = useRef(null);
   const [showResultBox, setShowResultBox] = useState(false);

   useOutsideClick(resultBoxRef, searchInputRef, () => {
      setShowResultBox(false);
   });

   const searchClickHandler = (e) => {
      e.preventDefault();
      if (searchTerm.length > 0) {
         dispatch(setSearchString(searchTerm));
         setShowResultBox(false);
         navigate('/products');
      }
   };

   const goToProduct = (slug, id, setSearchModalOpen) => {
      dispatch(setSearchString(''));
      setShowResultBox(false);
      navigate(`/products/${id}/${slug}`);
      if (setSearchModalOpen) setSearchModalOpen(false);
   };

   const [scrollPosition, setScrollPosition] = useState(0);

   const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
   };

   useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      <>
         {' '}
         <FixedInfoFooter />
         <Wrapper
            sx={{
               background:
                  scrollPosition <= 30 ? '#4D4D4D' : 'rgba(0, 0, 0,0.6)',
               backdropFilter: 'blur(2px)',
               transition: 'all 1s ease',
            }}
         >
            <Container maxWidth='xl'>
               <Header>
                  <LogoBox>
                     <MenuIconBox
                        onClick={() => setOpenDrawer(!openDrawer)}
                        sx={{
                           display: {
                              xs: 'flex',
                              md: 'none',
                           },
                        }}
                     >
                        <MenuIcon
                           fontSize='1.6rem'
                           sx={{ color: 'primary.dark' }}
                        />
                     </MenuIconBox>
                     {!mobileSearchbarOn && (
                        <Logo component={Link} to='/'>
                           <img src={logo2} alt='logo' />
                        </Logo>
                     )}
                  </LogoBox>

                  <PopupSearchField
                     searchClickHandler={searchClickHandler}
                     setSearchTerm={setSearchTerm}
                     setShowResultBox={setShowResultBox}
                     searchTerm={searchTerm}
                     searchInputRef={searchInputRef}
                     searching={searching}
                     searchData={searchData}
                     goToProduct={goToProduct}
                     showResultBox={showResultBox}
                     resultBoxRef={resultBoxRef}
                  />

                  <Box
                     sx={{
                        ml: '0.5rem',
                     }}
                  ></Box>
                  <Nav sx={{ display: { xs: 'none', md: 'flex' } }}>
                     <CustomMenuItem
                        variant='body'
                        color='white'
                        component={NavLink}
                        to='/products'
                        style={({ isActive }) =>
                           isActive ? activeHeaderMenuStyle : undefined
                        }
                     >
                        Products
                     </CustomMenuItem>
                     <>
                        <CustomMenuItem
                           variant='body'
                           component={NavLink}
                           to='/blogs'
                           color='white'
                           style={({ isActive }) =>
                              isActive
                                 ? {
                                      ...activeHeaderMenuStyle,
                                      position: 'relative',
                                   }
                                 : { position: 'relative' }
                           }
                        >
                           Blogs
                           <MenuContainer className='nestedMenu' sx={{}}>
                              <ul>
                                 <BlogsMenuItem to='/blogs/typesOfPvSystems'>
                                    Types of PV Systems
                                 </BlogsMenuItem>

                                 <BlogsMenuItem to='/blogs/solarSteps'>
                                    Steps before Solar Installation
                                 </BlogsMenuItem>
                                 <BlogsMenuItem to='/blogs/solarInstallationProcess'>
                                    Solar Installation
                                 </BlogsMenuItem>
                                 <BlogsMenuItem to='/blogs/solarComponents'>
                                    Components used in Solar Installation
                                 </BlogsMenuItem>
                                 <BlogsMenuItem to='/blogs/maintenance'>
                                    Solar Panel Maintenance
                                 </BlogsMenuItem>
                                 <BlogsMenuItem to='/blogs/kWatt-solar-courses'>
                                    KWatt Solar Courses
                                 </BlogsMenuItem>
                                 <BlogsMenuItem to='/blogs/our-blogs'>
                                    Our Social Media Blogs
                                 </BlogsMenuItem>
                              </ul>
                           </MenuContainer>
                        </CustomMenuItem>
                        <Box></Box>
                     </>
                     <CustomMenuItem
                        variant='body'
                        color='white'
                        component={NavLink}
                        to='/order-status'
                        style={({ isActive }) =>
                           isActive ? activeHeaderMenuStyle : undefined
                        }
                     >
                        Order-Status
                     </CustomMenuItem>
                     {user && (role === 'Vendor' || role === 'User') && (
                        <CustomMenuItem
                           variant='body'
                           color='white'
                           component={NavLink}
                           to={`${
                              role === 'Vendor'
                                 ? '/vendor/dashboard'
                                 : '/user-dashboard'
                           }`}
                           style={({ isActive }) =>
                              isActive ? activeHeaderMenuStyle : undefined
                           }
                        >
                           Dashboard
                        </CustomMenuItem>
                     )}

                     {user && role === 'Administrator' && (
                        <CustomMenuItem
                           variant='body'
                           color='white'
                           onClick={handleMasterClick}
                           aria-controls={open ? 'master-menu' : undefined}
                           aria-haspopup='true'
                           aria-expanded={open ? 'true' : undefined}
                        >
                           Master
                        </CustomMenuItem>
                     )}
                     {/* // * ===================== admin dropdown menu ================== */}
                     <div>
                        <Menu
                           id='master-menu'
                           anchorEl={masterEl}
                           open={openMasterMenu}
                           onClose={handleMasterClose}
                           MenuListProps={{
                              'aria-labelledby': 'basic-button',
                           }}
                        >
                           <MenuItem
                              onClick={handleClose}
                              component={Link}
                              to='/admin/create/new'
                           >
                              Create Product / Attribute
                           </MenuItem>

                           <MenuItem component={Link} to='/admin/products'>
                              Products / Update Product
                           </MenuItem>
                        </Menu>
                     </div>

                     <CustomMenuItem
                        variant='body'
                        color='white'
                        component={HashLink}
                        to='/#contact-us'
                     >
                        Contact Us
                     </CustomMenuItem>

                     <CartBox
                        onClick={() => navigate('/checkout')}
                        sx={{
                           margin: '0 1rem',
                           '@media (max-width: 1200px)': {
                              margin: '0 0.5rem',
                           },
                           '& svg': {
                              '@media (max-width: 1200px)': {
                                 fontSize: '1.3rem',
                              },
                           },
                           cursor: 'pointer',
                           '&:hover svg': { color: '#000000' },
                           '&:hover p': { color: '#000000' },
                        }}
                     >
                        <Badge
                           badgeContent={cart?.reduce(
                              (prev, curr) => prev + curr.quantity,

                              0
                           )}
                           sx={{
                              '& .MuiBadge-badge': {
                                 background: '#4D4D4D',
                                 color: '#ffffff',
                                 fontWeight: 600,
                              },
                           }}
                        >
                           <ShoppingCartIcon color='action' />
                        </Badge>
                        <Typography
                           sx={{
                              ml: 1,
                              fontSize: '14px',
                              '@media (max-width: 1200px)': {
                                 fontSize: '14px',
                              },
                           }}
                        >
                           Cart
                        </Typography>
                     </CartBox>
                     {user ? (
                        <>
                           <IconButton
                              sx={{
                                 bgcolor: 'primary.main',
                                 ml: '0.8rem',
                                 '@media (max-width: 1200px)': {
                                    marginLeft: '0.5rem',
                                 },
                                 boxShadow: '0px 4px 8px 0px rgba(0,0,0,0.1)',
                                 '&:hover': {
                                    bgcolor: 'primary.main',
                                    boxShadow:
                                       '0px 0px 5px 1px rgba(0,0,0,0.1)',
                                 },
                                 '& svg': {
                                    width: '1rem',
                                    height: '1rem',
                                    color: 'primary.dark',
                                    '@media (max-width: 1200px)': {
                                       // fontSize: '1.2rem',
                                    },
                                 },
                              }}
                              aria-label='delete'
                              onClick={handleAvatarClick}
                              aria-controls={open ? 'basic-menu' : undefined}
                              aria-haspopup='true'
                              aria-expanded={open ? 'true' : undefined}
                           >
                              <PersonIcon />
                           </IconButton>

                           <div>
                              <Menu
                                 id='basic-menu'
                                 anchorEl={avatarMenuEl}
                                 open={openAvatarMenu}
                                 onClose={handleMenuClose}
                                 MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                 }}
                              >
                                 <MenuItem
                                    onClick={handleClose}
                                    component={Link}
                                    to={`${
                                       role === 'Vendor'
                                          ? '/vendor/dashboard/profile'
                                          : '/user-dashboard/profile'
                                    }`}
                                 >
                                    Profile
                                 </MenuItem>

                                 <MenuItem onClick={handleLogout}>
                                    Logout
                                 </MenuItem>
                              </Menu>
                           </div>
                        </>
                     ) : (
                        <>
                           <YellowButton
                              style={{
                                 padding: '0.5rem 1rem',
                                 fontWeight: 'bold',
                              }}
                              onClick={() => dispatch(openLoginModal())}
                           >
                              Login or Register
                           </YellowButton>
                        </>
                     )}
                  </Nav>

                  {matchMd && !match600 && (
                     <CartBox onClick={() => setShowCart(true)}>
                        <Badge badgeContent={0} color='secondary'>
                           <ShoppingCartIcon color='action' />
                        </Badge>
                        <Typography sx={{ ml: 1 }}>Cart</Typography>
                     </CartBox>
                  )}
                  {
                     // * ===================== mobile search bar toggle button ==================
                     match600 && !mobileSearchbarOn && (
                        <IconButton
                           onClick={() => setMobileSearchbarOn(true)}
                           sx={{
                              color: 'primary.main',
                           }}
                        >
                           <SearchIcon />
                        </IconButton>
                     )
                  }

                  {match600 && mobileSearchbarOn && (
                     <ClickAwayListener
                        onClickAway={() => setMobileSearchbarOn(false)}
                     >
                        <Slide
                           direction='up'
                           in={match600 && mobileSearchbarOn}
                           mountOnEnter
                           unmountOnExit
                        >
                           <SearchBox
                              component='form'
                              onSubmit={searchClickHandler}
                              sx={{
                                 flex: 1,
                                 transition: 'all 0.3s ease',
                              }}
                           >
                              <input
                                 type='text'
                                 placeholder='ex: solar panel, batteries...'
                                 onChange={(e) => setSearchTerm(e.target.value)}
                                 onFocus={() => setShowResultBox(true)}
                                 value={searchTerm}
                                 ref={searchInputRef}
                              />
                              <SearchIconBox>
                                 <SearchIcon />
                                 <Typography
                                    variant='h6'
                                    color='#4d4d4d'
                                    sx={{
                                       display: { xs: 'none', sm: 'block' },
                                    }}
                                 ></Typography>
                              </SearchIconBox>
                              <Box
                                 sx={{
                                    position: 'absolute',
                                    maxHeight: '400px',
                                    width: '100%',
                                    background: '#ffffff',
                                    borderRadius: ' 0.5rem',
                                    boxShadow:
                                       '0 0.5rem 1rem rgba(0, 0, 0, 0.1)',
                                    border: '1px solid #e6e6e6',
                                    top: '110%',
                                    left: 0,
                                    zIndex: 150000,
                                    padding: '1rem',
                                    display: showResultBox ? 'block' : 'none',
                                    overflowY: 'auto',
                                 }}
                                 ref={resultBoxRef}
                              >
                                 {searching && <Loader />}

                                 {!searching && searchData.length === 0 && (
                                    <Typography>
                                       Write something to search
                                    </Typography>
                                 )}

                                 {searchData.length > 0 &&
                                    searchData?.map((item) => (
                                       <ResultItem
                                          onClick={() =>
                                             goToProduct(
                                                item.product_slug,
                                                item.product_id
                                             )
                                          }
                                       >
                                          <Box className='imageBox'>
                                             <img
                                                src={item?.default_image}
                                                alt='default'
                                             />
                                          </Box>
                                          <Typography>
                                             {item?.product_name}
                                          </Typography>
                                       </ResultItem>
                                    ))}
                              </Box>
                           </SearchBox>
                        </Slide>
                     </ClickAwayListener>
                  )}
               </Header>

               {/* mobile search bar */}
            </Container>

            {/* <CustomDrawer open={mobileOpen} handleToggle={handleDrawerToggle} /> */}
            {/* ============ main mobile drawer for menus ============ */}
            <Drawer
               anchor='left'
               open={openDrawer && matchMd}
               onClose={() => setOpenDrawer(false)}
            >
               <Box
                  sx={{
                     bgcolor: '#F3F3F3',
                     height: '100vh',
                     minWidth: '250px',
                     position: 'relative',
                  }}
               >
                  <ArrowBackIosIcon
                     sx={{
                        position: 'absolute',
                        color: '#ffffff',
                        fontSize: '1.2rem',
                        top: '10px',
                        right: '10px',
                        cursor: 'pointer',
                     }}
                     onClick={() => setOpenDrawer(false)}
                  />
                  <LogoBoxInDrawer>
                     <img
                        src='https://i.ibb.co/kmDKGGw/51-1.png'
                        alt=''
                        style={{ maxWidth: '200px' }}
                     />
                  </LogoBoxInDrawer>
                  {drawer}
                  <DrawerFooter>
                     <Divider />
                     <FooterMenus
                        sx={{ p: '1rem 0', backgroundColor: 'primary.light' }}
                     >
                        {user && (
                           <>
                              <FooterMenu
                                 component={Link}
                                 to={`${
                                    role === 'Vendor'
                                       ? '/vendor/dashboard/profile'
                                       : '/user-dashboard/profile'
                                 }`}
                              >
                                 <PersonIcon />
                                 <Typography
                                    fontWeight={600}
                                    sx={{ color: '#000' }}
                                 >
                                    Profile
                                 </Typography>
                              </FooterMenu>

                              <FooterMenu onClick={handleLogout}>
                                 <LogoutIcon />
                                 <Typography
                                    fontWeight={600}
                                    sx={{ color: '#000' }}
                                 >
                                    Logout
                                 </Typography>
                              </FooterMenu>
                           </>
                        )}

                        {!user && (
                           <FooterMenu
                              onClick={() => dispatch(openLoginModal())}
                           >
                              <LoginIcon />
                              <Typography
                                 fontWeight={600}
                                 sx={{ color: '#000' }}
                              >
                                 Login or Register
                              </Typography>
                           </FooterMenu>
                        )}
                     </FooterMenus>
                  </DrawerFooter>
               </Box>
            </Drawer>

            <Dialog
               sx={{ top: '0' }}
               fullScreen
               open={showCart}
               onCLose={() => setShowCart(false)}
            >
               <Box
                  sx={modalTopBackButtonStyle}
                  onClick={() => setShowCart(false)}
               >
                  <KeyboardBackspace />
                  <Box>Back</Box>
               </Box>
               <Box sx={{ mt: 10, pb: 5 }}>
                  <Checkout />
               </Box>
            </Dialog>
         </Wrapper>
      </>
   );
};

export default MainHeader;
