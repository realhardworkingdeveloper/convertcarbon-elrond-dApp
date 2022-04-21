import React, { Fragment, useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from "@mui/styles/withStyles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Grid, Typography,  Button, Card, CardActionArea, CardActions, CardMedia, CardContent, Box } from "@mui/material";

const styles = (theme) => ({
});

function Storyboard(props) {
    const { classes, theme } = props;

    return (
        <Fragment>
            <Box justifyContent="center" my={6}>
                <Box mt={12} mb={6}>
                    <Typography variant="h3" align="center" style={{ fontFamily: 'orbitron'}} >
                        Welcome to PRIMORDIALS
                    </Typography>
                </Box>
                <Box>
                    <Grid container direction="row" justifyContent="space-evenly" alignItems="stretch">
                        <Grid item xs={12} md={3} my={2}>
                            <Card sx={{ maxWidth: 345, margin: 'auto', height: '100%' }}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="200"
                                    image="/assets/images/about/perpective.webp"
                                    alt="perspective"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h4" component="div">
                                        A whole new perspective
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Convert Carbon started as an idea at the beginning of the pandemic from the new reality in which everything was shutting or slowing down and the need for efficiency became more apparent then ever. After careful market research, industry analysis, preliminary discussions with potential partners, this project has came to fruition.
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                    Share
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={3} my={2}>
                            <Card sx={{ maxWidth: 345, margin: 'auto', height: '100%' }}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="200"
                                    image="/assets/images/about/recycle.webp"
                                    alt="perspective"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h4" component="div">
                                        Recycling cycle
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Well organized and structured, Convert Carbon strives to deliver a whole new perspective to the recycling industry and the impact that one can have on his immediate surroundings and income. By introducing blockchain technology and a token rewarding system, we aim to bridge the interests of normal everyday people, merchants, manufacturers and state institutions. Our platform aims to be the “go to” place for all the parties involved in the recycling cycle.
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                    Share
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={3} my={2}>
                            <Card sx={{ maxWidth: 345, margin: 'auto', height: '100%' }}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="200"
                                    image="/assets/images/about/view.webp"
                                    alt="perspective"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h4" component="div">
                                        Changing the view
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        From data collecting, statistics, track records, to rewarding companies, institutions and single users for doing the actual recycling with the help of latest technology and the newest innovations available. Our company has the goal of changing the way this industry is viewed, increase the impact on the environment and the world around us, raise awareness and bring more transparency, whilst getting rewarded instantly for it.
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                    Share
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>

                    </Grid>
                </Box>
            </Box>
        </Fragment>
    )
}

Storyboard.propTypes = {
  classes: PropTypes.object,
  theme: PropTypes.object
};

export default withStyles(styles, { withTheme: true })(Storyboard);
