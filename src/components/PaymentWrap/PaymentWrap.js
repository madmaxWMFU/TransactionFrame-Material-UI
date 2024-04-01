import * as React from "react";
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import { Divider, Paper } from '@mui/material';
import PaymentInfo from "../PaymentInfo";
import PaymentSummary from '../PaymentSummary';

function PaymentWrap() {
  	return (
		<Paper 
			sx={{ 
				fontFamily: 'sans-serif',
				margin: '20px auto', 
				width: {
					xs: 'auto',
					sm: 'auto',
					md: '727px',
				}
			}} 
			elevation={4}
		>
			<Box sx={{ flexGrow: 1 }}> 
				<Grid 
					container 
					justifyContent='space-around'
				>
					<Grid 
						xs={12} 
						sm={12} 
						md={7} 
						p={1.5}
					>   
						<PaymentInfo />
					</Grid>
					<Divider 
						xs={0} 
						sm={0} 
						md={1} 
						orientation='vertical' 
						flexItem  
					/>
					<Grid 
						xs={12} 
						sm={12} 
						md={4} 
						p={1.5}
					>
						<PaymentSummary />
					</Grid>
				</Grid>
			</Box>
		</Paper>
  	);
}

export default PaymentWrap;
    