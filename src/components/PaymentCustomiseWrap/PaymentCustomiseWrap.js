import { Box, Typography, Divider, Stack, TextField, MenuItem, Button, ToggleButtonGroup, ToggleButton, InputAdornment } from "@mui/material";
import SwitchInput from '../SwichInput';
import enIcon from '../../assets/Linear/en.svg';
import AlignLeft from '../../assets/Linear/AlignLeft.svg';
import AlignCenter from '../../assets/Linear/AlignCenter.svg';
import AlignRight from '../../assets/Linear/AlignRight.svg';
import { useState } from "react";
import { sides } from "@floating-ui/utils";

const currencies = [
    {
      value: 'USD',
      label: 'USD',
    },
    {
      value: 'EUR',
      label: 'EUR',
    },
    {
      value: 'BTC',
      label: 'BTC',
    },
    {
      value: 'JPY',
      label: 'JPY',
    },
];

const langs = [
    {
      value: 'EN',
      label: 'EN',
      icon: enIcon,
    },
    {
      value: 'ES',
      label: 'ES',
      icon: enIcon,
    },
    {
      value: 'DE',
      label: 'DE',
      icon: enIcon,
    },
    {
      value: 'FR',
      label: 'FR',
      icon: enIcon,
    },
];

const numList = [
    {
        value: '1px',
        label: '1', 
    },
    {
        value: '2px',
        label: '2', 
    },
    {
        value: '3px',
        label: '3', 
    },
    {
        value: '4px',
        label: '4', 
    },
    {
        value: '5px',
        label: '5', 
    },
    {
        value: '6px',
        label: '6', 
    },
    {
        value: '7px',
        label: '7', 
    },
    {
        value: '8px',
        label: '8', 
    },
    {
        value: '9px',
        label: '9', 
    },
    {
        value: '10px',
        label: '10', 
    },
    {
        value: '11px',
        label: '11', 
    },
    {
        value: '12px',
        label: '12', 
    },
    {
        value: '13px',
        label: '13', 
    },
    {
        value: '14px',
        label: '14', 
    },
    {
        value: '15px',
        label: '15', 
    },
    {
        value: '16px',
        label: '16', 
    }
];

const fontList = [
    {
        value: 'Inter',
        label: 'Inter'
    },
    {
        value: 'sans-serif',
        label: 'Sans-Serif'
    },
    {
        value: 'Roboto',
        label: 'Roboto'
    },
    {
        value: 'Arial',
        label: 'Arial'
    },
];  


