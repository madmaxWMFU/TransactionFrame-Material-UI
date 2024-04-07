import React from 'react';
import ReactDOM from 'react-dom/client';
import PaymentWrap from './components/PaymentWrap';
import EditSelectionWrap from './components/EditSelectionWrap';
import PaymentCustomiseWrap from './components/PaymentCustomiseWrap';
import { Box, Grid } from '@mui/material';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Box sx={{ flexGrow: 1 }}> 
		<Grid 
			container 
			justifyContent='space-between'
		>
			<Grid 
				item
				xs={12} 
				sm={12}
				md={3}
				lg={4}
			>   
				<PaymentCustomiseWrap />
			</Grid>
			<Grid 
				item
				xs={12} 
				sm={12} 
				md={9}
				lg={8}
			>
				<EditSelectionWrap />
				<PaymentWrap />
			</Grid>
		</Grid>
	</Box>
);
