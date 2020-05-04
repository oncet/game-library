import React from 'react';
import {
  Box,
  Grid
} from '@material-ui/core';
import GameCard from './GameCard';

function Body() {
  return (
    <Box mt={2}>
      <Grid container spacing={2}>
        {[...new Array(12)].map(() => (
            <Grid item xs={6} sm={4} md={2}>
              <GameCard />
            </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Body;
