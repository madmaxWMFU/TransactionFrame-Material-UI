import React from "react";
import { Typography, Box, Stack, Button, Link, Table, TableBody, TableRow, TableCell } from '@mui/material';
import { styled } from '@mui/material/styles';
import ApplePay from '../../assets/ApplePay.svg';
import GooglePay from '../../assets/GooglePay.svg';
import masterCardSecureCode from '../../assets/masterCardSecureCode.svg';
import pciCompliant from '../../assets/pciCompliant.svg';
import verifiedByVisa from '../../assets/verifiedByVisa.svg';
import visaSecure from '../../assets/visaSecure.svg';

const iconData = [
    {
      img: verifiedByVisa,
      title: 'verifiedByVisa',
    },
    {
      img: masterCardSecureCode,
      title: 'masterCardSecureCode',
    },
    {
      img: visaSecure,
      title: 'UnivisaSecureonPay',
    },
    {
      img: pciCompliant,
      title: 'pciCompliant',
    }
];

const summaryData = [
	{
		title: 'Amount',
		value: 1500
	},
	{
		title: 'Shipping',
		value: 50
	},
	{
		title: 'Tax',
		value: 10
	}
];

const ButtonPay = styled(Button)(({ theme }) => ({
    height: '44px',
	backgroundColor: '#2E2A36',
	color: '#fff',
	border: 'none',
	borderRadius: '10px',
	width: '100%',
	fontWight: '600',
	fontSize: '18px',
	lineHeight: '21.78px',
	textAlign: 'center',
	gap: '4px',
	cursor: 'pointer',
	'&:hover': {
		backgroundColor: '#3e454a'
	}
}));

function PaymentSummary() {
  	return (
		<Stack 
			direction='column' 
			sx={{ padding: '10px 0' }}
		>
			<Typography 
				variant='subtitle2' 
				component='b' 
				sx={{
					fontSize: '16px',
					lineHeight: '19.36px',
					color: '#2E2A36',
					fontWeight: '600'
				}}
			>
				Summary:
			</Typography>
			<Box mt={1.9} mb={1.9}>
				<Table>
					<TableBody>
						{summaryData.map(( item, key ) => {
							const { title, value } = item;
							return (<TableRow
								key={`summary${key}`}
								sx={{
									'& td, & th': { 
										border: 0,
										padding: '0 0 9px 0',
										fontSize: '16px',
										fontWeight: '400',
										lineHeight: '19.36px',
									},
								}}
							>
								<TableCell align="left" >{title}:</TableCell>
								<TableCell align="right" >$ {value}</TableCell>
							</TableRow>);
						})}
						<TableRow 
							key={`summary${summaryData.length}`}
							sx={{
								paddingBottom: '15px',
								'& td, & th': { 
									border: 0,
									borderTop: 'solid 1px #e5e5e5',
									padding: '10px 0',
									marginTop: '10px',
									fontSize: '16px',
									fontWeight: '600',
									lineHeight: '19.36px',
								}
							}}
						>
							<TableCell align="left" fontWeight='bord' >Total:</TableCell>
							<TableCell align="right" >$ {summaryData.reduce( (sum, { value } ) => { return sum += value }, 0)}</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</Box>
			<ButtonPay>
				PAY
			</ButtonPay>
			<Stack 
				direction='row'
				mt={1}
				mb={1}
				spacing={1}
			>
				<ButtonPay>
					<img
						key={`img${ApplePay}`}
						src={`${ApplePay}`}
						alt={ApplePay}
						loading="lazy"
					/>
				</ButtonPay>
				<ButtonPay>
					<img 
						key={`img${GooglePay}`} 
						src={`${GooglePay}`} 
						alt={GooglePay} 
						loading="lazy" 
					/>
				</ButtonPay>
			</Stack>
			<Typography 
				variant='subtitle2' 
				component='p' 
				mt={1} 
				mb={1} 
				sx={{ 
					fontSize: '11px',
					fontWeight: '500',
					textAlign: 'center',
					color: '#2E2A36'
				}}
			>
				By submiting your payment, you agree to the <Link href="#" color='secondary' underline='hover'>Terms and Conditions</Link> and <Link href="#" color='secondary' underline='hover'>Privacy Policy</Link>
			</Typography>
			<Stack 
				spacing={0.5} 
				direction='row' 
				justifyContent='space-between'
			>
				{iconData.map(( item, key ) => (
					<img 
						key={`img${key}`} 
						sx={{ 
							width: 24,
							height: 17
						}} 
						src={`${item.img}`} 
						alt={item.title} 
						loading="lazy" 
					/>
				))}
			</Stack>
		</Stack>
  	);
}

export default PaymentSummary;
