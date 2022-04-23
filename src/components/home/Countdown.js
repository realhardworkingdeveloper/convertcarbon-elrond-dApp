import React, { Fragment, useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from "@mui/styles/withStyles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Grid, Typography,  Button, Card, Box } from "@mui/material";

const styles = (theme) => ({
    card: {
        // maxWidth: 600,
        // marginTop: 100,
        color: '#fff',
        backgroundColor: 'rgb(0 0 0/0.5)',
        // backgroundImage: 'linear-gradient(to right,transparent, rgb(0 0 0/0.5), rgb(0 0 0/0.5), transparent)',
        boxShadow: 'none'
    },
    countdownItem: {
        width: 70,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid white',
        borderRadius: 10,
        margin: '0 10px'
    },
    countdownLabel: {
        fontSize: '0.8rem',
        width: '100%',
        textTransform: 'uppercase',
        fontWeight: 700,
        textAlign: 'center',
        marginTop: '0.1rem',
        color: 'white'
    },
    countdownValue: {
        width: '100%',
        padding: '0 0.5rem',
        fontSize: '3rem',
        color: '#fff',
        textAlign: 'center'
    },
    typewriter: {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        margin: '0 auto',
        animation: '$typing 1.5s steps(40, end)'
    },
    "@keyframes typing": {
        from: { width: 0 },
        to: { width: '100%' }
    }
});

function getTimeLeft(time) {
    return {
        days: Math.floor(time / (60 * 60 * 24)),
        hours: Math.floor((time / (60 * 60)) % 24),
        minutes: Math.floor((time / 60) % 60),
        seconds: Math.floor(time % 60),
    }
}

function Countdown(props) {
    const { classes, theme, remainTime, saleStatus } = props;

    const isWidthUpLg = useMediaQuery(theme.breakpoints.up("lg"));
    const [timeLeft, setTimeLeft] = useState(getTimeLeft(remainTime));
    const [status, setStatus] = useState(saleStatus);

    useEffect(() => {
        setTimeLeft(getTimeLeft(remainTime));
        console.log(timeLeft);
    }, [setTimeLeft]);

    useEffect(() => {
        setStatus(saleStatus);
    }, [setStatus]);

    return (
        <Box display="flex" justifyContent="center" className="row" my={12}>
            <Card
            className={classes.card}
            data-aos-delay="200"
            data-aos="zoom-in" 
            >
                <Grid item xs={12}>
                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        height="100%"
                        mx={8}
                    >
                        {
                            status === 'OVER' ? (
                                <Box mt={4}>
                                    <Typography
                                        align="center"
                                        variant={isWidthUpLg ? "h3" : "h4"}
                                        className={ classNames("title-font", classes.typewriter)}
                                    >
                                        THE SALE IS OVER
                                    </Typography>
                                </Box>
                            ) : (
                                <Fragment>
                                    <Box mt={4} mb={2}>
                                        <Typography
                                            align="center"
                                            variant={isWidthUpLg ? "h3" : "h4"}
                                            className={ classNames("title-font", classes.typewriter)}
                                        >
                                            MINT {status} IN
                                        </Typography>
                                    </Box>
                                    { timeLeft !== undefined ?
                                        (<Box display="flex" justifyContent="center">
                                        
                                            <div className={classes.countdownItem}>
                                                <span className={classes.countdownValue}>
                                                    {String(timeLeft.days).padStart(2, '0')}
                                                </span>
                                                <span className={classes.countdownLabel}>Days</span>
                                            </div>

                                            <div className={classes.countdownItem}>
                                                <span className={classes.countdownValue}>
                                                    {String(timeLeft.hours).padStart(2, '0')}
                                                </span>
                                                <span className={classes.countdownLabel}>Hours</span>
                                            </div>

                                            <div className={classes.countdownItem}>
                                                <span className={classes.countdownValue}>
                                                    {String(timeLeft.minutes).padStart(2, '0')}
                                                </span>
                                                <span className={classes.countdownLabel}>Mins</span>
                                            </div>

                                            <div className={classes.countdownItem}>
                                                <span className={classes.countdownValue}>
                                                    {String(timeLeft.seconds).padStart(2, '0')}
                                                </span>
                                                <span className={classes.countdownLabel}>Secs</span>
                                            </div>
                                        </Box>)
                                        : (
                                            <></>
                                        )
                                    }
                                </Fragment>
                            )
                        }
                        <Box mt={2} mb={4}>
                            <Typography
                                align="center"
                                variant={isWidthUpLg ? "h4" : "h5"}
                                className="title-font">
                                123 / 10,000
                            </Typography>
                        </Box>
                        {/* <Box
                            mb={4}
                            display="flex" justifyContent="center"
                        >
                            <Button variant="contained" width={100}>
                                GO to MINT 
                            </Button>
                        </Box> */}
                    </Box>
                </Grid>
            </Card>
        </Box>
    )
}

Countdown.propTypes = {
  classes: PropTypes.object,
  theme: PropTypes.object,
  remainTime: PropTypes.number.isRequired,
  saleStatus:  PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(Countdown);
