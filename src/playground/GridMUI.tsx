import React from 'react';
import {Grid} from '@mui/material';

const GridMui = () => {
	return (
		<>
			{/*<Grid container flexDirection='column'>*/}
			<Grid container spacing={3}>
				<Grid sx={{background: 'red'}} md={4} item>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
					aspernatur distinctio dolorem ducimus ea eos, est excepturi explicabo
					id impedit iste iusto labore laborum minus neque nobis non officiis
					perspiciatis quam quas quod repudiandae sapiente temporibus ut
					veritatis? Ipsam, officiis!
				</Grid>
				<Grid sx={{background: 'green'}} md={4} item>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
					aspernatur distinctio dolorem ducimus ea eos, est excepturi explicabo
					id impedit iste iusto labore laborum minus neque nobis non officiis
					perspiciatis quam quas quod repudiandae sapiente temporibus ut
					veritatis? Ipsam, officiis!
				</Grid>
				<Grid sx={{background: 'yellow'}} md={4} item>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
					aspernatur distinctio dolorem ducimus ea eos, est excepturi explicabo
					id impedit iste iusto labore laborum minus neque nobis non officiis
					perspiciatis quam quas quod repudiandae sapiente temporibus ut
					veritatis? Ipsam, officiis!
				</Grid>
			</Grid>
		</>
	);
};

export default GridMui;
