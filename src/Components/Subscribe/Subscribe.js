import { Button, Grid, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    subscribeContainer: {
        margin: '1px',
        display: 'flex',
        padding: '10px',
        justifyContent: 'center',
        width: '100%',
        height: '100px',
        [theme.breakpoints.down('sm')]: {
            margin: '1px',
            display: 'grid',
            padding: '10px',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
        },
        [theme.breakpoints.down('md')]: {
            margin: '1px',
            display: 'grid',
            padding: '10px',
            justifyContent: 'center',
            width: '100%',
            height: '100%',

        },
    },
    inputField: {
        width: 'auto',
        display: 'grid',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            width: 'auto',
            display: 'grid',
            justifyContent: 'center',
        },
        [theme.breakpoints.down('md')]: {
            width: '100p',
            height:'80px',
            display: 'grid',
            justifyContent: 'center',
        },
    },
    TextField: {
        width: '500px',
        height: '45px',
        margin: 'center',
        // borderColor: 'yellow',
        borderRadius: '0px',
        color: 'black',
        [theme.breakpoints.down('sm')]: {
            width: '250px',
            height: '55px',
            display: 'block',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'black',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: '400px',
            height: '45px',
            display: 'block',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'black',
        },
    },
    errorContainer: {
        marginLeft: '10px',
        marginTop: '8px',
        color: 'red',
        textAlign: 'left',
        fontWeight: '200',
        fontSize: 'large',
        [theme.breakpoints.between('sm', 'md')]: {
            marginLeft: '5px',
            marginTop: '2px',
            color: 'red',
            textAlign: 'left',
            fontWeight: '200',
            fontSize: 'small',
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '5px',
            marginTop: '2px',
            color: 'red',
            textAlign: 'left',
            fontWeight: '200',
            fontSize: 'small',
        },
    },
    btnContainer: {
        width: '150px',
        height: '55px',
        borderRadius: '0px',
        backgroundColor: 'black',
        marginTop: '1px',
        color: '#fff',
        [theme.breakpoints.down('sm')]: {
            margin: 'auto',
            marginTop: '2px',
            width: '100px',
            height: '40px',
            borderRadius: '0px',
            backgroundColor: 'black',
            alignContent: 'center',
        },
        [theme.breakpoints.down('md')]: {
            margin: 'auto',
            marginTop: '2px',
            width: '100px',
            height: '40px',
            borderRadius: '0px',
            backgroundColor: 'black',
            alignContent: 'center',
            
        },
    },
}))
function Subscribe(props) {
    const classes = useStyles();
    
    const [email, setEmail] = useState('');
    const [subscribeBtn, setSubscribeBtn] = useState('Subscribe');
    const [emailError, setEmailError] = useState('');
    const [isError, setIsError] = useState('false');

    const onChangeInput = (event) => {
        setEmail(event.target.value);
        setIsError(false)
    }
    const handleValidate = () => {
        if (email === '') {
            setEmailError('Required')
            setIsError(true)
            return false
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            setEmailError('Invalid Email Address')
            setIsError(true)
            return false
        } else {
            setEmailError('')
            setIsError(false)
            return true
        }
    }
    const handleSubscribe = () => {
        const isValid = handleValidate();
        if (isValid) {
            setEmail('')
            setSubscribeBtn('Subscribed')
            props.history.push('/landing')
        }
    }
    return (
        <Grid container>
            <div className={classes.subscribeContainer} >
                <div className={classes.inputField}>
                    <TextField
                        className={classes.TextField}
                        label='Email Address'
                        fullWidth
                        type='text'
                        variant='filled'
                        value={email}
                        onChange={onChangeInput}
                    />
                    {isError
                        ? <div className={classes.errorContainer}>{emailError}</div>
                        : null
                    }
                </div>
                <Button variant='contained' color='primary' onClick={handleSubscribe}
                    aria-label="large outlined primary button group"
                    className={classes.btnContainer}
                >
                    {subscribeBtn}
                </Button>
            </div>
        </Grid>
    )
}

export default withRouter(Subscribe);