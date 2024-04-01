import React from "react";
import Grid from '@mui/system/Unstable_Grid';
import { Typography, Box, Stack, TextField, Paper, InputAdornment } from '@mui/material';
import { styled } from '@mui/material/styles';
import Slider from "react-slick";
import Mastercard from '../../assets/Payment Method/Mastercard.svg';
import Amex from '../../assets/Payment Method/Amex.svg';
import JCB from '../../assets/Payment Method/JCB.svg';
import UnionPay from '../../assets/Payment Method/UnionPay.svg';
import Visa from '../../assets/Payment Method/Visa.svg';
import Klarna from '../../assets/Linear/Klarna.svg';
import Skrill from '../../assets/Linear/Skrill.svg';
import WeChat from '../../assets/Linear/WeChat.svg';
import Bank from '../../assets/Linear/bank.svg';
import Card from '../../assets/Linear/Card.svg';
import Card1 from '../../assets/Linear/Card1.svg';
import infoCircle from '../../assets/Linear/infoCircle.svg';
import arrowLeft from '../../assets/Linear/arrowLeft.svg';
import arrowRight from '../../assets/Linear/arrowRight.svg';

const iconData = [
    {
      img: Mastercard,
      title: 'Mastercard',
    },
    {
      img: Visa,
      title: 'Visa',
    },
    {
      img: UnionPay,
      title: 'UnionPay',
    },
    {
      img: JCB,
      title: 'JCB',
    },
    {
      img: Amex,
      title: 'Amex',
    }
];

const paymentMethodList = [
    {
      img: Card,
      title: 'Card',
    },
    {
      img: Bank,
      title: 'Bank',
    },
    {
      img: Klarna,
      title: 'Klarna',
    },
    {
      img: Skrill,
      title: 'Skrill',
    },
    {
      img: WeChat,
      title: 'WeChat',
    }
];

const PaymentMethodItem = styled(Paper)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'center',
    height: '63px',
    width: '63px',
    border: 'solid 1px #E9E6EF',
    borderRadius: '8px',
    marginRight: '5px',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: '#E9E6EF'
    }
    
}));

const CardInput = styled(TextField)(({ theme }) => ({
    width: '100%',
    color: '#000', 
    border: 'none',
    marginBottom: '10px',
    padding: 0,
    height: '36px',
    '& input': {
        backgroundColor: '#fff',
        borderRadius: '4px',
        height: '36px',
        padding: '0 10px'
    },
    '& div': {
        height: '36px',
        backgroundColor: '#fff',
        borderRadius: '4px'
    }
}));

const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        }
    ]
  };

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img
            src={arrowLeft}
            alt={`arrowLeft`}
            className={className}
            style={{ 
                ...style, 
                display: 'block', 
                height: '10px',
                width: '10px',
                padding: '4px',
                border: 'solid 1px #E9E6EF',
                borderRadius: '20px'
            }}
            onClick={onClick}
        />
    );
}

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img
            src={arrowRight}
            alt={`arrowRight`}
            className={className}
            style={{ 
                ...style, 
                display: 'block', 
                height: '10px',
                width: '10px',
                padding: '4px',
                border: 'solid 1px #E9E6EF',
                borderRadius: '20px'
            }}
            onClick={onClick}
        />
    );
}

