import {Autocomplete, TextField} from '@mui/material';
import React from 'react';

const MobileCategory = () => {
	const data = [
		{label: 'The Shawshank Redemption', year: 1994},
		{label: 'The Godfather', year: 1972},
		{label: 'The Godfather: Part II', year: 1974},
		{label: 'The Dark Knight', year: 2008},
	];
	return (
		<Autocomplete
			disablePortal
			id='combo-box-demo'
			options={data}
			sx={{width: 300, mt: 8, mb: 8}}
			renderInput={(params) => <TextField {...params} label='Select product' />}
		/>
	);
};

export default MobileCategory;
