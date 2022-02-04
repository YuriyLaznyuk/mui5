import React, {useEffect, useState} from 'react';
import {DataGrid, GridColDef, GridRowsProp} from '@mui/x-data-grid';
import {Box} from '@mui/material';

// const rows: GridRowsProp = [
// 	{id: 1, name: 'Vasia', score: 5, email: 'vasia@ukr.net', age: 21},
// 	{id: 2, name: 'Tolik', score: 4, email: 'Tolik@ukr.net', age: 22},
// 	{id: 3, name: 'Tania', score: 7, email: 'Tania@ukr.net', age: 19},
// 	{id: 4, name: 'Ania', score: 8, email: 'Ania@ukr.net', age: 28},
// 	{id: 5, name: 'Zina', score: 6, email: 'Zina@ukr.net', age: 20},
// 	{id: 6, name: 'Boris', score: 5, email: 'Boris@ukr.net', age: 23},
// 	{id: 7, name: 'Helen', score: 3, email: 'Helen@ukr.net', age: 29},
// ];
// const columns: GridColDef[] = [
// 	{field: 'name', headerName: 'students', width: 150},
// 	{field: 'score', headerName: 'score', width: 150},
// 	{field: 'age', headerName: 'age', width: 150},
// 	{field: 'email', headerName: 'email', width: 150},
// ];
const columns: GridColDef[] = [
	{field: 'username', headerName: 'username', width: 150},
	{field: 'city', headerName: 'city', width: 150},
	{field: 'email', headerName: 'email', width: 150},
];

export interface IUser {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
}

const fetchData = async () => {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		return response.json();
	} catch (e) {
		console.log(e);
	}
};
const trim = (users: any) => {
	return users.length > 0
		? users.map((user: IUser) => {
				return {
					id: user.id,
					username: user.username,
					email: user.email,
					city: user.address.city,
				};
		  })
		: '';
};
const DataGridMui = () => {
	const [user, setUser] = useState([]);
	console.log('user ', user);
	useEffect(() => {
		setTimeout(() => fetchData().then((data) => setUser(data)), 2000);
	}, []);

	const rows: GridRowsProp = trim(user);
	const loading = (user: any) => (user.length ? false : true);
	return (
		<Box
			component={'div'}
			sx={{width: '80%', height: '500px', margin: '20px auto'}}>
			<DataGrid
				checkboxSelection
				loading={loading(user)}
				rows={rows}
				columns={columns}
				autoHeight
				aria-label='users table'
			/>
		</Box>
	);
};

export default DataGridMui;
