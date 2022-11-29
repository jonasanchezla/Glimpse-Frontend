import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
//Redux is used to maintain and update data across your applications for multiple components to share, all while remaining independent of the components.
import { useDispatch } from 'react-redux';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import camera from './images/cameraaaa.png';
import axios from 'axios'
import {Images} from './components/Images.js'

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  const [images, setImages]=useState([])

  const fetchAPI=async()=>{
    const response= await axios.get('https://api.unsplash.com/photos/?client_id=XUDP6b0_gu2q2EGEC8HCib6FRogehJhwO482fToZzt8')
    // console.log(response.data);
    const data = await response.data;
    setImages(data)
  }

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    



    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="secondary">
        <Typography 
          className={classes.heading} variant="h1" align="center">Glimpse
        </Typography>
        <img className={classes.image} src={camera} alt="icon" height="100" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>

      <div className='container'>
        <button className='' onClick={fetchAPI}>
          Search For Random Image
        </button>
        <div className='photos'>
          {images.length>0&&(
            <Images images={images} />
          )}

        </div>

      </div>
    </Container>
    
    
  );
};

export default App;