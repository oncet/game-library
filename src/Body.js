import React from 'react'
import {
  Box,
  Grid
} from '@material-ui/core'
import GameCard from './GameCard'
import steamClient from './steamClient'

function Body () {
  const ownedGames = steamClient.getOwnedGames()
  return (
    <Box mt={2}>
      <Grid container spacing={2}>
        {ownedGames.map(ownedGame => (
          <Grid key={ownedGame.appid} item xs={6} sm={4} md={2}>
            <GameCard game={ownedGame} />
          </Grid>))}
      </Grid>
    </Box>
  )
}

export default Body
