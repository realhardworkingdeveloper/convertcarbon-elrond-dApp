import React, { Fragment, useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from "@mui/styles/withStyles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Grid, Typography,  Button, Card, CardActionArea, CardActions, CardMedia, CardContent, Box } from "@mui/material";

const styles = (theme) => ({
    card: {
        borderRadius: 5,
        maxWidth: 300,
        width: '100%',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
    },
    vs: {
        maxWidth: 150,
        width: '100%'
    },
    
});

function Mintboard(props) {
    const { classes, theme, title, description } = props;

    return (
        <Fragment>
            <Box justifyContent="center" my={6}>
                <Box mt={12} mb={2}>
                    <Typography variant="h3" align="center" sx={{ fontFamily: 'orbitron'}} >
                        { title }
                    </Typography>
                    <Typography variant="body1" align="center">
                        { description }
                    </Typography>
                </Box>
                <Box>
                    <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
                        <Grid item xs={4}>
                            <Typography variant="h5" align="center" style={{ fontFamily: 'orbitron'}} >
                                Destroyer
                            </Typography>
                            <Box sx={{textAlign: 'center'}}>
                                <img src="/assets/images/nft/soul.png" alt="soul" className={classes.card} />
                            </Box>
                            <Box my={2} >
                                <Typography
                                    align="center"
                                    variant="h6"
                                    sx={{ fontFamily: 'orbitron'}}
                                >
                                    123 / 1,000
                                </Typography>
                            </Box>
                            <Box
                                mb={4}
                                display="flex" justifyContent="center"
                            >
                                <Button variant="contained" width={100}>
                                    QUICK MINT
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={1}>
                            <Box sx={{textAlign: 'center'}}>
                                <img src="/assets/images/vs.png" alt="soul" className={classes.vs}/>
                            </Box>
                        </Grid>

                        <Grid item xs={4}>
                            <Typography variant="h5" align="center" style={{ fontFamily: 'orbitron'}} >
                                Protector
                            </Typography>
                            <Box sx={{textAlign: 'center'}}>
                                <img src="/assets/images/nft/soul.png" alt="soul" className={classes.card} />
                            </Box>
                            <Box my={1} >
                                <Typography
                                    align="center"
                                    variant="h6"
                                    sx={{ fontFamily: 'orbitron'}}
                                >
                                    123 / 1,000
                                </Typography>
                            </Box>
                            <Box
                                mb={4}
                                display="flex" justifyContent="center"
                            >
                                <Button variant="contained" width={100}>
                                    QUICK MINT
                                </Button>
                            </Box>
                        </Grid>

                    </Grid>
                </Box>
            </Box>
        </Fragment>
    )
}

Mintboard.propTypes = {
  classes: PropTypes.object,
  theme: PropTypes.object
};

export default withStyles(styles, { withTheme: true })(Mintboard);
