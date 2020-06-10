import React, { useState, useEffect } from 'react'
import {
  Box,
  CircularProgress,
  Grid,
  Button
} from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GameCard from './GameCard'

const getCookieValueByName = name => document.cookie && document.cookie
  .split('; ')
  .find(row => row.startsWith(name))
  .split('=')[1]

function Body ({ filter }) {
  const [games, setGames] = useState()
  const userId = getCookieValueByName('userId')
  useEffect(() => {
    if (!userId) return
    fetch(`https://localhost:9000/games/${userId}`)
      .then(response => response.json())
      .then(data => setGames(data))
  }, [userId])
  if (!userId) return (
    <Box display="flex" justifyContent="center" mt={10}>
      <Button
        color="primary"
        href="https://localhost:9000/login"
        startIcon={<AccountCircleIcon />}
        variant="contained"
      >
        Log in
      </Button>
    </Box>
  )
  if (!games) return (
    <Box display="flex" justifyContent="center" mt={10}>
      <CircularProgress />
    </Box>
  )
  return (
    <Box mt={2}>
      <Grid container spacing={2}>
        {games.slice(0, 60).filter(game => (
          game.name.toLowerCase().includes(filter.toLowerCase())
        )).map(games => (
          <Grid key={games.appid} item xs={6} sm={4} md={2}>
            <GameCard game={games} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Body
