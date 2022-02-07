import React, {useState} from 'react';
import {Box, Grid, Typography, Rating} from '@mui/material';
const image = require('../../assets/images/products/Image.png');
const image1 = require('../../assets/images/products/Image1.png');
const image2 = require('../../assets/images/products/Image2.png');
const image3 = require('../../assets/images/products/Image3.png');

const ProductsList = () => {
	const [value1, setValue1] = useState<number | null>(2);
	const [value2, setValue2] = useState<number | null>(2);
	const [value3, setValue3] = useState<number | null>(2);

	return (
		<Grid container spacing={2}>
			<Grid item md={3}>
				<Box sx={{width: '100%'}} component='img' src={image}></Box>
				<Typography variant='h6' sx={{fontWeight: 'bold'}}>
					Red shorts sport
				</Typography>
				<Typography>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
					blanditiis dolorem dolorum eligendi facere id nostrum numquam omnis
					quibusdam quos.
				</Typography>
				<Typography variant='h5' sx={{fontWeight: 'bold', color: '#ff6d00'}}>
					$90.00{' '}
				</Typography>
				<Typography variant='subtitle2' sx={{color: 'gray'}}>
					$5.95 for shipping
				</Typography>
				<Box>
					<Typography component='legend'>Controlled</Typography>
					<Rating
						name='simple-controlled'
						value={value1}
						onChange={(event, newValue) => {
							setValue1(newValue);
						}}
					/>
				</Box>
			</Grid>
			<Grid item md={3}>
				<Box sx={{width: '100%'}} component='img' src={image1}></Box>
				<Typography variant='h6' sx={{fontWeight: 'bold'}}>
					Red shorts sport
				</Typography>
				<Typography>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
					aperiam architecto eius est expedita explicabo optio repellendus
					tempore vero voluptatem.
				</Typography>
				<Typography variant='h5' sx={{fontWeight: 'bold', color: '#ff6d00'}}>
					$90.00{' '}
				</Typography>
				<Typography variant='subtitle2' sx={{color: 'gray'}}>
					$5.95 for shipping
				</Typography>
				<Box>
					<Typography component='legend'>Controlled</Typography>
					<Rating
						name='simple-controlled'
						value={value2}
						onChange={(event, newValue) => {
							setValue2(newValue);
						}}
					/>
				</Box>
			</Grid>
			<Grid item md={3}>
				<Box sx={{width: '100%'}} component='img' src={image2}></Box>
				<Typography variant='h6' sx={{fontWeight: 'bold'}}>
					Red shorts sport
				</Typography>
				<Typography>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
					dolores eos illo, labore libero nostrum quam quis repellat. Quae,
					saepe.
				</Typography>
				<Typography variant='h5' sx={{fontWeight: 'bold', color: '#ff6d00'}}>
					$90.00{' '}
				</Typography>
				<Typography variant='subtitle2' sx={{color: 'gray'}}>
					$5.95 for shipping
				</Typography>
				<Box>
					<Typography component='legend'>Controlled</Typography>
					<Rating
						name='simple-controlled'
						value={value3}
						onChange={(event, newValue) => {
							setValue3(newValue);
						}}
					/>
				</Box>
			</Grid>
			<Grid item md={3}>
				<Box sx={{width: '100%'}} component='img' src={image3}></Box>
				<Typography variant='h6' sx={{fontWeight: 'bold'}}>
					Red shorts sport
				</Typography>
				<Typography>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
					debitis ducimus ea eius fugiat nobis quae quis temporibus veniam
					voluptatem.
				</Typography>
				<Typography variant='h5' sx={{fontWeight: 'bold', color: '#ff6d00'}}>
					$90.00{' '}
				</Typography>
				<Typography variant='subtitle2' sx={{color: 'gray'}}>
					$5.95 for shipping
				</Typography>
				<Box>
					<Typography component='legend'>Controlled</Typography>
					<Rating name='half-rating' defaultValue={2.5} precision={0.5} />
				</Box>
			</Grid>
		</Grid>
	);
};

export default ProductsList;
