import React, { Fragment, useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from "@mui/styles/withStyles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Grid, Typography,  Button, Card, Box } from "@mui/material";

const styles = (theme) => ({
    background: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'absolute',
        top: 0
    },
    card: {
        maxWidth: 500,
    },
    countdownItem: {
        width: 70,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid white',
        borderRadius: 10
    },
    countdownLabel: {
        fontSize: '0.8rem',
        width: '100%',
        textTransform: 'uppercase',
        fontWeight: 700,
        textAlign: 'center',
        marginTop: '0.1rem'
    },
    countdownValue: {
        width: '100%',
        padding: '0 0.5rem',
        fontSize: '3rem',
        color: '#fff',
        textAlign: 'center'
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
    const { classes, theme, remainTime } = props;

    const isWidthUpLg = useMediaQuery(theme.breakpoints.up("lg"));
    const [timeLeft, setTimeLeft] = useState(getTimeLeft(remainTime));

    useEffect(setTimeLeft, [setTimeLeft]);

    return (
        <Fragment>
            <Box display="flex" justifyContent="center" className="row">
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
                >
                    <Box mt={4}>
                        <Typography align="center" variant={isWidthUpLg ? "h3" : "h4"} className="title-font">
                            MINT START IN
                        </Typography>
                    </Box>
                    { timeLeft && <div className="countdown">
                        
                        <div className={classes.countdownItem}>
                            <span className={classes.countdownValue}>{String(timeLeft.days).padStart(2, '0')}</span>
                            <span className={classes.countdownLabel}>Days</span>
                        </div>

                        <div className={classes.countdownItem}>
                            <span className={classes.countdownValue}>{String(timeLeft.hours).padStart(2, '0')}</span>
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
                    </div>}
                </Box>
                </Grid>
            </Card>
          </Box>
        </Fragment>
    )
}

Countdown.propTypes = {
  classes: PropTypes.object,
  theme: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(Countdown);
