import { createTheme } from "@mui/material";

export const paymentStyle = createTheme({
	palette: {
		primary: {
			// height: 614,
			// width: 727,
			// borderRadius: 10,
			// display: 'flex',
			// flexDirection: 'row',
			// justifyContent: 'space-around',
			// boxShadow: '0 4px 20px -8px rgba(46, 42, 54, 0.18)',
			// margin: '20px auto',
			main: '#e3e3e3'
		}
	},
	paymentWrap: {
		height: 614,
		width: 727,
		borderRadius: 10,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		boxShadow: '0 4px 20px -8px rgba(46, 42, 54, 0.18)',
		margin: '20px auto'
	}
});