function PaymentCustomiseWrap() {
    const [formats, setFormats] = useState();
    const [ backgroundColor, setBgColor ] = useState('#F6F6F6');
    const [ fieldColor, setFieldColor ] = useState('#FFFFFF');
    const [ lineColor, setLineColor ] = useState('#E9E6EF');
    const [ iconColor, setIconColor ] = useState('#4723AD');
    const [ btnColor, setBtnColor ] = useState('#4723AD');

    const handleFormatChange = ( event, updatedFormats ) => {
        setFormats(updatedFormats)
    }

    const handleBgColorChange = ({ target }) => {
        console.log(target.value)
        setBgColor(target.value)
    }

    const handleFieldColorChange = ({ target }) => {
        console.log(target.value)
        setFieldColor(target.value)
    }

    const handleLineColorChange = ({ target }) => {
        console.log(target.value)
        setLineColor(target.value)
    }

    const handleIconColorChange = ({ target }) => {
        console.log(target.value)
        setIconColor(target.value)
    }

    const handleBtnColorChange = ({ target }) => {
        console.log(target.value)
        setBtnColor(target.value)
    }


    return(
        <Box m={2}>
            <Typography 
				variant='subtitle2' 
				component='b' 
				sx={{
					fontSize: '18px',
					lineHeight: '21.78px',
					color: '#2E2A36',
					fontWeight: '600'
				}}
			>
				Transaction Customise
			</Typography>
            <Stack>
                <Stack direction="row" justifyContent='space-between' alignItems='center' >
                    <Typography
                        sx={{
                            fontSize: '12px',
                            lineHeight: '14.52px',
                            color: '#2E2A36',
                            fontWeight: '600',
                            margin: '10px 0'
                        }}
                    >
                        Dark Mode
                    </Typography> 
                    <SwitchInput />
                </Stack>
                <Divider sx={{ margin: '5px 0' }} />
                <Box>
                    <Typography
                        sx={{
                            fontSize: '16px',
                            lineHeight: '19.36px',
                            color: '#2E2A36',
                            fontWeight: '600',
                            margin: '10px 0'
                        }}
                    >
                        Payment Method Page
                    </Typography>
                    <Stack direction="row" justifyContent='space-between' alignItems='center' >
                        <Typography
                            sx={{
                                fontSize: '12px',
                                lineHeight: '14.52px',
                                color: '#2E2A36',
                                fontWeight: '600',
                                margin: '10px 0'
                            }}
                        >
                            Default Language
                        </Typography> 
                        <TextField
                            select
                            defaultValue="EN"
                            sx={{
                                width: '71px',
                                height: '25px',
                                '& .MuiSelect-select': {
                                    padding: '2px 8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontSize: '6px'
                                }
                            }}
                        >
                            {langs.map(({ value, label, icon }) => (
                                <MenuItem 
                                    key={value} 
                                    value={value}
                                    sx={{
                                        padding: '2px 8px',
                                        fontSize: '10px'
                                    }}
                                >
                                    <img src={icon} alt={`icon`} />
                                    {label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Stack>
                    <Stack direction="row" justifyContent='space-between' alignItems='center' >
                        <Typography
                            sx={{
                                fontSize: '12px',
                                lineHeight: '14.52px',
                                color: '#2E2A36',
                                fontWeight: '600',
                                margin: '10px 0'
                            }}
                        >
                            Currency
                        </Typography> 
                        <TextField
                            select
                            defaultValue="USD"
                            sx={{
                                width: '71px',
                                height: '25px',
                                '& .MuiSelect-select': {
                                    padding: '2px 8px',
                                    fontSize: '12px'
                                }
                            }}
                        >
                            {currencies.map(({ value, label, icon }) => (
                                <MenuItem 
                                    key={value} 
                                    value={value}
                                    sx={{
                                        padding: '2px 8px',
                                        fontSize: '10px',
                                        justifyContent: 'center'
                                    }}
                                >
                                    {label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Stack>
                    <Stack direction="row" justifyContent='space-between' alignItems='center' >
                        <Typography
                            sx={{
                                fontSize: '12px',
                                lineHeight: '14.52px',
                                color: '#2E2A36',
                                fontWeight: '600',
                                margin: '10px 0'
                            }}
                        >
                            Separate Page
                        </Typography> 
                        <SwitchInput />
                    </Stack>
                    <Stack direction="row" justifyContent='space-between' alignItems='center' >
                        <Typography
                            sx={{
                                fontSize: '12px',
                                lineHeight: '14.52px',
                                color: '#2E2A36',
                                fontWeight: '600',
                                margin: '10px 0'
                            }}
                        >
                            Minimal View
                        </Typography> 
                        <SwitchInput />
                    </Stack>
                    <Stack direction="row" justifyContent='space-between' alignItems='center' >
                        <Typography
                            sx={{
                                fontSize: '12px',
                                lineHeight: '14.52px',
                                color: '#2E2A36',
                                fontWeight: '600',
                                margin: '10px 0'
                            }}
                        >
                            Basic View
                        </Typography> 
                        <SwitchInput checked='checked' />
                    </Stack>
                    <Stack direction="row" justifyContent='space-between' alignItems='center' >
                        <Typography
                            sx={{
                                fontSize: '12px',
                                lineHeight: '14.52px',
                                color: '#2E2A36',
                                fontWeight: '600',
                                margin: '10px 0'
                            }}
                        >
                            Advanced View
                        </Typography> 
                        <SwitchInput />
                    </Stack>
                </Box>
                <Divider sx={{ margin: '5px 0' }} />
                <Box>
                    <Typography
                        sx={{
                            fontSize: '16px',
                            lineHeight: '19.36px',
                            color: '#2E2A36',
                            fontWeight: '600',
                            margin: '10px 0'
                        }}
                    >
                        Style and Branding
                    </Typography>
                    <Stack direction="row" justifyContent='space-between' alignItems='center' >
                        <Typography
                            sx={{
                                fontSize: '12px',
                                lineHeight: '14.52px',
                                color: '#2E2A36',
                                fontWeight: '600',
                                margin: '10px 0'
                            }}
                        >
                            Font
                        </Typography> 
                        <TextField
                            select
                            defaultValue="Inter"
                            sx={{
                                width: '71px',
                                height: '25px',
                                '& .MuiSelect-select': {
                                    padding: '2px 12px',
                                    fontSize: '12px'
                                }
                            }}
                        >
                            {fontList.map(({ value, label, icon }) => (
                                <MenuItem 
                                    key={value} 
                                    value={value}
                                    sx={{
                                        padding: '2px 12px',
                                        fontSize: '12px',
                                        justifyContent: 'center'
                                    }}
                                >
                                    {label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Stack>
                    <Stack direction="row" justifyContent='space-between' alignItems='center' >
                        <Typography
                            sx={{
                                fontSize: '12px',
                                lineHeight: '14.52px',
                                color: '#2E2A36',
                                fontWeight: '600',
                                margin: '10px 0'
                            }}
                        >
                            Font Size
                        </Typography> 
                        <TextField
                            select
                            defaultValue="16px"
                            sx={{
                                width: '71px',
                                height: '25px',
                                '& .MuiSelect-select': {
                                    padding: '2px 12px',
                                    fontSize: '12px'
                                }
                            }}
                        >
                            {numList.map(({ value, label, icon }) => (
                                <MenuItem 
                                    key={value} 
                                    value={value}
                                    sx={{
                                        padding: '2px 12px',
                                        fontSize: '12px',
                                        justifyContent: 'center'
                                    }}
                                >
                                    {label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Stack>
                    <Stack direction="row" justifyContent='space-between' alignItems='center' >
                        <Typography
                            sx={{
                                fontSize: '12px',
                                lineHeight: '14.52px',
                                color: '#2E2A36',
                                fontWeight: '600',
                                margin: '10px 0'
                            }}
                        >
                            Corner radius
                        </Typography> 
                        <TextField
                            select
                            defaultValue="7px"
                            sx={{
                                width: '71px',
                                height: '25px',
                                '& .MuiSelect-select': {
                                    padding: '2px 12px',
                                    fontSize: '12px'
                                }
                            }}
                        >
                            {numList.map(({ value, label, icon }) => (
                                <MenuItem 
                                    key={value} 
                                    value={value}
                                    sx={{
                                        padding: '2px 12px',
                                        fontSize: '12px',
                                        justifyContent: 'center'
                                    }}
                                >
                                    {label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Stack>
                    <Stack direction="row" justifyContent='space-between' alignItems='center' >
                        <Typography
                            sx={{
                                fontSize: '12px',
                                lineHeight: '14.52px',
                                color: '#2E2A36',
                                fontWeight: '600',
                                margin: '10px 0'
                            }}
                        >
                            Background Color 
                        </Typography> 
                        <Stack direction='row'>
                            <Box 
                                sx={{
                                    height: '25px',
                                    width: '25px',
                                    border: 'solid 1px #E9E6EF',
                                    borderRight: '0',
                                    borderRadius: '4px 0 0 4px',
                                    backgroundColor
                                }}
                            ></Box>
                            <TextField
                                defaultValue='#F6F6F6'
                                value={backgroundColor}
                                onChange={handleBgColorChange}
                                sx={{
                                    height: '25px',
                                    width: '80px',
                                    border: 'solid 1px #E9E6EF',
                                    borderRadius: '0 4px 4px 0',
                                    '& fieldset': {
                                        border: 'none'
                                    },
                                    '& input': {
                                        padding: '5px 10px',
                                        color: '#4723ad',
                                        fontSize: '12px',
                                        lineHeight: '14.52px'
                                    }
                                }}
                            />
                        </Stack>
                    </Stack>
                    <Stack direction="row" justifyContent='space-between' alignItems='center' >
                        <Typography
                            sx={{
                                fontSize: '12px',
                                lineHeight: '14.52px',
                                color: '#2E2A36',
                                fontWeight: '600',
                                margin: '10px 0'
                            }}
                        >
                            Field Color 
                        </Typography> 
                        <Stack direction='row'>
                            <Box 
                                sx={{
                                    height: '25px',
                                    width: '25px',
                                    border: 'solid 1px #E9E6EF',
                                    borderRight: '0',
                                    borderRadius: '4px 0 0 4px',
                                    backgroundColor: fieldColor
                                }}
                            ></Box>
                            <TextField
                                defaultValue='#FFFFFF'
                                onChange={handleFieldColorChange}
                                sx={{
                                    height: '25px',
                                    width: '80px',
                                    border: 'solid 1px #E9E6EF',
                                    borderRadius: '0 4px 4px 0',
                                    '& fieldset': {
                                        border: 'none'
                                    },
                                    '& input': {
                                        padding: '5px 10px',
                                        color: '#4723ad',
                                        fontSize: '12px',
                                        lineHeight: '14.52px'
                                    }
                                }}
                            ></TextField>
                        </Stack>
                    </Stack>
                    <Stack direction="row" justifyContent='space-between' alignItems='center' >
                        <Typography
                            sx={{
                                fontSize: '12px',
                                lineHeight: '14.52px',
                                color: '#2E2A36',
                                fontWeight: '600',
                                margin: '10px 0'
                            }}
                        >
                            Line Color 
                        </Typography> 
                        <Stack direction='row'>
                            <Box 
                                sx={{
                                    height: '25px',
                                    width: '25px',
                                    border: 'solid 1px #E9E6EF',
                                    borderRight: '0',
                                    borderRadius: '4px 0 0 4px',
                                    backgroundColor: lineColor
                                }}
                            ></Box>
                            <TextField
                                defaultValue='#E9E6EF'
                                onChange={handleLineColorChange}
                                sx={{
                                    height: '25px',
                                    width: '80px',
                                    border: 'solid 1px #E9E6EF',
                                    borderRadius: '0 4px 4px 0',
                                    '& fieldset': {
                                        border: 'none'
                                    },
                                    '& input': {
                                        padding: '5px 10px',
                                        color: '#4723ad',
                                        fontSize: '12px',
                                        lineHeight: '14.52px',
                                    }
                                }}
                            ></TextField>
                        </Stack>
                    </Stack>
                    <Stack direction="row" justifyContent='space-between' alignItems='center' >
                        <Typography
                            sx={{
                                fontSize: '12px',
                                lineHeight: '14.52px',
                                color: '#2E2A36',
                                fontWeight: '600',
                                margin: '10px 0'
                            }}
                        >
                            Icon Color 
                        </Typography> 
                        <Stack direction='row'>
                            <Box 
                                sx={{
                                    height: '25px',
                                    width: '25px',
                                    border: 'solid 1px #E9E6EF',
                                    borderRight: '0',
                                    borderRadius: '4px 0 0 4px',
                                    backgroundColor: iconColor
                                }}
                            ></Box>
                            <TextField
                                defaultValue='#4723AD'
                                onChange={handleIconColorChange}
                                sx={{
                                    height: '25px',
                                    width: '80px',
                                    border: 'solid 1px #E9E6EF',
                                    borderRadius: '0 4px 4px 0',
                                    '& fieldset': {
                                        border: 'none'
                                    },
                                    '& input': {
                                        padding: '5px 10px',
                                        color: '#4723ad',
                                        fontSize: '12px',
                                        lineHeight: '14.52px',
                                    }
                                }}
                            ></TextField>
                        </Stack>
                    </Stack>
                    <Stack direction="row" justifyContent='space-between' alignItems='center' >
                        <Typography
                            sx={{
                                fontSize: '12px',
                                lineHeight: '14.52px',
                                color: '#2E2A36',
                                fontWeight: '600',
                                margin: '10px 0'
                            }}
                        >
                            Button Text
                        </Typography> 
                        <TextField
                                InputProps={{
                                    startAdornment: <InputAdornment position="start" sx={{ '& p': { fontSize: '9px' }}}>max:15</InputAdornment>,
                                }}
                                sx={{
                                    height: '25px',
                                    width: '160px',
                                    border: 'solid 1px #E9E6EF',
                                    borderRadius: '4px',
                                    '& fieldset': {
                                        border: 'none'
                                    },
                                    '& input': {
                                        padding: '1px 10px',
                                        color: '#4723ad',
                                        textAlign: 'end'
                                    },
                                    '&>div': {
                                        paddingLeft: '5px'
                                    }
                                }}
                                
                            />
                    </Stack>
                    <Stack direction="row" justifyContent='space-between' alignItems='center' >
                        <Typography
                            sx={{
                                fontSize: '12px',
                                lineHeight: '14.52px',
                                color: '#2E2A36',
                                fontWeight: '600',
                                margin: '10px 0'
                            }}
                        >
                            Button Color 
                        </Typography> 
                        <Stack direction='row'>
                            <Box 
                                sx={{
                                    height: '25px',
                                    width: '25px',
                                    border: 'solid 1px #E9E6EF',
                                    borderRight: '0',
                                    borderRadius: '4px 0 0 4px',
                                    backgroundColor: btnColor
                                }}
                            ></Box>
                            <TextField
                                defaultValue='#4723AD'
                                onChange={handleBtnColorChange}
                                sx={{
                                    height: '25px',
                                    width: '80px',
                                    border: 'solid 1px #E9E6EF',
                                    borderRadius: '0 4px 4px 0',
                                    '& fieldset': {
                                        border: 'none'
                                    },
                                    '& input': {
                                        padding: '5px 10px',
                                        color: '#4723ad',
                                        fontSize: '12px',
                                        lineHeight: '14.52px'
                                    }
                                }}
                            ></TextField>
                        </Stack>
                    </Stack>
                </Box>
                <Divider sx={{ margin: '5px 0' }} />
                <Stack direction="row" justifyContent='space-between' flexWrap='wrap' alignItems='center' >
                    <Typography
                        sx={{
                            fontSize: '12px',
                            lineHeight: '14.52px',
                            color: '#2E2A36',
                            fontWeight: '600',
                            margin: '10px 0'
                        }}
                    >
                        Company Logo 
                    </Typography> 
                    <Button
                        variant="outlined"
                        component="label"
                        sx={{
                            padding: '2px, 10px',
                            textTransform: 'none',
                            border: 'solid 1px #E9E6EF',
                            color: '#000'
                        }}
                    >
                        Upload
                        <input
                            type="file"
                            hidden
                        />
                    </Button>
                    <Stack direction='row' sx={{ margin: '10px 0', '& button': { border: 'none' }}} >
                        <ToggleButtonGroup
                            exclusive
                            value={formats}
                            onChange={handleFormatChange}
                        >
                            <ToggleButton value='left'>
                                <img src={AlignLeft} alt={`AlignLeft`} />
                            </ToggleButton>
                            <ToggleButton value='center'>
                                <img src={AlignCenter} alt={`AlignCenter`} />
                            </ToggleButton>
                            <ToggleButton value='right'>
                                <img src={AlignRight} alt={`AlignRight`} />
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Stack>
                    <SwitchInput />
                </Stack>
            </Stack>
        </Box>
    );
}

export default PaymentCustomiseWrap;
