import React from 'react';
import {Box, Typography} from '@mui/material';
import header from '../../assets/images/header.png';

const Header = () => {
	return (
		<Box
			sx={{
				minHeight: '80vh',
				background: `no-repeat  url(${header})`,
			}}>
			<Box
				component='div'
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'start',
					height: '80vh',
					ml: 3,
				}}>
				<Typography
					sx={{fontFamily: 'cursive', fontWeight: 'bold', color: '#f8bbd0'}}
					variant='h2'>
					Find Your New Favorite
				</Typography>

				<Typography
					sx={{fontFamily: 'cursive', fontWeight: 'bold', color: '#f8bbd0'}}
					variant='h3'>
					Collection at Winter
				</Typography>

				<Typography
					sx={{fontFamily: 'cursive', fontWeight: 'bold', color: '#f8bbd0'}}
					variant='h4'>
					sale 2022
				</Typography>
			</Box>
		</Box>
	);
};

export default Header;
