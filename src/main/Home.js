import { useRef, useState } from 'react';
import style from './style.css'
import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import config from '../config';

const Home = () => {
  return (
    <div className="container">
      <b><h1 align="center" style={{ fontFamily: "Copperplate, Papyrus, fantasy" }}>🎶 MelodyHub 🎶</h1></b>
      <h1 align='center'>Welcome to MelodyHub!</h1>
      <h3 align="center">This is your ultimate destination for all things music.</h3>
      <h4 align="center">Explore our features and start discovering new tunes today!</h4>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item>
              <Card>
                <CardMedia
                  component="img"
                  height="230"
                  image="https://i.scdn.co/image/ab67616d0000b27386b056bc077d21e07cb34ee5"
                  alt="Featured Track 1"
                />
                <CardContent>
                  <Typography variant="h6" component="div" align='center'>
                    <b>Oye</b>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card>
                <CardMedia
                  component="img"
                  height="230"
                  image="https://i.scdn.co/image/ab67616d0000b273ba2c7b2782c7aaf974167984"
                  alt="Featured Track 2"
                />
                <CardContent>
                  <Typography variant="h6" component="div" align='center'>
                    <b>Endukante Premanta</b>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item>
              <Card>
                <CardMedia
                  component="img"
                  height="230"
                  image="https://mosaic.scdn.co/640/ab67616d00001e02509ebf184900e4bc309efdfeab67616d00001e0278e7b3d3ff5ba445bf5b1014ab67616d00001e028e6e936aed656c9a6f0bee6cab67616d00001e02fe23e2bcb87e0f165f73359e"
                  alt="Featured Track "
                />
                <CardContent>
                  <Typography variant="h6" component="div" align='center'>
                    <b>Shanmukh Hits</b>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card>
                <CardMedia
                  component="img"
                  height="230"
                  image="https://i.scdn.co/image/ab67616d00001e0259596d1f38a92acbc5003ab8"
                  alt="Featured Track 4"
                />
                <CardContent>
                  <Typography variant="h6" component="div" align='center'>
                    <b>Colour Photo</b>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item>
              <Card>
                <CardMedia
                  component="img"
                  height="230"
                  image="https://i.scdn.co/image/ab67616d0000b2738335d4c9f1240433714f0a33"
                  alt="Featured Track 5"
                />
                <CardContent>
                  <Typography variant="h6" component="div" align='center'>
                    <b>Aarya -2</b>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card>
                <CardMedia
                  component="img"
                  height="230"
                  image="https://i.scdn.co/image/ab67616d00001e0262337a69b7cf4d14b02d50d8"
                  alt="Featured Track 6"
                />
                <CardContent>
                  <Typography variant="h6" component="div" align='center'>
                    <b>Hushaaru</b>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item>
              <Card>
                <CardMedia
                  component="img"
                  height="230"
                  image="https://i.scdn.co/image/ab67616d0000b2730ae99e52ec6c5f9111415239"
                  alt="Featured Track 7"
                />
                <CardContent>
                  <Typography variant="h6" component="div" align='center'>
                    <b>Majili</b>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
        
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item>
              <Card>
                <CardMedia
                  component="img"
                  height="230"
                  image="https://i.scdn.co/image/ab67616d0000b273f4df10de23eced036aab17cd"
                  alt="Featured Track 9"
                />
                <CardContent>
                  <Typography variant="h6" component="div" align='center'>
                    <b>Darling</b>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* Add the next grid items here */}
          </Grid>
        </Grid>
      </Grid>
      <br/><br/>
      <Button variant="contained" className="more-button" > MORE...</Button>
    
    </div>
  );
};

export default Home;
