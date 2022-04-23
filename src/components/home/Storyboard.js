import React, { Fragment, useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from "@mui/styles/withStyles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Grid, Typography,  Button, Card, CardActionArea, CardActions, CardMedia, CardContent, Box } from "@mui/material";

const styles = (theme) => ({
    card: {
        // maxWidth: 600,
        // marginTop: 50,
        color: '#000',
        backgroundColor: 'transparent',
        backgroundImage: 'linear-gradient(to right, transparent, rgb(0 0 0/0.1), rgb(0 0 0/0.1), transparent)',
        boxShadow: 'none'
    }
});

function Storyboard(props) {
    const { classes, theme, title, description } = props;
    const isWidthUpLg = useMediaQuery(theme.breakpoints.up("lg"));

    return (
        <Fragment>
            <Box display="flex" justifyContent="center" className="row">
                <Card
                className={classes.card}
                data-aos-delay="200"
                data-aos="zoom-in" 
                >
                    <Grid item xs={12}>
                        <Box display="flex" justifyContent="center" className="row" xs={{maxWidth: 'none'}} mx={12}>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontFamily: "'Caveat', cursive",
                                    mt: 8
                                }}
                            >
                                NFT story
                            </Typography>
                            <Typography
                                variant={
                                    isWidthUpLg ? "h5" : "h6"
                                }
                                sx={{
                                    fontFamily: "'Caveat', Courgette",
                                    lineHeight: 1.5,
                                    mt: 2,
                                    mb: 4
                                }}
                            >
                                &nbsp;&nbsp;&nbsp;To further reiterate our commitment towards making this project a reality, a game changing success and to celebrate our partnership with the world largest social network for the climate We don’t have time (clickable link), Convert Carbon decided to mint a collection of 10k NFTs action orientated.<br/><br/>
                                &nbsp;&nbsp;&nbsp;Unlike traditional NFTs collections, we have imagined and created 5 characters representing the 5 elements essentials to life, all of them with special benefits within our ecosystem in terms of giving back to our investors and community, a chance to win the ultimate electric car a Tesla and pledge to donate a percentage of the proceedings generated to support impacting immediate actions worldwide for each element of life. 
                                Every character is represented in both polluted and clean environments, with specific traits, have different prices, different benefits within our ecosystem, but all of them give to you, our investor, a chance to take part in our journey, get involved in the growth process from the early stages and be rewarded for it.<br/><br/>
                                &nbsp;&nbsp;&nbsp;Our way of giving back is by offering a lower purchasing price for the token on seed sale, a higher buying limit, a bigger reward for recycling at Convert Carbon RVM’s or our partners turning your investment into a long-term partnership and last but not least will represent one or more tickets to our TESLA Giveaway which will directly send one of you into the 0 pollution world. We do have more actions planned along our journey and be sure this is only the begging, but for starters, meet THE PRIMORDIALS

                            </Typography>
                        </Box>
                    </Grid>
                </Card>
            </Box>
        </Fragment>
    )
}

Storyboard.propTypes = {
  classes: PropTypes.object,
  theme: PropTypes.object
};

export default withStyles(styles, { withTheme: true })(Storyboard);
