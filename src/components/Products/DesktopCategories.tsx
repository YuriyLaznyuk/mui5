import React from 'react';
import {Box, Grid, Typography} from '@mui/material';
const baby = require('../../assets/images/categories/babysitter.png');
const barley = require('../../assets/images/categories/barley.png');
const cinema = require('../../assets/images/categories/cinema.png');
const concert = require('../../assets/images/categories/concert.png');
const fitness = require('../../assets/images/categories/fitness.png');
const hanger = require('../../assets/images/categories/hanger.png');
const nuclear = require('../../assets/images/categories/nuclear.png');
const observation = require('../../assets/images/categories/observation.png');
const pets = require('../../assets/images/categories/pets.png');
const powerstation = require('../../assets/images/categories/powerstation.png');
const restaraunt = require('../../assets/images/categories/restaraunt.png');
const ship = require('../../assets/images/categories/ship.png');

const DesktopCategories = () => {
	return (
		<Grid sx={{border: '1px solid #e0e0e0', py: '4px'}} container>
			<Grid
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
				}}
				item
				md={1}>
				<Box sx={{width: '35px'}} component='img' src={baby} />
				<Typography>babysitter</Typography>
			</Grid>
			<Grid
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
				}}
				item
				md={1}>
				<Box sx={{width: '35px'}} component='img' src={barley} />
				<Typography>barley</Typography>
			</Grid>
			<Grid
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
				}}
				item
				md={1}>
				<Box sx={{width: '35px'}} component='img' src={cinema} />
				<Typography>cinema</Typography>
			</Grid>
			<Grid
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
				}}
				item
				md={1}>
				<Box sx={{width: '35px'}} component='img' src={concert} />
				<Typography>concert</Typography>
			</Grid>
			<Grid
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
				}}
				item
				md={1}>
				<Box sx={{width: '35px'}} component='img' src={fitness} />
				<Typography>fitness</Typography>
			</Grid>
			<Grid
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
				}}
				item
				md={1}>
				<Box sx={{width: '35px'}} component='img' src={hanger} />
				<Typography>hanger</Typography>
			</Grid>
			<Grid
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
				}}
				item
				md={1}>
				<Box sx={{width: '35px'}} component='img' src={nuclear} />
				<Typography>nuclear</Typography>
			</Grid>
			<Grid
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
				}}
				item
				md={1}>
				<Box sx={{width: '35px'}} component='img' src={observation} />
				<Typography>observation</Typography>
			</Grid>
			<Grid
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
				}}
				item
				md={1}>
				<Box sx={{width: '35px'}} component='img' src={pets} />
				<Typography>pets</Typography>
			</Grid>
			<Grid
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
				}}
				item
				md={1}>
				<Box sx={{width: '35px'}} component='img' src={powerstation} />
				<Typography>powerstation</Typography>
			</Grid>
			<Grid
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
				}}
				item
				md={1}>
				<Box sx={{width: '35px'}} component='img' src={restaraunt} />
				<Typography>restaraunt</Typography>
			</Grid>
			<Grid
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
				}}
				item
				md={1}>
				<Box sx={{width: '35px'}} component='img' src={ship} />
				<Typography>ship</Typography>
			</Grid>
		</Grid>
	);
};

export default DesktopCategories;
