import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Card, CardMedia } from "@material-ui/core/";
import useStyles from "./styles";
import Topbar from "../../Topbar/Topbar";
import { coaches, guestCoaches } from "./Data";
import { motion } from 'framer-motion';

function Team() {
  const classes = useStyles();

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Topbar transparent={true} />
      <div className={classes.title}>
        <h1 className="mt-1 text-4xl tracking-tight font-extrabold text-red-500">
          Our Coaching Staff
        </h1>
      </div>

      <div className={classes.cardLines}>
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.root}
          spacing={3}
        >
          <Grid item xs={12}>
            <Grid
              className={classes.cards}
              container
              justify="center"
              spacing={3}
            >
              {coaches.map((coach) => (
                <Grid key={coach.id} item xs={12} sm={6} md={4} lg={4}>
                  <Card className={classes.root}>
                    <CardMedia className={classes.media}>
                      <img src={coach.img} alt={coach.alt} />
                    </CardMedia>
                    <Typography
                      variant="h5"
                      gutterBottom
                      style={{ color: "#f00946", fontFamily: "Lato" }}
                    >
                      {coach.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      style={{ fontFamily: "Lato" }}
                    >
                      {coach.description}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>

      <div className="mt-1 text-4xl tracking-tight font-extrabold text-red-500 flex justify-center">
        <h1>Guest Coaches</h1>
      </div>

      <div className={classes.cardLines}>
        <Grid container className={classes.root} spacing={3}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={3}>
              {guestCoaches.map((coach) => (
                <Grid key={coach.id} item xs={12} sm={6} md={4} lg={4}>
                  <Card className={classes.root}>
                    <CardMedia className={classes.media}>
                      <img src={coach.img} alt={coach.alt} />
                    </CardMedia>
                    <Typography
                      variant="h5"
                      gutterBottom
                      style={{ color: "#f00946", fontFamily: "Lato" }}
                    >
                      {coach.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      style={{ fontFamily: "Lato" }}
                    >
                      {coach.description}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </motion.div>
  );
}

export default Team;
