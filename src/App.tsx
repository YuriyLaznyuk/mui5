import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import ProductContainer from './components/Products/ProductContainer';
// import ResponsiveAppBar from './components/ResponsiveAppBar/ResponsiveAppBar';

const App = () => {
	return (
		<>
			<Navbar />
			{/*<ResponsiveAppBar />*/}
			<Header />
			<ProductContainer />
		</>
	);
};

export default App;
