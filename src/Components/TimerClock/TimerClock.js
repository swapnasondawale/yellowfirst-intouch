import { Fab, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
// import './TimerClock.css'
const TimerClock = () => {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');
    let interval = useRef();
    const setTimer = () => {
        const countdownData = new Date('May 22, 2022 00:00:00').getTime();
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownData - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                //stop our timer
                clearInterval(interval.current);
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000)
    }

    useEffect(() => {
        setTimer();
        return () => {
            clearInterval(interval.current)
        }
    }, [])

    return (
        <Grid container justify='center' align='center' style={{ padding: '20px' }}>
            <Grid item container xs={6} justify='space-around' spacing={0} style={{ paddingBottom: '25px' }}>
                <Fab variant='round' align='left'
                    style={{ width: '125px', height: '125px', display: 'grid', justifyContent: 'center' }}
                >
                    <Typography style={{ fontSize: '40px' }}>{timerDays}</Typography>
                    <Typography>Days</Typography>
                </Fab>
                <Fab variant='round'
                    style={{ width: '125px', height: '125px', display: 'grid', justifyContent: 'center' }}
                >
                    <Typography style={{ fontSize: '40px' }}>{timerHours}</Typography>
                    <Typography>Hours</Typography>
                </Fab>
                <Fab variant='round'
                    style={{ width: '125px', height: '125px', display: 'grid', justifyContent: 'center' }}
                >
                    <Typography style={{ fontSize: '40px' }}>{timerMinutes}</Typography>
                    <Typography>Minutes</Typography>
                </Fab>
                <Fab variant='round'
                    style={{ width: '125px', height: '125px', display: 'grid', justifyContent: 'center' }}
                >
                    <Typography style={{ fontSize: '40px' }}>{timerSeconds}</Typography>
                    <Typography>Seconds</Typography>
                </Fab>
            </Grid>
        </Grid>
    );
}

export default TimerClock;