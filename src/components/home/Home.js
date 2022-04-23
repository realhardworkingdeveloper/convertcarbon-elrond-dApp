import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import withStyles from "@mui/styles/withStyles";
import classNames from "classnames";
import ReactCompareImage from './ReactCompareImage';

import { Box, Hidden } from "@mui/material";

import Countdown from "./Countdown";
import Storyboard from "./Storyboard";
import Mintboard from "./Mintboard";

import './animation.css';

const styles = (theme) => ({
  
    background: {
        width: '100%',
        "@media (min-width:  900px)": {
          height: 770,
        },
        "@media (max-width:  900px)": {
          height: 640,
        },
        objectFit: 'cover',
        position: 'absolute !important',
        top: 0
    },
    gods: {
      [theme.breakpoints.down('sm')]: {
        visibility: 'hidden'
      }
    }
});

function Home(props) {
  const { classes, selectHome } = props;

  useEffect(selectHome, [selectHome]);
  return (
    <Fragment>
        <div className={classes.background}>
          <ReactCompareImage
            hover={true}
            leftImage="assets/images/comparison/green.jpg"
            rightImage="assets/images/comparison/wildfire.jpg"
          />
        </div>
        {/* <video className={classes.background} autoPlay muted loop>
            <source src="/assets/4k-sky.mp4" type='video/mp4' />
        </video> */}
        <Countdown saleStatus={"START"} remainTime={1000} />
        <Box
          display="flex"
          justifyContent="space-between"
          className={classNames("row", classes.gods)}
          mx={4}
        >
          <img 
            className={"god_1"}
            src="/assets/images/god/water.png"
            alt="water god"
            style={{transform: 'scaleX(-1)', marginTop: -100}}
          />

          <img 
            className={"god_2"}
            src="/assets/images/god/earth.png"
            alt="earth god"
            style={{transform: 'scaleX(-1)', marginTop: -50}}
          />

          <img 
            className={"god_1"}
            src="/assets/images/god/fire.png"
            alt="fire god"
          />

          <img
            className={"god_2"}
            src="/assets/images/god/wind.png"
            alt="wind god"
            style={{marginTop: -50}}
          />

          <img
            className={"god_1"}
            src="/assets/images/god/soul.png"
            alt="soul god"
            style={{marginTop: -100}}
          />
        </Box>
        <Storyboard />
        <Mintboard
          title="SOUL"
          description="SOUL is a collection who represents the environmental protection spirit of humanity"/>
    </Fragment>
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired
};

export default withStyles(styles, {withTheme: true})(Home);
