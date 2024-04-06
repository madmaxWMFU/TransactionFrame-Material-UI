import * as React from "react";
import Grid from '@mui/system/Unstable_Grid';
import { Divider, Paper, Box } from '@mui/material';
import PaymentInfo from "../PaymentInfo";
import PaymentSummary from '../PaymentSummary';

function PaymentWrap() {
  	return (
		<Paper 
			sx={{ 
				fontFamily: 'sans-serif',
				margin: '15px 10px', 
				width: {
					xs: 'auto',
					sm: 'auto',
					md: 'auto',
					lg: 'auto',
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
    