import React, {useState} from 'react';
import {
	Badge,
	Box,
	Button,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
	useMediaQuery,
} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MenuIcon from '@mui/icons-material/Menu';
import DrawerComponent from './DrawerComponent';

const Navbar = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [drawer, setDrawer] = useState<boolean>(false);
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(e.currentTarget);
		console.log('currentTarget', e.currentTarget);
	};
	const theme = useTheme();
	// const matches = useMediaQuery('(max-width:600px)');
	// const matches = useMediaQuery(theme.breakpoints.up('md'));
	const matches = useMediaQuery(theme.breakpoints.down('md'));
	console.log('matches ', matches, 'drawer ', drawer);
	const handleClose = () => setAnchorEl(null);
	const open = Boolean(anchorEl);

	// useEffect(() => {
	// 	setDrawer(matches);
	// }, [matches]);
	console.log('drawer ', drawer);
	return (
		// <AppBar elevation={0} color='transparent'>
		<>
			<DrawerComponent _driver={drawer} method={() => setDrawer(false)} />
			<Box sx={{backgroundColor: 'white', marginBottom: '20px'}}>
				<Toolbar>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							width: '100%',
							alignItems: 'center',
						}}
						component='div'>
						{/*logo*/}
						<Box>
							<IconButton>
								<ShoppingBagIcon sx={{fontSize: '2.4rem'}} />
							</IconButton>
						</Box>
						{/*links	*/}

						{matches ? (
							<Box>
								<IconButton onClick={() => setDrawer(true)}>
									<MenuIcon sx={{fontSize: '2.4rem'}} />
								</IconButton>
							</Box>
						) : (
							<Box sx={{display: 'flex'}}>
								<Typography
									sx={{
										marginRight: '20px',
										cursor: 'pointer',
										color: '#616161',
									}}>
									Home
								</Typography>
								<Typography
									sx={{
										marginRight: '20px',
										cursor: 'pointer',
										color: '#616161',
									}}>
									Brand
								</Typography>
								<Typography
									onClick={handleClick}
									sx={{
										marginRight: '20px',
										cursor: 'pointer',
										color: '#616161',
									}}
									aria-controls={open ? 'basic-menu' : undefined}
									aria-haspopup='true'
									aria-expanded={open ? true : undefined}>
									Categories
								</Typography>
								{/*DropDown Items*/}
								<Menu
									id='basic-menu'
									anchorEl={anchorEl}
									open={open}
									onClose={handleClose}>
									<MenuItem onClick={handleClose}>Men</MenuItem>
									<MenuItem onClick={handleClose}>Women</MenuItem>
									<MenuItem onClick={handleClose}>Phones</MenuItem>
									<MenuItem onClick={handleClose}>Accessories</MenuItem>
									<MenuItem onClick={handleClose}>Others</MenuItem>
								</Menu>
								<Typography
									sx={{
										marginRight: '20px',
										cursor: 'pointer',
										color: '#616161',
									}}>
									Man
								</Typography>
								<Typography
									sx={{
										marginRight: '20px',
										cursor: 'pointer',
										color: '#616161',
									}}>
									Women
								</Typography>
								<Typography
									sx={{
										marginRight: '20px',
										cursor: 'pointer',
										color: '#616161',
									}}>
									FAQ
								</Typography>
							</Box>
						)}

						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}>
							<Button
								sx={{background: '#ff4081', marginRight: '5px'}}
								disableElevation
								variant='contained'>
								Account
							</Button>
							<IconButton>
								<Badge badgeContent={4} color='primary'>
									<ShoppingBasketIcon color='action' />
								</Badge>
							</IconButton>
						</Box>
					</Box>
				</Toolbar>
			</Box>
		</>
	);
};

export default Navbar;
