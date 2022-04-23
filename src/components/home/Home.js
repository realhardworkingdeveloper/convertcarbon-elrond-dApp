import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import withStyles from "@mui/styles/withStyles";
import classNames from "classnames";
import ReactCompareImage from './ReactCompareImage';

import { Box, Hidden, Typography } from "@mui/material";

import Countdown from "./Countdown";
import Storyboard from "./Storyboard";
import Mintboard from "./Mintboard";

import './animation.css';

const styles = (theme) => ({
  
    background: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        marginTop: -100,
    },
    gods: {
      marginTop: 100,
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
            handle={<Fragment />}
            hover={true}
            slope={0.3}
            leftImage="assets/images/comparison/green.jpg"
            rightImage="assets/images/comparison/wildfire.jpg"
          />
        </div>
        <Storyboard />
        <Countdown saleStatus={"START"} remainTime={1000} />
        
        <Mintboard
          title="Khamsin"
          description="
            ❓ A hot, dry, sand-filed windstorm – a sight that will become more and more common as global warming and desertification increases. Historically these storms are so violent that changed lives, outcome of wars and the overall way life is lived.
            <br/>
            🚀 We need to take immediate action so this doesn’t become a reality, combat desertification and yes, Regreening helps! Vegetation promotes the sequestration of carbon, cooling of the soil, and stimulates the water cycle. Water evaporates out of the pores of plants and trees, increasing the humidity. The formation of clouds is stimulated and rainfall increases. The roots of vegetation help the water to infiltrate into the soil. Additionally, these roots help to retain the upper fertile layer of the soil during intense rainfall, preventing erosion of the fertile soil. The land can be used for agriculture again, increasing the food security and income for people and expanding the biodiversity.
            <br/>
            💝 As a result of this Convert Carbon pledges to support <a href='https://www.unccd.int/'>United Nations Convention to Combat Desertification(UNCCD)</a> and more specifically <a href='https://www.unccd.int/actions/great-green-wall-initiative'>The Green Wall Initiative</a> contributing the creation of the largest living structure on the planet."
          benefit="
            <b>Max buy</b> : 1000usd – 6 EGLD
            <br/>
            <b>Tesla Lottery Tickets</b> – 2	
            <br/>
            <b>RVM token rewards</b> : +4%
            <br/>
            <b>Mint Price</b> – 0,7 EGLD
          "
        />
        
        <Box
          display="flex"
          justifyContent="space-between"
          className={classNames("row", classes.gods)}
          my={4}
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
    </Fragment>
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired
};

export default withStyles(styles, {withTheme: true})(Home);
