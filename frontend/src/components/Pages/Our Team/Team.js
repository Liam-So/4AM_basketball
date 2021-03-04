import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Card, CardMedia } from "@material-ui/core/";
import useStyles from "./styles";
import Topbar from "../../Topbar/Topbar";

function Team() {
  const classes = useStyles();

  const coaches = [
    {
      id: 1,
      name: "Alex Carson",
      description:
        "Alex is in his fifth season as a member of the Dalhousie Tigers, coming off ann AUS Championship where he was named MVP. Last summer he was selected to represent Team Canada at the 2019 FISU Games in Italy. Alex was a teammate of Andrew's throughout his years playing for BNS, including on the 2015 National Champion team.",
      img: "images/coaches/AlexCarson.png",
      alt: "alex_carson",
    },
    {
      id: 2,
      name: "Nate Darling",
      description:
        "Nate just finished his first year at Delaware Universiy and 3rd year in college. He won a World Championship with Team Canada in the Summer of 2017 at the FIBA U19 World Cup. As a teammate of Andrew, Nate won gold at Nationals in 2015.",
      img: "images/coaches/NateDarling.png",
      alt: "nate_darling",
    },
    {
      id: 3,
      name: "Keevan Veinot",
      description:
        "Keevan is in his fourth year as a point guard for the Dalhousie Tigers. Last season, Keevan helped Dal win an AUS championship, while winning AUS MVP. Keevan has been a teammate of Andrew's on several different teams.",
      img: "images/coaches/KeevanVeinot.png",
      alt: "keevan_veinot",
    },
    {
      id: 4,
      name: "Jacob Sheffar",
      description:
        "Jacob is in his fifth year as a member of the Mount Saint Vincent University basketball team. Previously, Jacob was a BNS provincial team meber and a Metro High School All-Star.",
      img: "images/coaches/JacobSheffar.png",
      alt: "jacob_sheffar",
    },
    {
      id: 5,
      name: "Will Spaulding",
      description:
        "Will is in his third year with the Saint Mary's Huskies after transferring from Carleton University. He boarded at Rothesay Netherwood School with Andrew where together they helped build the program into what it is today.",
      img: "images/coaches/WillSpaulding.png",
      alt: "will_spaulding",
    },
    {
      id: 6,
      name: "Eli Kraushar",
      description:
        "Eli Kraushar is a 2x Canadian National Champion, and he was named First-Team All-Star at Nationals in 2016. He played with Andrew during both of these championship runs. Eli in his 4th season with the Acadia Axemen.",
      img: "images/coaches/EliKraushar.png",
      alt: "eli_kraushar",
    },
    {
      id: 7,
      name: "Tristan Hyde",
      description:
        "Tristan is in his fifth year as a big man for the Saint Mary's Huskies. He is a former captain of the Capital Region Champion CPA Cheetahs and a National Champion with BNS. Tristan was a teammate of Andrew's on the 2015 gold medal winning BNS team.",
      img: "images/coaches/TristanHyde.png",
      alt: "tristan_hyde",
    },
    {
      id: 8,
      name: "Alex Muise",
      description:
        "Alex is in his second year with the Acadia Axemen after two years at the University of Ottawa. He is a 2x National Champion with BNS, and Alex and Andrew were teammates during both championship runs.",
      img: "images/coaches/AlexMuise.png",
      alt: "alex_muise",
    },
    {
      id: 9,
      name: "Will Colpitts",
      description:
        "Will is a former member of the UKC Blue Devils and the Halifax Grammar School Gryphons. Will was also a teammate of Andrexts on the 2015 gold medal winning BNS team. Will has represented now Scotia playing for BNS from the ages U14 to U17 and served as captain for two years at Halifax Grammar.",
      img: "images/coaches/WillColpitts.png",
      alt: "will_colpitts",
    },
    {
      id: 10,
      name: "Rowan Power",
      description:
        "Rowan in his fifth year at Acadia University while completing his marketing degree. As a teammate of Andrew, Rowan was a member of the 2015 BNS team that won gold in Halifax.",
      img: "images/coaches/RowanPower.png",
      alt: "rowan_power",
    },
    {
      id: 11,
      name: "Brandon Brown",
      description:
        "Brandon is a skills trainer with 10 years of experience, and a past Head Instructor for BNS TAS. He also is a former Assistant Coach with SMU and coached Andrew on the 2015 National Champion BNS team. ",
      img: "images/coaches/BrandonBrown.png",
      alt: "brandon_brown",
    },
    {
      id: 12,
      name: "Dawson Berze-Butts",
      description:
        "Dawson is a member of the MSVU Mystics, after transferring from StFx. He is a former Metro High School Champion and League MVP with the CPA Cheetahs and he was a teammate of Andrew's playing for BNS, where they won a National Championship together.",
      img: "images/coaches/DawsonBungay.png",
      alt: "dawson_bungay",
    },
    {
      id: 13,
      name: "Jack Campbell",
      description:
        "Jack is a former guard for the Acadia Axemen. Jack end Andrew were teammates throughout their years paying BNS, including on the 2015 Notional Champion team ",
      img: "images/coaches/JackCampbell.png",
      alt: "jack_campbell",
    },
    {
      id: 14,
      name: "Campbell Colpitts",
      description:
        "Campbell is in his second year at Mount Saint Vincent University after transferring from Dalhousie. He is a former ACAA Second-ream All Star. Campbell was teammate of Andrew for three summers playing with BNS",
      img: "images/coaches/CampbellColpitts.png",
      alt: "campbell_colpitts",
    },
    {
      id: 15,
      name: "Jayden Falls",
      description:
        "Jayden built his relationship with basketball through many teams, from middle school all the way to the 2016 U17 BNS gold medal winning team- where he was a teammate of Andrew's. He curently suits up for the UPEI Panthers.",
      img: "images/coaches/JaydenFalls.png",
      alt: "jayden_falls",
    },
    {
      id: 16,
      name: "Vernelle Johnson",
      description:
        "Vernelle is currentl entering his fourth year at UPEI while completing his Marketing Degree. Vernelle was a teammate of Andrew's for many summers including on the 2015 BNS team that won Gold at Nationals.",
      img: "images/coaches/Vernelle.png",
      alt: "vernelle_johnson",
    },
    {
      id: 17,
      name: "Alex Petropolis",
      description:
        "Alex coaches the BNS U16 Team as well as the CPA Cheetahs Varsity Basketball Team. He is a former captain during his plays during his playing days at CPA. Alex is an NCCP Certified Coach. He is currently studying Sports Engineering and he is also a former Coach Education Intern at Canada Basketball. Alex was a teammate of Andrew when they both played point guard for BNS.",
      img: "images/coaches/AlexPetro.png",
      alt: "alex_petro",
    },
  ];

  const guestCoaches = [
    {
      id: 18,
      name: "Kevin Downey",
      description:
        "Coach Downey is an Assistant Coach with the Dalhousie University Women's Basketball Team and has over 15 years of coaching experience, including several years at the high school level. He coached Andrew with Basketball Nova Scotia.",
      img: "images/coaches/KevinDowney.png",
      alt: "kevin_downey",
    },
    {
      id: 19,
      name: "Danny DePalma",
      description:
        "Coach DePalma is an Assistant Coach with both the Men's and Women's Programs at Acadia University. He coached Andrew when with BNS, where they won a National Championship in 2016.",
      img: "images/coaches/DannyDePalma.png",
      alt: "danny_palma",
    },
    {
      id: 20,
      name: "Damian Gay",
      description:
        "Coach Gay is the Head Coach at Rothesay Netherwood School. He coached Andrew during Andrew's time at RNS, where the two have been instrumental in the growth of the program.",
      img: "images/coaches/DamianGay.png",
      alt: "damian_gay",
    },
  ];

  return (
    <div>
      <Topbar />
      <div className={classes.title}>
        <h1 style={{ alignItems: "center", color: "#f00946" }}>
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

      <div className={classes.title} style={{ color: "#f00946" }}>
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
    </div>
  );
}

export default Team;
