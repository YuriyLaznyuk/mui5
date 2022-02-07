import Box from '@mui/material/Box';
import React from 'react';
import {Button, Grid, Typography, useMediaQuery} from '@mui/material';
import product1 from '../../assets/images/products/f1.png';
import product2 from '../../assets/images/products/f2.png';
import DesktopCategories from './DesktopCategories';
import MobileCategory from './MobileCategory';
import ProductsList from './ProductsList';

const ProductContainer = () => {
	const matches = useMediaQuery('(min-width:600px)');
	console.log('matches min-width:600px : ', matches);
	return (
		<Box sx={{minHeight: '60vh', mr: 2, ml: 2, mt: -23}}>
			{/*Product*/}
			<Grid sx={{mb: 4}} container spacing={2}>
				<Grid
					sx={{
						display: 'flex',
						flexDirection: {xs: 'column', lg: 'row'},
						justifyContent: 'center',
						alignItems: 'center',
					}}
					md={6}
					item>
					<Box
						sx={{width: {xs: '100%', lg: '40%'}}}
						component='img'
						src={product1}></Box>
					<Box sx={{paddingLeft: '10px', mt: {xs: 2, lg: 25}}}>
						<Typography sx={{fontWeight: 'bold'}} variant='h6'>
							Winter suits 2021
						</Typography>
						<Typography>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi,
							vero.
						</Typography>
						<Typography
							sx={{fontWeight: 'bold', color: '#ff4081'}}
							variant='h6'>
							$520.00
						</Typography>
						<Button variant='outlined' size='medium'>
							Add to Cart
						</Button>
					</Box>
				</Grid>
				<Grid
					sx={{
						display: 'flex',
						flexDirection: {xs: 'column', lg: 'row'},
						justifyContent: 'center',
						alignItems: 'center',
					}}
					md={6}
					item>
					<Box
						sx={{width: {xs: '100%', lg: '40%'}}}
						component='img'
						src={product2}></Box>
					<Box sx={{paddingLeft: '10px', mt: {xs: 2, lg: 25}}}>
						<Typography sx={{fontWeight: 'bold'}} variant='h6'>
							Winter suits 2021
						</Typography>
						<Typography>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi,
							vero.
						</Typography>
						<Typography
							sx={{fontWeight: 'bold', color: '#ff4081'}}
							variant='h6'>
							$520.00
						</Typography>
						<Button variant='outlined' size='medium'>
							Add to Cart
						</Button>
					</Box>
				</Grid>
			</Grid>
			{/*DesktopCategories*/}
			<Box sx={{display: {xs: 'none', lg: 'block'}}}>
				<DesktopCategories />
			</Box>
			<Box sx={{display: {xs: 'block', lg: 'none'}}}>
				<MobileCategory />
			</Box>
			<ProductsList />
		</Box>
	);
};

export default ProductContainer;
