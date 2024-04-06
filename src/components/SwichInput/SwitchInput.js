import { Switch, styled } from '@mui/material';

const FormSwitchInput = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    marginLeft: '10px',
    '&:active': {
        '& .MuiSwitch-thumb': {
            width: 15,
        },
        '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
        },
    },
    '& .MuiSwitch-sizeMedium': {
        backgroundColor: '#E9E6EF'
    },
    '& .MuiSwitch-switchBase': {
        padding: 0,
        '&.Mui-checked': {
            transform: 'translateX(12px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#E9E6EF' : '#4723AD',
            },

            '& .MuiSwitch-thumb': {
                width: 12,
                height: 12,
                backgroundColor: '#fff',
                border: 'solid 2px #4723AD',
                margin: 0
            }
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
        width: '9px',
        height: '9px',
        margin: '3.5px 0 0 4px',
        borderRadius: 8,
        backgroundColor: '#4723AD',
        transition: theme.transitions.create(['width'], {
            duration: 200,
        }),
    },
    '& .MuiSwitch-track': {
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor:
            theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(233, 230, 239, 1)',
        boxSizing: 'border-box',
    },
}));

export default FormSwitchInput;
