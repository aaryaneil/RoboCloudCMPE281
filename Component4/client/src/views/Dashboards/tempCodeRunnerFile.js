        order_id : Math.floor(Math.random() * 100000)
                  })
                  .then(function (response) {
                    console.log(response);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
                //let response = await axios.get(`${backendServer}/deliveryAddress/customer/`)
               // addressId = response.data.AddressId;
            } else {
                console.log("Inside Else")
                addressId = address.AddressId;
            }
            postOrder(customerId, addressId);
        }
    };
            

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    useEffect(() => {
        let currentCart = JSON.parse(sessionStorage.getItem('checkoutCart')) || [];
        setCart(currentCart);

    }, []);

    const onAddressChange = (event) => {
        switch (event.target.id) {
            case 'address1':
                setAddr1(event.target.value);
                break;
            case 'address2':
                setAddr2(event.target.value);
                break;
            case 'country':
                setCountry(event.target.value);
                break;
            case 'city':
                setCity(event.target.value);
                break;
            case 'state':
                setState(event.target.value);
                break;
            case 'zip':
                setPincode(event.target.value);
                break;
            case 'saveAddress':
                setChecked(event.target.value);
                break;
            case 'addressName':
                setAddressName(event.target.value);
                break;
            // case 'checked':
            //     setChecked(event.target.value);
            //     break;
        }
        if (event.target.name == 'addressSelect') {
            
            setSelectedAddress(event.target.value);
        }
    }

    
    const onViewStatus = () => {
        history.push("/CustomerOrder");
    }

    const onAddressSelect = (addr) => {
        setAddr1(addr.AddressLine1);
        setAddr2(addr.AddressLine2);
        setCountry(addr.Country);
        setCity(addr.City);
        setPincode(addr.PinCode);
        setState(addr.State);
        setAddressName(addr.SavaAsName);
    }

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <Review deliveryAddress={false} />;
            case 1:
                return <AddressForm onAddressChange={onAddressChange} onAddressSelect={onAddressSelect} />;
            case 2:
                return <Review deliveryAddress={true} />;
            default:
                throw new Error('Unknown step');
        }
    }


    

    return (
       // <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <NavbarCustomer type="customer" />
                <Container component="main" maxWidth="sm" sx={{ mb: 1 }} >
                    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                        <Typography component="h1" variant="h4" align="center">
                            Checkout
                        </Typography>