function PaymentInfo() {
  	return (
		<Stack direction='column' > 
            <Typography 
                sx={{ fontWeight: 'light', m: 1 }} 
                typography='subtitle2' 
                component="h6"
            >
                Choose your payment method
            </Typography>
            <div className="slider-container" Style={ `margin: 10px 25px 15px 25px;` }>
                <Slider {...sliderSettings} sx={{ margin: '0px 25px' }}>
                    {paymentMethodList.map(( method, key ) => {
                        const { img, title } = method;
                        return <div key={ `slide${key}` } >
                                <PaymentMethodItem variant="outlined" key={ `method${key}` }>
                                    <img 
                                        key={`img${key}`} 
                                        sx={{ 
                                            objectFit: 'none',
                                            height: '24px'
                                        }} 
                                        src={`${img}`} 
                                        alt={title} 
                                        loading="lazy" 
                                    />  
                                    <Typography 
                                        component="p"
                                        sx={{
                                            fontWeight: '500',
                                            fontSize: '9px',
                                            lineHeight: '10.89px',
                                            color: '#2E2A36'
                                        }}
                                    >
                                        {title}
                                    </Typography>           
                                </PaymentMethodItem>
                            </div>;
                    })}
                </Slider>
            </div>
            <form>
                <Box 
                    sx={{ 
                        backgroundColor: '#E9E6EF', 
                        p: '10px 15px', 
                        borderRadius: '12px', 
                        marginBottom: '20px' 
                    }}
                > 
                    <Grid 
                        container 
                        direction="row" 
                        justifyContent="space-between" 
                        p={0}
                        mb={1.6}
                    >
                        <Grid p={0} >
                            <Typography
                                component='b'
                                sx={{ 
                                    fontWeight: 600, 
                                    fontSize: '16px', 
                                    lineHeight: 
                                    '19.36px', 
                                    color: '#2E2A36' 
                                }}
                            >
                                Card Details
                            </Typography>
                        </Grid>
                        <Grid p={0} >
                            <Stack 
                                spacing={0.5} 
                                direction='row' 
                                justifyContent='end'
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
                        </Grid>
                    </Grid>
                    <Box sx={{ backgroundColor: '#E9E6EF' }} >
                        <CardInput 
                            type='text' 
                            variant='outlined' 
                            placeholder='Card Number' 
                            size='small'
                            InputProps={{
                                startAdornment: <InputAdornment 
                                                    position='start'
                                                    sx={{ 
                                                        backgroundColor: '#fff', 
                                                        p: 0, 
                                                        m: 0
                                                    }}
                                                >
                                                    <img src={Card1} alt={`card`}></img>
                                                </InputAdornment>
                            }}
                        ></CardInput>
                        <Stack      
                            direction='row' 
                            justifyContent='space-between'
                            spacing={1}
                            mb={1.3}
                        >
                            <CardInput 
                                type='text' 
                                variant="outlined" 
                                placeholder="MM / YYYY" 
                                size='small'
                            ></CardInput>
                            <CardInput 
                                type='password' 
                                variant="outlined" 
                                placeholder="CVC" 
                                size='small'
                                InputProps={{
                                    endAdornment: <InputAdornment 
                                                    position='end' 
                                                    sx={{ 
                                                        backgroundColor: '#fff',
                                                        p: 0,
                                                        m: 0
                                                    }}
                                                >
                                                    <img src={infoCircle} alt={`info`}></img>
                                                </InputAdornment>
                                }}
                            ></CardInput>   
                        </Stack>
                        <CardInput 
                            type='text' 
                            variant='outlined' 
                            placeholder="Cardholder Name" 
                            size='small'
                        ></CardInput>
                    </Box>
                </Box>
                <Box>
                    <CardInput 
                        type="text"
                        variant='outlined' 
                        placeholder="Address" 
                        size='small'
                    ></CardInput>
                    <CardInput 
                        type='text' 
                        variant='outlined' 
                        placeholder="City" 
                        size='small'
                    ></CardInput>
                    <CardInput 
                        type='text' 
                        variant='outlined' 
                        placeholder="Country" 
                        size='small'
                    ></CardInput>
                    <Stack 
                        direction='row'
                        justifyContent='space-between'
                        spacing={1}
                        mb={1.3}
                    >
                        <CardInput 
                            type='text' 
                            variant='outlined' 
                            placeholder="State" 
                            size='small'
                        ></CardInput>
                        <CardInput 
                            type='text' 
                            variant='outlined' 
                            placeholder="Post Code" 
                            size='small'
                        ></CardInput>
                    </Stack>
                    <CardInput 
                        type='text' 
                        variant='outlined' 
                        placeholder="Phone number" 
                        size='small'
                    ></CardInput>
                </Box>
            </form>
        </Stack>
  	);
}

export default PaymentInfo;
